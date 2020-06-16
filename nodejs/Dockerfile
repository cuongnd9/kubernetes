FROM node:10-alpine

COPY yarn.lock ./
COPY package.json ./
RUN yarn

COPY . ./

EXPOSE 3000

CMD [ "yarn", "start" ]
