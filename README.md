# Mini Microservices

## Project Setup

### Posts

    $ mkdir posts
    $ cd posts
    $ npm init -y
    $ npm install express cors axios nodemon body-parser

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express @types/cors

    $ npm start

### Comments

    $ mkdir comments
    $ cd comments
    $ npm init -y
    $ npm install express cors axios nodemon body-parser

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express @types/cors

    $ npm start

### Client

    $ npx create-react-app client --template typescript

    $ cd client
    $ npm install --save typescript @types/node @types/react @types/react-dom @types/jest

    $ npm install axios

    $ npm install --save bootstrap
    $ vim ./src/index.tsx
    // import "bootstrap/dist/css/bootstrap.css";

    $ npm start

### Event Bus

    $ mkdir event-bus
    $ cd event-bus
    $ npm init -y
    $ npm install express nodemon axios

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express

    $ npm start

### Query

    $ mkdir query
    $ cd query
    $ npm init -y
    $ npm install express cors nodemon axios

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express @types/cors

    $ npm start

## Moderation

    $ mkdir moderation
    $ cd moderation
    $ npm init -y
    $ npm install axios express nodemon

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express

    $ npm start

## Docker Setup

### Service

    $ cd <service-name>
    $ docker build -t mini/<service-name> .
    $ docker run mini/<service-name>

### General

    $ docker run -it <docker-image-tag> sh
    $ docker ps
    $ docker exec -it <docker-container-id>
    $ docker logs <docker-container-id>
