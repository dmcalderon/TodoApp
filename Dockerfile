FROM node:latest

RUN apt-get update
RUN apt-get install -y postgresql

COPY ./ ./
USER postgres
RUN /etc/init.d/postgresql start && createdb -T template0 todos && psql todos < todoDbDump

USER root
RUN npm install --global ember-cli

RUN npm install
RUN ember build

EXPOSE 8080
EXPOSE 5432
CMD ["postgres", "node server_src/server.js"]
