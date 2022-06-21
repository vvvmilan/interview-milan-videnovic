FROM ubuntu:22.04

# update
RUN apt-get update
RUN apt-get -y upgrade
# install curl
RUN apt-get -y install curl
# get install script and pass it to execute:
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
# and install node
RUN apt-get -y install nodejs

WORKDIR /www
COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
