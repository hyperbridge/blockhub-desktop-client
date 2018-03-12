exports.doSomething = function (web3, wat, cb) {
    const user = web3.eth.accounts[0];
    web3.eth.getTransactionCount(user, (err, nonce) => {
        // Form your tx object...
        var transaction = {
            from: "0x9453eD18535138Bd6037C31fd0EBCcba2b331961",
            to: "0x49e2ba4d0eede87d83b2b80947812d4de4232577",
            value: 0.1,
            gas: 50,
            gasPrice: 40,
            data: null,
            nonce: null
        }

        web3.eth.sendTransaction(transaction, (err, res) => {
            if (err) { cb(err); }
            else { cb(null, res); }
        })
    })
}