# Dockerfile

# base image
FROM node:alpine
# FROM node:carbon

# install Yarn
# RUN apk add --no-cache yarn

# create & set working directory
RUN mkdir -p /usr/src

WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

EXPOSE 3333

CMD npm start