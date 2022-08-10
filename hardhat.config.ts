import 'dotenv/config';

import '@nomiclabs/hardhat-vyper';
import '@matterlabs/hardhat-zksync-vyper';
import '@matterlabs/hardhat-zksync-deploy';

import { HardhatUserConfig } from 'hardhat/config';

const config: HardhatUserConfig = {
    zkvyper: {
        compilerSource: 'binary',
        settings: {
            compilerPath: './zkvyper-bin/linux-amd64/zkvyper-linux-amd64-musl-v1.1.2',
        },
    },
    zkSyncDeploy: {
        zkSyncNetwork: 'https://zksync2-testnet.zksync.dev',
        ethNetwork: 'goerli', // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    },
    networks: {
        hardhat: {
            zksync: true,
            accounts: {
                mnemonic: process.env.MNEMONIC || '',
            },
        },
    },
    vyper: {
        version: '0.3.3',
    },
    solidity: {
        version: '0.8.15',
    },
};

export default config;
