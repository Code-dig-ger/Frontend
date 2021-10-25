FROM node:14.17.3-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
