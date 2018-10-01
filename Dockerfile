# use Ubuntu 16.04 instead of node docker
# to mimic the production environment
FROM node:8.12-stretch

WORKDIR /usr/src/site

COPY package*.json ./

RUN npm install

COPY . .

RUN sed -i -e "s|mongodb://localhost/cwbforum|mongodb://mongo:27017/cwbforum|g" index.js

EXPOSE 8080

CMD [ "npm", "start" ]


