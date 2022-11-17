require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name rate place concert grace lonely equal gauge'; 
let testAccounts = [
"0xed4b0b6ffedb028d846e4cf33504e26361829af043b7f045293f5813a8b05cc5",
"0x951c395cf7d0c0b3ad52dc80cf75c76bf1365673df9600eaf641a060aef11d4d",
"0x33ea136cf9b332504ba287a3afa2797abd285fd985171dd562178b8b377b449e",
"0xece621a8872e969cf54f25bf3d54bbf5c0a944481fc42e907aaa6bba68661127",
"0x92ba528106dc25e327a3344126ce7f9bf458a44b2e3b02890ab12b689b985c49",
"0xf709c9ba115cdf661f7bf8f136dd665f5ded67a7731afb6c986243633005f865",
"0x16839c00412ddd50729612fc3bba32e116920299d03a37bf2855f3888d6acd3a",
"0x9e67bc8bb8ec9b87c4972cf21006bf1a82248484b5ec479a5507497938ede08b",
"0x1e35708700867562a2eb467b665a8eddb8b5b556441f67e4ebce286415e794f3",
"0x0664c60246f031192131aa075163822f4869baf9acf557dde6cdd1f3a4223c11"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

