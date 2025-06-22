

#  Dockler
docker run mongo --- 

docker images
docker rmi  mongo  ---- if not presnt 
docker rmi  mongo --force  //to force stop the 

Images vs Containers

Images--------- >>>> these light weight stand alone packages that include everything that is reqquired to run the projects 

Images ---->>> Everything required to learn the complete software for the 
docker run -p 27017:27017 mongo 

# Conatiner 
an image in execution is called as the container 
docker run -p  27017:27017 mongo  --- >> no the mongo image beconme the container now 

# Docker Port details

docker run mongo ---->>> here the container is runing on port of the container 27017 but not the machinne for that i need to map with the my machine 


docker run -p 27017:27017 mongo  -->> this will start the machine port map with the conatiner port 

docker run 27018:27017 mongo ===>>> here the first is the machine port and the second one is the container port that is mapped with the machine port 


## Docker ps
docker ps -->> will show the container that is running 

## Docke -d
    docker run -d -p 27017:27017 mongo 


# docker is commands 
1. docker ps -->> it will shows the docker runningimage s
2. docker kill <Conatiner id> --->>> it will kill the process
3. docker images -->>> shows alll the docker images that are presnt in my machine 
4. docker run -p <machine port>:<container default poort> <image name> -- >> it will heklp you to port map the container with the machine 
5. docker build -->> we will seee it more details (help to create your own images that is where it comes into the picture )
6. docker push -->> pushed the image to hub do
7. docker exec -it(menas intractive mode) <containerid> /bin/bash -->> let's u execute commands in docker containers
8.7. docker exec -it(menas intractive mode) <containerid> sh

# Step 8 - Common docker commands
docker images
docker ps
docker run
docker build
1. docker images
Shows you all the images that you have on your machine
2. docker ps
Shows you all the containers you are running on your machine
3. docker run
Lets you start a container
-p ⇒ let’s you create a port mapping
-d. ⇒ Let’s you run it in detatched mode
4. docker build
Lets you build an image. We will see this after we understand how to create your own Dockerfile
5. docker push
Lets you push your image to a registry
6. Extra commands
docker kill
docker exec


Docker file -->> help us to create the docker images
