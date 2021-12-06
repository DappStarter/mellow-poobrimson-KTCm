require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index return sad unable include enter fresh team'; 
let testAccounts = [
"0x67c02fb0af20fedcd053ff092079ffeafa67f8ea2e55c848a67c978a3f1451b7",
"0x695f00c345e281f1e163eb56e7bca8f19bd2e86d0555fe4f9bfa02a3700f8cda",
"0x822d9ee9df025194b00d529728e2e74f5f7dc0492769bf3aa798c5752260e040",
"0x19886cb1660fe526fe58b1cfa94b26dea85283bb82b38b0db629ddf052855f96",
"0x1617acd3f6ad1b90a19f730feaf81b7af072b45f0591e96e7cb205fd1f86d19a",
"0xbbcebfa65b911fd04b8442b83335ad3ca753278cb76988c64d1b87d5c078e787",
"0x743e6a45a175f23c57f7e243bdcb240f1de934f7f7cb2fe01cb2503ad4a84ff0",
"0xa08712261bcb7635477a412040b2a75456e6f9b2e0167cbd1be277ffda6d662d",
"0xe1f6c09e2fbece1a538638b8f2bce969e81726675a88558a69fc35be3ac3f7e7",
"0x1e9bfd287f011a0e673aedae6541672a1f8f9fc875df3ddffc50198dc72d71dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


