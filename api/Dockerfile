FROM node:14-alpine

ENV HOST 0.0.0.0
EXPOSE 4000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm ci

ENV NODE_ENV production
ENV FASTIFY_BODY_LIMIT 104857600

COPY . /usr/src/app/

CMD [ "npm", "run", "start" ]
