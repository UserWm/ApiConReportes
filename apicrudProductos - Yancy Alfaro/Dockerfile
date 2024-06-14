FROM node:latest

WORKDIR /home/app

COPY package*.json ./

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]