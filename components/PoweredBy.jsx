const PoweredBy = () => {
  const moralisLogo =
    "https://moralis.io/wp-content/uploads/2021/06/cropped-Moralis-Favicon-Glass.png";

  const avalancheLogo = "https://cryptologos.cc/logos/avalanche-avax-logo.png";

  const ipfsLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ipfs-logo-1024-ice-text.png/768px-Ipfs-logo-1024-ice-text.png";

  const PoweredParters = ({ title, url }) => (
    <div className="white-glassmorphism cursor-pointer hover:shadow-xl p-8 h-48 w-48">
      <img src={url} alt={title} />
      <p className="flex justify-center items-center mt-1 text-white text-lg">
        {title}
      </p>
    </div>
  );

  return (
    <div className="grid justify-center md:max-w-2xl mx-auto">
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient flex justify-center mb-5">
        Powered By
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PoweredParters title="Moralis" url={moralisLogo} />
        <PoweredParters title="Avalanche" url={avalancheLogo} />
        <PoweredParters title="IPFS" url={ipfsLogo} />
      </div>
    </div>
  );
};

export default PoweredBy;
