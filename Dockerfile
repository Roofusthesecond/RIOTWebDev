FROM resin/rpi-raspbian:latest

RUN apt-get install nginx
RUN /etc/init.d/nginx start

EXPOSE 80
