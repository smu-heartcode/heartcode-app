FROM node:14-alpine

ENV HOST 0.0.0.0
EXPOSE 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm ci

ENV NODE_ENV production

COPY . /usr/src/app/
RUN yarn run generate

CMD [ "npm", "run", "start" ]
