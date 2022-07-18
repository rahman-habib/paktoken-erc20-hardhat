async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const weiAmount = (await deployer.getBalance()).toString();
    
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));
  
    // make sure to replace the "PAKToken" reference with your own ERC-20 name!
    const Token = await ethers.getContractFactory("PAKToken");
    const gasPrice = await Token.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);
    const token = await Token.deploy();
  
    console.log("Token address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
  });
  //Token address: 0xBCc3aA11FDb16dd133db12d08817a5CdB109a98d
  