# Mini Microservices

## Project Setup

### Posts/Comments/Query

    $ mkdir <service-name>
    $ cd <service-name>
    $ npm init -y
    $ npm install express cors axios nodemon typescript ts-node
    $ npm install --save-dev @types/express @types/cors

    $ vim tsconfig.json

    $ npm start

### Moderation/Event Bus

    $ mkdir <service-name>
    $ cd <service-name>
    $ npm init -y
    $ npm install express nodemon axios typescript ts-node
    $ npm install --save-dev @types/express

    $ vim tsconfig.json

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
