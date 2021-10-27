FROM node:14 as base
EXPOSE 3000 9229

WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/


COPY . /home/app

RUN npm run build
