# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install -g npm@8.12.1

# copy other project files
COPY . .

RUN RUN npm i react-scripts

# build the folder
CMD [ "npm", "run", "start" ]
