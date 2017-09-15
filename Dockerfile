FROM resin/rpi-raspbian:latest

RUN apt-get update

RUN apt-get install nginx php5-fpm

ADD ./src /var/www/html
RUN ls /var/www/html

RUN cat /etc/nginx/sites-enabled/default

EXPOSE 80

#CMD /etc/init.d/nginx start
CMD /usr/sbin/nginx -g "daemon off;"


