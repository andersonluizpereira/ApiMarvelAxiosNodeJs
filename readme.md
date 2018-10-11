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

#Processo de criação de máquina jenkis mais teste e publicação em publicação para o docker.

Jenkis

Baixar a imagem

docker pull ubuntu

Ver imagens

docker images

Explicando um pouco mais sobre o que são os containers.
Os containers possuem benefícios de alocação de recursos similares à máquina virtual. No entanto, com uma abordagem diferente no que diz respeito à arquitetura, além de serem portáteis e muito mais eficientes!!!

Agora vamos subir um Container Ubuntu! o/

Criar container
docker run -d --name "nome do container" -p "porta" -t "imagem"

docker run -d --name jenkinsNovo -p 8080 -t ubuntu

Instalando o Jenkins dentro do container Docker
​ Antes de mais nada, neste momento você terá acesso diretamente dentro da imagem do Container. Com isso, vamos começar a instalação como se fosse uma nova máquina e um novo S.O., neste caso, vamos ter que instalar desde o SUDO, até o Jenkins (não vamos instalar nada além do necessário)!

Acessando um container
docker exec -i -t "nome do container" /bin/bash

Para saber a versão do Linux no container
cat /etc/lsb-release

Agora precisamos atualizar os pacotes
apt-get update

Instalar o Sudo
apt-get install sudo

Instalar o wget
apt-get install wget

Instalar o vim
apt-get install vim

apt-get update
apt-get install gnupg

Feito isso, vamos instalar o Jenkins dentro do Container que acabamos de criar. Para isso, você poderá acessar o site do [Jenkins](https://jenkins.io/) e copiar os procedimentos para instalação (caso queira ter certeza de que a versão instalada é a mais atual) ou poderá utilizar o comando wget abaixo:

wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

sudo apt update

sudo apt install jenkins

sudo apt install openjdk-8-jdk

apt-get update

apt install default-jre

sudo apt-get install software-properties-common

sudo add-apt-repository ppa:webupd8team/java



sudo apt update

sudo update-alternatives --config java

There are 3 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                                            Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1101      auto mode
  1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1101      manual mode
  2            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode
  3            /usr/lib/jvm/java-8-oracle/jre/bin/java          1081      manual mode
  
  escolha java 8
  
 sudo nano /etc/environment

 source /etc/environment
 
 /etc/init.d/jenkins start
 
 /etc/init.d/jenkins status
 
 sudo apt update
 
 sudo apt install git
 
 sudo apt update
 
 sudo apt install make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip
 
 sudo apt update
 
 sudo apt install nodejs
 
 sudo apt install npm
 
sudo apt update

npm i -g npm-upgrade

sudo apt-get update

sudo apt-get install curl

sudo apt-get update

apt-get install nginx

sudo apt-get update

Depois de instalado, vamos configurar o nginx. Crie o arquivo “seusite” no diretório /etc/nginx/sites-available, com o conteúdo abaixo:

server {

   listen         80;

   server_name apimarvel.com.br;

   root /var/lib/jenkins/workspace/marvel/;

   if ($http_host != "apimarvel.com.br") {

         rewrite ^ http://seusite.com.br$request_uri permanent;

   }

   location / {

       proxy_set_header X-Real-IP $remote_addr;

       proxy_set_header X-Forwarded-For $remote_addr;

       proxy_set_header Host $host;

       proxy_pass http://localhost:3000;

   }

   location ~* \.(?:ico|css|js|gif|jpe?g|png|ttf|woff)$ {

       access_log off;

       expires 30d;

       add_header Pragma public;

       add_header Cache-Control "public, mustrevalidate, proxy-revalidate";

       proxy_pass http://localhost:3000;

   }

   location = /robots.txt { access_log off; log_not_found off; }

   location = /favicon.ico { access_log off; log_not_found off; }

   location ~ /\.ht {

           deny all;

   }

}

 Faça um link simbólico do arquivo para a pasta sites-enabled:

ln -s /etc/nginx/sites-available/apimarvel /etc/nginx/sites-enabled/apimarvel

/etc/init.d/nginx start
 
npm install -g forever 
 
 b48d433dbfcc4832bfdab7b2303e254a
 