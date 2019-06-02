FROM php:7-fpm-alpine

MAINTAINER "Ikezoe Makoto" <150283t@gmail.com>

# 必要そうなやつ
RUN apk update && \
    apk add make git shadow && \
    rm -rf /var/cache/apk/*

ARG USER_ID
ARG GROUP_ID

ENV APACHE_RUN_USER="developer" \
    APACHE_RUN_GROUP="developer"

RUN groupadd -g $GROUP_ID -o developer &&\
    useradd -m developer -u $USER_ID -g $GROUP_ID

# php拡張
RUN docker-php-ext-install pdo_mysql mysqli mbstring

COPY ./etc /usr/local/etc

WORKDIR /app