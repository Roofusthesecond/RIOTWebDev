FROM resin/rpi-raspbian:latest

RUN apt-get update

RUN apt-get install nginx

RUN ls /var/www/html

EXPOSE 80

#CMD /etc/init.d/nginx start
CMD /usr/sbin/nginx -g "daemon off;"
