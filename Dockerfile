FROM resin/rpi-raspbian:latest

RUN apt-get update

RUN apt-get install nginx
RUN /etc/init.d/nginx start

EXPOSE 80
