#!/bin/bash
echo ========================== nodejs deploy shell script start ==========================

echo git push test002
docker rm -f docker-node1
docker rmi docker-node-test_node1
docker build -t docker-node-test_node1 .
docker run -d --name docker-node1 -p 4997:5000 docker-node-test_node1
echo ========================== nodejs deploy shell script end ==========================