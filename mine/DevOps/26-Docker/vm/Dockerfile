# install node
# clone the repo  
# run npm i 
# run node index.js

# //base image 
FROM node:24-alpine 

#  working directory of the docker file 
# the source copy to app 
WORKDIR /app

# WE ARE COPYING THE SOURCE CODE TO THE WORKDIR

# ADD DOCKERIGNORE  

# COPY . .  

# COPY ALL THE FILES FROM HERE TO WORK DIR /app/ 


# run commands runs the run commands 
#  this is the expensive opertaion let's optimized the dockr file now
COPY package.json ./package.json

COPY package-lock.json ./package-lock.json
RUN npm install 

COPY . .  

# // IT TELLS WICH PORT IS EXPOSE 
EXPOSE 3000

# CMD IS THE COMMAND THAT RUNS WHEN THE CONTAINER STARTS


CMD ["node","index.js"]

# //now build thei image 

# passing the environment variabke to the docker images -r 






