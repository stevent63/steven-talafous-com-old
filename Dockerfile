# st-registry.tenant-5c610a-dev.lga1.ingress.coreweave.cloud/steven-talafous-com:1

FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]