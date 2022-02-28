FROM node:16

RUN mkdir /app
WORKDIR /app

COPY ./ ./prisma/

CMD [ "npx","prisma", "studio"]