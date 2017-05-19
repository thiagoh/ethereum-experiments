#!/bin/bash

networkid=77778
datadir=.ethereum_private-$networkid
port=30304

echo $datadir
rm -rf $datadir
mkdir $datadir

geth --identity "MyNodeName" --rpc --rpcport "8080" \
  --rpccorsdomain "*" --datadir "C:\chains\TestChain1" \
  --port "30303" --nodiscover --rpcapi "db,eth,net,web3" \
  --networkid 1999 init /path/to/CustomGenesis.json

  # --rpc \
  # --ipcpath ~/Library/Ethereum/geth.ipc \
geth --fast --cache 512 \
  --rpccorsdomain "*" \
  --nodiscover \
  --networkid $port \
  --port $port \
  --datadir $datadir \
  2>>$datadir/geth.log init genesis-$networkid.json
  
  # --rpc \
  # --ipcpath ~/Library/Ethereum/geth.ipc \
nohup geth --fast --cache 512 \
  --rpccorsdomain "*" \
  --nodiscover \
  --networkid $port \
  --port $port \
  --datadir $datadir \
  2>>$datadir/geth.log &

pid=$(echo $!)

function finish {
  kill -9 $pid
  echo Killed geth of pid $pid
}
trap finish EXIT
echo Started geth with pid $pid

tail -f $datadir/geth.log | ctail








