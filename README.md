# paktoken-erc20-hardhat
<h1>ERC-20 Token</h1>
An Ethereum Token is an incredibly powerful feature of the Ethereum virtual machine, as it can represent virtually anything from financial assets, to skills of a game character, to a fiat currency, and so much more
<h1>Why build your own ERC-20 token?<h1></h1>
The ERC-20 token standard is the most popular way to create fungible cryptocurrencies on Ethereum and EVM-compatible blockchains, and therefore allows builders and creators to develop digital assets for their protocol, marketplace, metaverse, or community.
This tutorial will teach you how to create your own ERC-20 token on Ethereum’s Rinkeby testnet using Alchemy, MetaMask, HardHat, and Solidity code snippets. At the end of this tutorial you will be able to deploy your own ERC-20 token smart contract. The estimated time to complete this guide is 15 minutes.
<h1>What is the ERC-20 token standard?</h1>
The ERC-20 token standard ensures that all tokens have the same properties, including that all tokens are fungible (any one token is exactly equal to any other token), and no tokens have special properties or rights associated with them.
This means that for a token to follow the ERC-20 token standard, it must implement the following API methods and events:
totalSupply - a method that defines the total supply of your tokens, and stops creating new tokens when the totalSupply limit is reached
balanceOf - a method that returns the number of tokens a wallet address contains
transfer - a method that transfers in a certain amount of tokens from the total supply and sends it to a user
transferFrom - a transfer method that transfers ERC-20 tokens between users
approve - verifies whether a smart contract is allowed to allocate a certain amount of tokens to a user, considering the total supply
allowance - checks if a user has enough balance to send a tokens to another user
ERC-20 tokens are fungible (can be interchanged) because they have the same value and properties.
<h1>How to Create an ERC-20 Token</h1>
First, create an Alchemy account, setup Metamask, HardHat, and Solidity for this project. For a walkthrough, read through the ChainShot HardHat guide. 
Next, enter mk my-token and cd my-token to create a folder for your project and change directories to your my-token folder, then run npm init

<br>
mk my-token
<br>
cd my-token
<br>
npm init
<br>
Next, go to the my-token project root directory and type mkdir contracts and mkdir scripts into your command line to create two new folders that will organize your ERC-20 smart contracts and your deployment scripts:
<br>
mkdir contracts
<br>
mkdir scripts
<br>
<h1> Write ERC-20 Token Smart Contract</h1>
Here’s how to write the token contract for your ERC-20 token using Solidity, which is like Java and JavaScript, or C and C++:
<br>
Open up the my-token project in your code editor.
<br>
Navigate to your /contracts folder
<br>
Open a new .sol file and name the .sol file the same name as your token
<br>
Note: To create and work with your smart contract file, you must have a name that matches the name of your token. For example, to create a token named Web3Token, your contract file name should be Web3Token.sol.
<br>
Copy and paste this code snippet based on the OpenZeppelin ERC 20 implementation:
<br>
//SPDX-License-Identifier: Unlicense<br>
pragma solidity ^0.8.0;
<br>
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; <br>
// OpenZeppelin package contains implementation of the ERC 20 standard, which our NFT smart contract will inherit
<br>
contract GoofyGoober is ERC20 {<br>
    uint constant _initial_supply = 100 * (10**18); <br>
    // setting variable for how many of your own tokens are initially put into your wallet, feel free to edit the first number but make sure to leave the second number because we want to make sure our supply has 18 decimals<br>
    /* ERC 20 constructor takes in 2 strings, feel free to change the first string to the name of your token name, and the second string to the corresponding symbol for your custom token name */<br>
<br>
    constructor() ERC20("GoofyGoober", "GG") public {
        _mint(msg.sender, _initial_supply);<br>
    }<br>
}<br>
  The token symbol you choose, in our case "GG" can be any arbitrary character length but do keep in mind that some UIs may display ones that are too long differently.<br>
  Feel free to edit the initial supply by changing the 100 to how many tokens you would like your initial supply to be - we put 100 because there are very few true Goofy Goobers in the world! You can put any number you'd like for this - make sure to leave the (10**18) as that multiplies the number we want as our supply to have 18 decimals.<br>

<h1> Write a Deployment Script for your ERC-20 Token</h1><br>
Now that your token contract is written, write your smart contract deployment script by:<br>
Navigating to the /scripts folder<br>

Creating a new file called deploy.js<br>
Opening the deploy.js file<br>

Copying and pasting this ERC-20 deployment code snippet:<br>
deploy.js
<br>
async function main() {<br>

  const [deployer] = await ethers.getSigners();<br>
  console.log("Deploying contracts with the account:", deployer.address);<br>
  const weiAmount = (await deployer.getBalance()).toString();<br>
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));<br>
  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!<br>
  const Token = await ethers.getContractFactory("GoofyGoober");<br>
  const token = await Token.deploy();<br>
  console.log("Token address:", token.address);<br>
}<br>
main()<br>
  .then(() => process.exit(0))<br>
  .catch((error) => {<br>
    console.error(error);<br>
    process.exit(1);<br>
});<br>

<h1> Deploy your ERC-20 Token to Goerli</h1>
To deploy your ERC-20 token, navigate to your root directory and run the following command: <br>
npx hardhat run scripts/deploy.js --network goerli<br>
<br>
Your contract will be compiled and deployed to the Goerli network! You should see a message appear with information about the smart contracts you are deploying including your account address, account balance, and token address.<br>

