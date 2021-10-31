#!/bin/bash
echo ========================== nodejs deploy shell script start ==========================

echo git push test002
docker rm -f docker-node1
docker rmi docker-node-test_node1
docker build -t docker-node-test_node1 .
docker run -d -p 4997:5000 docker-node1
echo ========================== nodejs deploy shell script end ==========================