FROM node:20-alpine
WORKDIR /app
COPY package.json /app
RUN ["npm", "install"]
COPY . /app
# RUN ["npm", "run", "dev"]
CMD ["npm", "start"]
EXPOSE 3000