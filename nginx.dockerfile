FROM nginx:latest
COPY /codigos /var/www
COPY /config-nginx/nginx.conf /etc/nginx/nginx.conf