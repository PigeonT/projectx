FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get install -y gnupg2
RUN apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN apt-get install -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y yarn
RUN npm install -g yarn
RUN yarn global add expo-cli
RUN yarn global add react-native-cli
RUN yarn global add typescript 

WORKDIR /usr/src/projectx
COPY . /usr/src/projectx

EXPOSE 19002
EXPOSE 8081
