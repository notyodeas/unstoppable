const { Web3 } = require('web3');
const notewbs = new Web3('http://localhost:8545');

notewbs.eth.sendTransaction({
    from: "0x3fa88b1ea657e82ba28b7759c6b64accbac88a03",
    to: '0xA0de87c0c9B8AA64f4Ab7605521F4EB3196B9385',
    value: notewbs.utils.toWei(1, 'ether')
}).then(console.log);
notewbs.eth.accounts.wallet.remove('0xA0de87c0c9B8AA64f4Ab7605521F4EB3196B9385');
notewbs.eth.accounts.wallet.add('0xe5b1df089e0053fc9233256feeeb8e9dc9f525c91e0afb76e7986724b0c79a27');

// notewbs.eth.getTransactionReceipt('0xfe88b53f851d078949cad4819b22d574b5e1c6b7885cafe991b9f873d7720145').then(console.log)