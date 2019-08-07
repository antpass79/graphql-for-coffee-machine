FROM node:alpine as builder

WORKDIR /usr/src/coffee-machine
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/coffee-machine/dist/client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
