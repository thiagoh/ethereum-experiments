function minedBlocks(lastn, addr) {
    var addrs = [];
    if (!addr) {
        addr = eth.coinbase;
    }
    var limit = eth.blockNumber - lastn;

    for (var i = eth.blockNumber; i >= limit && i >= 0; i--) {
        var miner = eth.getBlock(i).miner;

        if (eth.getBlock(i).miner === addr) {
            addrs.push(i);
        }
    }

    return addrs;
}

function minedBlocks2(lastn, addr) {
    var addrs = [];
    if (!addr) {
        addr = eth.coinbase;
    }
    var blockNumber = eth.syncing.currentBlock;
    var limit = blockNumber - lastn;

    for (var i = blockNumber; i >= limit && i >= 0; i--) {
        var miner = eth.getBlock(i).miner;

        if (eth.getBlock(i).miner === addr) {
            addrs.push(i);
        }
    }

    return addrs;
}