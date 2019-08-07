FROM node:alpine as builder

WORKDIR /usr/src/graphql-gateway
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine

RUN mkdir -p /usr/src/graphql-gateway
RUN mkdir -p /usr/src/assets
WORKDIR /usr/src/graphql-gateway
COPY --from=builder /usr/src/graphql-gateway/lib .
COPY --from=builder /usr/src/graphql-gateway/package* ./
COPY --from=builder /usr/src/graphql-gateway/assets ../assets
RUN npm install --production

CMD ["node", "entrypoint.js"]

