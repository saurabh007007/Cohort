Step 9 - Dockerfile
What is a Dockerfile
If you want to create an image from your own code, that you can push to dockerhub, you need to create a Dockerfile for your application.
A Dockerfile is a text document that contains all the commands a user could call on the command line to create an image.
How to write a dockerfile
A dockerfile has 2 parts
Base image
Bunch of commands that you run on the base image (to install dependencies like Node.js)
Let’s write our own Dockerfile
Let’s try to containerise this backend app - https://github.com/100xdevs-cohort-2/week-15-live-1
notion image
Solution
Common commands
WORKDIR: Sets the working directory for any RUN, CMD, ENTRYPOINT, COPYinstructions that follow it.
RUN: Executes any commands in a new layer on top of the current image and commits the results.
CMD: Provides defaults for executing a container. There can only be one CMD instruction in a Dockerfile.
EXPOSE: Informs Docker that the container listens on the specified network ports at runtime.
ENV: Sets the environment variable.
COPY: Allow files from the Docker host to be added to the Docker image