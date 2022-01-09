import { useMoralis } from "react-moralis";
import svg1 from "../public/images/svg_1.svg";
import Image from "next/image";

const LoginSection = () => {
  const { authenticate, user } = useMoralis();

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Share NFT
          </h1>
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell NFTs easily on Krypto.
          </p>
          <button
            type="button"
            onClick={authenticate}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-lg cursor-pointer hover:bg-[#2546b]"
          >
            <p className="text-base text-white font-semibold">
              Connenct Wallet
            </p>
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fess</div>
            <div className={`rounded-br-xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start mf:mt-0 mt-10 h-96 w-full">
          <Image src={svg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
