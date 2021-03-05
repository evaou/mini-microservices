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
    $ docker build -t <dockerhub-name>/<service-name> .
    $ docker push <dockerhub-name>/<service-name>
    $ docker run <dockerhub-name>/<service-name>

### General

    $ docker run -it <docker-image-tag> sh
    $ docker ps
    $ docker exec -it <docker-container-id>
    $ docker logs <docker-container-id>

## Kubernetes

### Service

    $ cd posts
    $ docker build -t <dockerhub-name>/posts .

    $ cd infra/k8s
    $ vim posts-depl.yaml
    $ kubectl apply -f posts.yaml
    $ kubectl get pods

    $ export DEBUG= // disable network log
    $ kubectl exec -it posts -- sh

### General

    // kind: pod, deployment, service
    $ kubectl get <kind>s
    $ kubectl exect -it <name> -- <command>
    $ kubectl logs <name>
    $ kubectl delete <kind> <name>
    $ kubectl apply -f <config-file-name>
    $ kubectl apply -f .
    $ kubectl describe <kind> <name>

    $ kubectl rollout restart deployment <name>

### Type of Kubernetes Services

- cluster ip: expose a pod url to same-cluster pods
- node port: expose a pod to outside world for dev

  - `$ kubectl get services`
  - posts-srv NodePort 10.105.139.132 \<none\> 4000:**32302**/TCP
  - http://localhost:32302/posts

- load balancer: expose a pod to outside world

  - tell cluster to reach cloud provider and provision cloud load balancer
  - outside world > cloud load balancer > ingress controller

- ingress controller: a cluster pod with a set of routing rules to direct traffic to cluster-ip services of pods

  - ingress-nginx: project to create a load balancer service + an ingress

    - `$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml`

    - `$ vim /etc/hosts`
      - 127.0.0.1 posts.com
      - algin with host in ingress-srv.yaml

- external name: redirect an in-cluster request to a CNAME url
