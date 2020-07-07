FROM node:12 as builder

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

ENV NODE_ENV=production

RUN yarn build

FROM nginx:1.15

COPY --from=builder /app/build/ /usr/share/nginx/html

EXPOSE 80
