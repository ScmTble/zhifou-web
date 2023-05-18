FROM keymetrics/pm2:18-alpine

WORKDIR /app

COPY ./.output /app
COPY ./pm2.json /app

#ENTRYPOINT NUXT_PUBLIC_API_BASE http://127.0.0.1:8000/v1
EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "start","/app/pm2.json"]