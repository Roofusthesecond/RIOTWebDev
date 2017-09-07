FROM resin/rpi-raspbian:latest

RUN apt-get update

RUN apt-get install nginx

EXPOSE 80

CMD /usr/bin/nginx start
