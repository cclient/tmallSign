FROM node:8.2-alpine
EXPOSE 3000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install && npm cache verify
COPY . /usr/src/app
CMD ["npm","run","start"]
