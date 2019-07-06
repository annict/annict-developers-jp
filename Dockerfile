FROM node:10.16.0-alpine

LABEL maintainer="https://annict.com/@shimbaco" \
      description="Developer portal site for Annict."

RUN apk update && \
    apk add -t build-dependencies \
        build-base

ENV PATH=./node_modules/.bin/:$PATH \
    NODE_ENV=development

WORKDIR /developers-jp/

COPY package.json yarn.lock /developers-jp/
RUN yarn install && \
    yarn cache clean

COPY . /developers-jp/

EXPOSE 5000
