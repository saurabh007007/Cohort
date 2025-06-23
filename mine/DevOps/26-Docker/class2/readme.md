# Docker Compose 
Layers in Docker
In Docker, layers are a fundamental part of the image architecture that allows Docker to be efficient, fast, and portable. A Docker image is essentially built up from a series of layers, each representing a set of differences from the previous layer.
notion image
 
How layers are made - 
Base Layer: The starting point of an image, typically an operating system (OS) like Ubuntu, Alpine, or any other base image specified in a Dockerfile.
Instruction Layers: Each command in a Dockerfile creates a new layer in the image. These include instructions like RUN, COPY, which modify the filesystem by installing packages, copying files from the host to the container, or making other changes. Each of these modifications creates a new layer on top of the base layer.
Reusable & Shareable: Layers are cached and reusable across different images, which makes building and sharing images more efficient. If multiple images are built from the same base image or share common instructions, they can reuse the same layers, reducing storage space and speeding up image downloads and builds.
Immutable: Once a layer is created, it cannot be changed. If a change is made, Docker creates a new layer that captures the difference. This immutability is key to Docker's reliability and performance, as unchanged layers can be shared across images and containers.


# stroring data in docker containers


# creating the volume 

docker create volume <name of volume>
example docker volume create mongo_db_data

# mounting the volume 
docker run -p 27017:27017 -v mongo_db_data:/data/db mongo

