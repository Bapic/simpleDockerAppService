# get the base image
FROM node:alpine
WORKDIR /usr/app

# install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# default command
CMD ["npm", "start"]