# add the Node.js docker image
FROM node:16

# Create directory that runs the app on docker
RUN mkdir /app

WORKDIR /app

# COPY package.json and package-lock.json files
COPY package.json yarn.lock ./
COPY package*.json ./

# COPY
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# Install package.json dependencies
RUN yarn install

# COPY
COPY . .

# Generate prisma client
RUN npx prisma generate

# Run and expose the server on port 3000
EXPOSE 4000

# A command to start the server
CMD yarn dev