FROM ubuntu:16.04

# install utilities
RUN \
  apt-get update && \
  apt-get install -y git curl wget screen && \
  apt-get install -y build-essential libssl-dev python && \
  apt-get install -y language-pack-zh-hans

RUN \
  apt-get install -y apt-file && \
  apt-file update && \
  apt-get install -y software-properties-common

RUN \
  apt-add-repository -y ppa:ethereum/ethereum && \
  apt-get update && \
  apt-get install -y solc

# set locale & timezone
RUN locale-gen zh_CN.UTF-8
ENV LANG zh_CN.UTF-8
ENV LC_ALL zh_CN.UTF-8
ENV TZ Asia/Shanghai

# install remix
RUN \
  curl -sL https://deb.nodesource.com/setup_7.x | bash && \
  apt-get install -y nodejs

RUN git clone https://github.com/ethereum/remix-ide.git
WORKDIR /remix-ide
RUN npm install
RUN npm run setupremix

EXPOSE 8080

CMD ["npm", "start"]
