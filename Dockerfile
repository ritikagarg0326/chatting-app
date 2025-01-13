
FROM node:latest


WORKDIR /home/app

COPY app.js /home/app/app.js
COPY package.json package-lock.json /home/app/

WORKDIR /home/app

RUN npm install


EXPOSE 9000 
# Start the application
CMD ["node", "app.js"]
