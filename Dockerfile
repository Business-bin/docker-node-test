# 이미지 설정(로컬에서 이미지를 먼저 찾고, 없으면 리모트서버에서 받아옴(여기선 node 14버전 기반 이미지)
FROM node:14-alpine
# 이미지 안에 애플리케이션 코드를 넣기 위한 작업공간 생성. 이곳에 컨테이너가 위치
WORKDIR /app
# 이미지에 node.js와 npm은 설치돼 있으므로 의존성 설치
# node기반의 컨테이너 /app디렉토리에 package*.json을 카피
COPY package.json /app
# npm 설치
RUN npm install
RUN npm install -g pm2
# 캐쉬 삭제
#RUN npm cache clean --force
# 남아있는 소스코드 복사
COPY . .
# 도커 실행시 실행될 명령어(서버 구동)
CMD [ "npm", "run", "dev" ]
# 5000포트 오픈
EXPOSE 5000