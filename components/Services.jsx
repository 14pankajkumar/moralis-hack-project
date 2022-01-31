import { RiHeart2Fill } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";

const Services = () => {
  const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div
        className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
      >
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Explore
            <br />
            web3 social media
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center">
          <ServiceCard
            color="bg-[#2952E3]"
            title="Mint NFTs"
            icon={<AiOutlineCamera fontSize={21} className="text-white" />}
            subtitle="Turn your awesome pictures into NFTs in a decentrelized way. NFTs can really be anything digital such as drawings, photos, videos etc."
          />
          <ServiceCard
            color="bg-[#F84550]"
            title="Social Media"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Now your NFTs are not just collectibles but you can share your NFTs with other people."
          />
          <ServiceCard
            color="bg-[#8945F8]"
            title="MarketPlace"
            icon={<FaOpencart fontSize={21} className="text-white" />}
            subtitle="You can sell and buy NFTs easily on same platform with cheaper fees and lightning-fast speed."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
