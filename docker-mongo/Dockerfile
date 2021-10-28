FROM mongo

WORKDIR /db
RUN mkdir configs
WORKDIR /db/configs

COPY /docker-mongo/replicaSet.js /db/configs/replicaSet.js
COPY /docker-mongo/setup.sh /db/configs/setup.sh
# 파일권한설정
RUN chmod +x /db/configs/setup.sh

CMD ["/db/configs/setup.sh"]