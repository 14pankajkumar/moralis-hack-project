import { SiAppannie } from "react-icons/si";

const Footer = () => (
  <div className="max-w-7xl mx-auto w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <SiAppannie className="lg:block" fontSize={35} color="white" />
        <img
          src="https://media.graphcms.com/lW8Lg3WjQJqgwkJFuYdP"
          alt="logo"
          className="w-32 h-10 object-cover"
        />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2">
          &copy; hamara.io
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          About
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Privacy
        </p>

        <a
          href="https://github.com/14pankajkumar/moralis-hack-project"
          target="_blank"
          className="text-white text-base text-center mx-2 cursor-pointer"
        >
          Github
        </a>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="mailto:pankajkumardas727@gmail.com">Contact</a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
