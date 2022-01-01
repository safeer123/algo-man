FROM node:14.3

WORKDIR /src

COPY . .

# nano used for text file read/write. useful here
# RUN npm install
RUN apt update
RUN apt install nano

CMD ["npm", "start"]

########################## HOW TO USE ##########################

# -> Build an image out of this and run it as a container with bash command
# -> bind the files with /src dir
# docker build -t node-server:1.0 .
# docker run -p 3000:3000 --link mysql_db:db_server -it -v $(pwd):/src node-server:1.0

# here '--link mysql_db:db_server' means that db_server is the hostname added in /etc/hosts/
# and this host will point to the IP beloging to mysql_db container running already
# inside node server we can use db_server as the host for mysql DB
