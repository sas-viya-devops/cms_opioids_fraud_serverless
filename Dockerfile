# Please edit these variables only
# Actually, dont edit anything here - edit the overrides.env instead :)
# End of section you are editing


# docker specific information 

FROM node:12.4.0-alpine

LABEL maintainer=sundaresh.sankaran@sas.com
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install 
EXPOSE 8080



# env specific infomation

# App related environment variables

ENV APPNAME=cms
ENV APPLOC=./public
ENV APPENTRY=logon.html
ENV APPHOST=0.0.0.0
ENV APPPORT=8080
ENV REDIRECT=index.html

# run time  environment variables
ENV AUTHFLOW=implicit
ENV OAUTH2=NO
ENV PROXYSERVER=NO
ENV SAS_SSL_ENABLED=NO


# Docker specific
CMD ["npm", "run","indocker"]
