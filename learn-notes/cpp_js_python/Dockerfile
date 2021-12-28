FROM gcc:6
FROM python:3.8
FROM node:14.3

WORKDIR /working

COPY . .

# nano used for text file read/write. useful here
RUN apt update
RUN apt install nano

CMD ["bash"]

########################## HOW TO USE ##########################

# -> Build an image out of this and run it as a container with bash command
# -> bind the files with /working dir
# docker build -t cpp_js_python_learning:1.0 .
# docker run -it -v $(pwd):/working cpp_js_python_learning:1.0