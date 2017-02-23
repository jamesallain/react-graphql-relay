FROM nginx:alpine

COPY nginx-default.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/html

EXPOSE 80

CMD sed -i 's|API_PUBLIC_URL|'$API_PUBLIC_URL'|g' /usr/share/nginx/html/index.html  && nginx -g 'daemon off;'