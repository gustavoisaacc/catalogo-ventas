FROM node:20.3 AS build

ARG NODE_ENV
ARG DATABASE_URL

ENV NODE_ENV=$NODE_ENV
ENV DATABASE_URL=$DATABASE_URL

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

RUN npm run migrations:run

EXPOSE 8080

CMD ["npm", "start"]