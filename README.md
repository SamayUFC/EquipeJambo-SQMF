# Jambo

## Projeto Formei?
Este projeto é desenvolvido por estudantes da Universidade Federal do Ceará, para a disciplina de Projeto Integrado I, com o intuito de ajudar os discentes do curso de Sistemas e Mídias Digitais a calcular o seu progresso no curso. 

## Instalação

### Requisitos:
Para rodar o projeto é necessário ter em sua maquina um servidor web (o php instalado nele) e o banco de dados MySQL, tudo isso pode ser usado através do software [XAMPP] (https://www.apachefriends.org/), bastando instalá-lo e configurá-lo em sua maquina. Alem disso, se faz necessário a instalação do software [Composer] (https://getcomposer.org) para a instalação de dependências no projeto.

### Guia:
Você pode clonar este repositório OU baixar o .zip

Ao descompactar, é necessário rodar o **composer** pra instalar as dependências e gerar o *autoload*.

Vá até a pasta do projeto, pelo *prompt/terminal* e execute:
> composer install

Depois é só aguardar.

## Configuração
Todos os arquivos de **configuração** e aplicação estão dentro da pasta *src*.

As configurações de Banco de Dados e URL estão no arquivo *src/Config.php*

É importante configurar corretamente a constante *BASE_DIR*:
> const BASE_DIR = '/**PastaDoProjeto**/public';

## Uso
Você deve acessar a pasta *public* do projeto.

O ideal é criar um ***alias*** específico no servidor que direcione diretamente para a pasta *public*.

## Modelo de MODEL
```php
<?php
namespace src\models;
use \core\Model;

class Usuario extends Model {

}
```

## Desenvolvedores:
- Gabriel Albuquerque
- Bruno Alejandro
- Bruno Nóbrega
- Mariana Batista
- Rebeca Costa
- Samay Pessoa

##Requisitos funcionais
| Coluna 1 | Coluna 2 | Coluna 3 |
|----------|----------|----------|
| Escolher matriz curricular considerada.    | Item A   | Valor X  |
| Item 2   | Item B   | Valor Y  |
| Item 3   | Item C   | Valor Z  |
| Item 4   | Item D   | Valor W  |
| Item 5   | Item E   | Valor V  |
