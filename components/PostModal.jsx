import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCamera } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { postModalState } from "../atoms/PostModalAtom";
import Moralis from "moralis";
import { useMoralis, useMoralisFile } from "react-moralis";
import Web3 from "web3";

const PostModal = () => {
  const { user } = useMoralis();
  const [open, setOpen] = useRecoilState(postModalState);
  const cancelButtonRef = useRef(null);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const { error, isUploading, moralisFile, saveFile } = useMoralisFile();
  const web3 = new Web3(window.ethereum);
  const nft_contract_address = "0x337C65B6E2689783948B54E99aAE6399EfDe8f63";

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const onSubmit = async () => {
    setLoading(true);

    // Save file input to IPFS
    saveFile(imageFile.name, imageFile, { saveIPFS: true });

    const imageURL = moralisFile?.ipfs();

    const metadata = {
      name: "Ben 10",
      description: captionRef.current.value,
      image: imageURL,
    };

    saveFile(imageFile.name, imageFile, {
      metadata,
      saveIPFS: true,
    })
      .then(async (res) => {
        console.log(res._ipfs);
        // console.log("Image uploaded", moralisFile?._ipfs, moralisFile?._hash);
        const imageURL_2 = res._ipfs;
        const imageHash = res._hash;

        await mintToken(imageURL_2)
          .then((res) => {
            console.log(res);
            saveData(imageURL_2, imageHash);
          })
          .catch((err) => console.log(err));
        setOpen(false);
        setLoading(false);
        setImageFile(null);
        setSelectedFile(null);
      })
      .catch((err) => console.log(err));
  };

  // function for mint token
  const mintToken = async (_uri) => {
    const encodedFunction = web3.eth.abi.encodeFunctionCall(
      {
        name: "mintToken",
        type: "function",
        inputs: [
          {
            type: "string",
            name: "tokenURI",
          },
        ],
      },
      [_uri]
    );

    const transactionParameters = {
      to: nft_contract_address,
      from: ethereum.selectedAddress,
      data: encodedFunction,
    };

    const txtId = await ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });

    return txtId;
  };

  // save data to moralis
  const saveData = (ipfsUrl, ipfsHash) => {
    const Posts = Moralis.Object.extend("Posts");
    const posts = new Posts();

    posts.save({
      username: user.getUsername(),
      ethAddress: user.get("ethAddress"),
      caption: captionRef.current.value,
      ipfsUrl: ipfsUrl,
      ipfsHash: ipfsHash,
    });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full blue-glassmorphism">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    onClick={() => setSelectedFile(null)}
                    alt=""
                    className="w-full object-contain cursor-pointer"
                  />
                ) : (
                  <div
                    onClick={() => filePickerRef.current.click()}
                    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                  >
                    <AiOutlineCamera
                      className="h-6 w-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div>
                  <div className="text-lg text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-white"
                    >
                      Create a NFT
                    </Dialog.Title>

                    <div>
                      <input
                        ref={filePickerRef}
                        type="file"
                        name=""
                        id=""
                        hidden
                        onChange={addImageToPost}
                      />
                    </div>

                    <div className="mt-2">
                      <input
                        className="border-none focus:ring-0 w-full text-center outline-none bg-transparent text-white"
                        placeholder="Please enter a caption..."
                        type="text"
                        name=""
                        id=""
                        ref={captionRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={onSubmit}
                  disabled={!selectedFile}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                >
                  {loading ? "Uploading..." : "Upload Post"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PostModal;
