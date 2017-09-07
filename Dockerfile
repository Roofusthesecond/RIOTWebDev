FROM resin/rpi-raspbian:latest

RUN apt-get update

RUN apt-get install nginx

EXPOSE 80

#CMD /etc/init.d/nginx start
CMD /usr/sbin/nginx -g "daemon off;"
