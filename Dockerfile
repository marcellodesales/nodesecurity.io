FROM alpine:edge

WORKDIR /app
ADD . /app

RUN apk --update add nodejs python build-base && \
    npm i -g npm && \
    npm i && \
    apk del python build-base && \
    rm -rf /var/cache/apk/* /root/.node-gyp /root/.npm /tmp/*

EXPOSE 3000

CMD ["npm", "start"]
