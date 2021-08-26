FROM alpine:3.9 AS builder

COPY . /webfront
WORKDIR /webfront

RUN apk add --no-cache --update npm && \
    npm i && npm run build


FROM nginx:1.19.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /webfront/build /usr/share/nginx/html
