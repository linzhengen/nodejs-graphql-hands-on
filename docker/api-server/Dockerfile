# specify the node base image with your desired version node:<version>
FROM node:10.1.0

RUN useradd -ms /bin/bash app

ENV HOME=/home/app

# Create app directory
WORKDIR $HOME/api-server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN chown -R app:app $HOME

USER app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

ENV PATH=$PATH:$HOME/src/node_modules/.bin
CMD ["npm", "run", "dev"]