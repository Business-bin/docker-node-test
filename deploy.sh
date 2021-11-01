#!/bin/bash
echo ========================== nodejs deploy shell script start ==========================

docker build --pull=true -t docker-node-test_node1 .

echo docker-node1 run!!!!!!!!!!!!!!!!!!!!!
docker rm -f docker-node1
docker run -d --name docker-node1 --network docker-node-test_mongo-networks -p 4997:5000 docker-node-test_node1

echo docker-node2 run!!!!!!!!!!!!!!!!!!!!!
docker rm -f docker-node2
docker run -d --name docker-node2 --network docker-node-test_mongo-networks -p 4998:5000 docker-node-test_node2

echo docker-node3 run!!!!!!!!!!!!!!!!!!!!!
docker rm -f docker-node3
docker run -d --name docker-node3 --network docker-node-test_mongo-networks -p 4999:5000 docker-node-test_node3

echo ========================== nodejs deploy shell script end ==========================