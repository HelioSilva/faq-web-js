# Dockerfile

# base image
FROM node:14.15.4-alpine3.12
# FROM node:carbon

# Enable bash in container
RUN apk add --no-cache bash

# Set USER
#USER node

# install Yarn
# RUN apk add --no-cache yarn

# Diretory
WORKDIR /home/node/app

# copy source files
COPY . /home/node/app

# install dependencies
#RUN npm install

# EXPOSE 3333

# CMD npm start