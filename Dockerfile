FROM keymetrics/pm2:18-alpine

WORKDIR /app

COPY ./.output /app
COPY ./pm2.json /app

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start","/app/pm2.json"]