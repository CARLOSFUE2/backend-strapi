FROM node:12.19.0

RUN mkdir -p /usr/src/serve

WORKDIR /usr/src/serve

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 1337


