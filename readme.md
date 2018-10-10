# comandos docker

*https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes*

parar e deletar containers:
    `docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)`

deletar imagens de todos containers:
    `docker rmi $(docker images -a -q)`

parar e deletar container com a imagem
    `docker stop {nome-contianer} && docker rm {nomr-container}`

compilar imagem:
    `docker build -t marvel.oms .`

executar container:
    `docker run -it --rm -p {porta-host}:{porta-container} --name {nome-container} {imagem} `