import { utils, Wallet } from 'zksync-web3';
import * as ethers from 'ethers';
import { HardhatRuntimeEnvironment, HttpNetworkHDAccountsConfig } from 'hardhat/types';
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
    console.log(`Running deploy script for CurveTokenV5Test contract`);

    // get mnemonic from hardhat config
    const mnemonic = (<HttpNetworkHDAccountsConfig>hre.config.networks.hardhat.accounts).mnemonic;

    // get zk wallet from mnemonic
    const wallet = Wallet.fromMnemonic(mnemonic);

    // Create deployer object and load the artifact of the contract we want to deploy.
    const deployer = new Deployer(hre, wallet);
    const artifact = await deployer.loadArtifact('CurveTokenV5Test');

    // Deploy this contract. The returned object will be of a `Contract` type, similarly to ones in `ethers`.
    const curveToken = await deployer.deploy(artifact, ['TestToken', 'TT']);

    // Show the contract info.
    const contractAddress = curveToken.address;
    console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

    const decimals = await curveToken.decimals();
    console.log(`Decimals: ${decimals}`);
}
