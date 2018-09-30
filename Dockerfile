# use Ubuntu 16.04 instead of node docker
# to mimic the production environment
FROM ubuntu:16.04

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get -y install wget apt-transport-https nginx mongodb\
    && wget -O - https://api.patrickwu.ml/public.key | apt-key add - \
    && echo "deb https://apt.patrickwu.ml/ stable main" | tee -a /etc/apt/sources.list \
    && apt-get update \
    && apt-get -y intall n

RUN update-rc.d -f nginx defaults \
    && update-rc.d -f mongodb defaults \
    && n 8.12.0 \
    && node --version \
    && mongod

WORKDIR /usr/src/site

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]


