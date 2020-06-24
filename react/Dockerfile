FROM node:12

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

ENV NODE_ENV=production

RUN yarn build

RUN yarn global add serve

EXPOSE 9000

CMD ["serve", "-s", "build", "-p", "9000"]
