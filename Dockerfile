# base image
FROM node:18.14.0

WORKDIR /app

COPY package.json .
RUN npm install

# copy app source
COPY . .

RUN npm run build

EXPOSE 3000