# base image
FROM node:alpine

# work dir
WORKDIR /app 

# copy package.json
COPY ./package.json ./

# install dependency
RUN npm i

# copy project files
COPY ./ ./

# start server
CMD [ "npm", "run", "dev" ]