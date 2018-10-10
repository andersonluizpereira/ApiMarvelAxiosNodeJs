FROM node:7.7-onbuild

ENV NPM_CONFIG_LOGLEVEL error

LABEL name='marvel.oms'
LABEL version="1.0"

EXPOSE 3000