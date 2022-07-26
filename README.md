# paktoken-erc20-hardhat
## ERC-20 Token
An Ethereum Token is an incredibly powerful feature of the Ethereum virtual machine, as it can represent virtually anything from financial assets, to skills of a game character, to a fiat currency, and so much more
### Why build your own ERC-20 token?
The ERC-20 token standard is the most popular way to create fungible cryptocurrencies on Ethereum and EVM-compatible blockchains, and therefore allows builders and creators to develop digital assets for their protocol, marketplace, metaverse, or community.
This tutorial will teach you how to create your own ERC-20 token on Ethereum’s Rinkeby testnet using Alchemy, MetaMask, HardHat, and Solidity code snippets. At the end of this tutorial you will be able to deploy your own ERC-20 token smart contract. The estimated time to complete this guide is 15 minutes.
### What is the ERC-20 token standard?
The ERC-20 token standard ensures that all tokens have the same properties, including that all tokens are fungible (any one token is exactly equal to any other token), and no tokens have special properties or rights associated with them.
This means that for a token to follow the ERC-20 token standard, it must implement the following API methods and events:
totalSupply - a method that defines the total supply of your tokens, and stops creating new tokens when the totalSupply limit is reached
balanceOf - a method that returns the number of tokens a wallet address contains
transfer - a method that transfers in a certain amount of tokens from the total supply and sends it to a user
transferFrom - a transfer method that transfers ERC-20 tokens between users
approve - verifies whether a smart contract is allowed to allocate a certain amount of tokens to a user, considering the total supply
allowance - checks if a user has enough balance to send a tokens to another user
ERC-20 tokens are fungible (can be interchanged) because they have the same value and properties.
### How to Create an ERC-20 Token

