FROM node:20-alpine
WORKDIR /app
COPY app/ /app/
RUN npm init -y && npm install express
EXPOSE 8080
CMD ["node", "server.js"]