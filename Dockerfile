# syntax=docker/dockerfile:1
FROM node:lts-slim
WORKDIR /app
COPY package*.json /app/
RUN npm ci --omit=dev
COPY . .
EXPOSE 8080
EXPOSE 10449
CMD ["node", "index.js"]