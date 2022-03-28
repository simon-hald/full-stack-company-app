FROM node:17
WORKDIR /usr/src/app
COPY backend/package*.json ./
RUN npm install
# Bundle app source
COPY backend/dist/ .
RUN chmod 777 ./repos/database.json
EXPOSE 8081
CMD [ "npm", "run", "start:docker" ]
