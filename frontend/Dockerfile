FROM node:16

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock ./
COPY package*.json ./
COPY tsconfig.json ./
RUN yarn install
COPY . .
EXPOSE 3000

CMD ["yarn", "start"]