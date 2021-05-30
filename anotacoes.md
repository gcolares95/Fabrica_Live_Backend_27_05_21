# Backend REST API

- Protocolo de comunicação (que é como a gente troca ideia): HTTP ou HTTPS
- IP: localhost ou 127.0.0.1
- Porta: 3000

URI: http://localhost:3000/
Rota ou Endpoint: /

- Posso criar novos caminhos dentro da mesma URL.
- Em um site. novos caminhos geralmente levam a página diferentes

URI: http://localhost:3000/hello

- Onde: 
    http -> Protocolo
    localhost -> IP
    3000 -> Porta
    /hello -> Rota ou Endpoint

- Todas as requisições possuem VERBOS
    Requisições -> Acessar o site.

REST: Verbos específicos para as requisições
RESTful: uma aplicação (API) capaz de se comunicar com verbos REST

Mesmo caminho pode mudar o VERBO e entrar em um local diferente
[GET] http://localhost:3000/hello
[POST] http://localhost:3000/hello

GET -> Obter informações
POST -> Criar informações novas
PUT -> Atualizar informações já existentes
DELETE -> Remover informações já existentes

Também posso enviar um corpo da requisições

Toda requisição possui duas coisas:]
    URL
    HEADER -> Algumas informações específicas, que definem como API vai processar a requisição
    BODY -> Informação extra

JSON - > JavaScript Object Notation