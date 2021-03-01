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

    $ npm run dev

### Comments

    $ mkdir comments
    $ cd comments
    $ npm init -y
    $ npm install express cors axios nodemon body-parser

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express @types/cors

    $ npm run dev

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

    $ npm run dev

### Query

    $ mkdir query
    $ cd query
    $ npm init -y
    $ npm install express cors nodemon

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express @types/cors

    $ npm run dev

## Moderation

    $ mkdir moderation
    $ cd moderation
    $ npm init -y
    $ npm install axios express nodemon

    $ npm install typescript ts-node
    $ tsc --init
    $ vim tsconfig.json

    $ npm install --save-dev @types/express

    $ npm run dev
