# Dockerfile

# base image
FROM node:14.15.1-alpine

# create & set working directory
RUN mkdir -p /usr/src

WORKDIR /usr/src

# copy source files
COPY package*.json /usr/src

# install dependencies
RUN npm install

COPY . /usr/src

# start app
RUN npm run build

EXPOSE 3000

CMD "npm" "start"