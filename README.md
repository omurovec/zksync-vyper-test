# Error overview

When compiling the `CryptoSwap2ETH.vy` contract using the `matterlabs/zkvyper` docker image, the process fails with the following error:

```sh
Error in plugin @matterlabs/hardhat-zksync-vyper: Contract `/contracts/CurveCryptoSwap2ETH.vy` compiling error: The contract `/contracts/CurveCryptoSwap2ETH.vy` LLVM IR generator definition pass error: Unknown LLL expression: {"select":[{"gt":[10000000000000000,"_r"]},10000000000000000,"_r"]}
```

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
