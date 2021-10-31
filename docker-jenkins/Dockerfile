FROM jenkins/jenkins:lts

# 도커를 실행하기 위한 root 계정으로 전환
USER root

# docker 설치
#RUN curl -s https://get.docker.com/ | sh
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN sh get-docker.sh
# 젠킨스 컨테이너에 도커 설치를 위한 shell script 작성
#COPY /docker-jenkins/docker_install.sh /docker_install.sh
## 실행권한
#RUN chmod +x /docker_install.sh
#RUN /docker_install.sh

# 설치 후 도커그룹의 docker-jenkins 계정 생성 후 해당 계정으로 변경
#RUN groupadd -f docker
#RUN usermod -aG docker docker-jenkins
#USER docker-jenkins