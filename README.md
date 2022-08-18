# ZkSync Vyper tests

Minimum example based on https://v2-docs.zksync.io/dev/guide/hello-world.html#initializing-the-project-deploying-smart-contract

To run the example define copy an 

`MNEMONIC="test test test `

to an .env file.

# Compile

`yarn hardhat compile`

# Try deployment

`yarn hardhat deploy-zksync --script deploy/deployToken.ts`

`yarn hardhat deploy-zksync --script deploy/deployCurve.ts`

