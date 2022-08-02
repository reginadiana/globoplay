FROM node:16

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm install --location=global json-server

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]