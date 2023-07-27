#!/bin/bash -eu
#	docker rm --force redis_liil;
#   	docker run --name redis-liil -d -p 6379:6379 redis; 


ins_docker() {
   sudo  apt update && sudo apt install docker;
}
#ins_docker
SERVICE="docker"
if pgrep -x "$SERVICE" >/dev/null
then
    echo "$SERVICE is running"
else
    echo "$SERVICE stopped"
    sudo service docker start
#    cd API ; docker-compose up -d

fi
