FROM node:14-alpine

ENV HOST 0.0.0.0
EXPOSE 4000

# Create app directory & run yarn install
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json yarn.lock /usr/src/app/
RUN yarn --pure-lockfile

ENV NODE_ENV production

COPY . /usr/src/app/

CMD [ "yarn", "run", "start" ]
