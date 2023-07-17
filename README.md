# Equipe Jambo

## Projeto Formei?
Este projeto é desenvolvido por estudantes da Universidade Federal do Ceará, para a disciplina de Projeto Integrado I, com o intuito de ajudar os discentes do curso de Sistemas e Mídias Digitais a calcular e entender o seu progresso no curso. 

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
- Bruno Alejandro (design e front-end)
- Bruno Nóbrega (front-end)
- Gabriel Albuquerque (gestão)
- Mariana Batista (design)
- Rebeca Costa (design e ilustração)
- Samay Pessoa (back-end)

## Requisitos funcionais
| Requisitos | Status | Código |
|----------|----------|----------|
| Escolher matriz curricular considerada. | Não implementado |  |
| Selecionar disciplinas obrigatórias cursadas. | Implementado   | [tabs.html](pages/tabs.html), [scriptDisciplinas.js](js/scriptDisciplinas.js), [multi-select-dropdown.js](js/multi-select-dropdown.js) |
| Selecionar disciplinas eletivas cursadas. | Implementado | [tabs.html](pages/tabs.html), [scriptDisciplinas.js](js/scriptDisciplinas.js), [multi-select-dropdown.js](js/multi-select-dropdown.js)  |
| Selecionar disciplinas optativas cursadas. | Implementado   | [tabs.html](pages/tabs.html), [scriptDisciplinas.js](js/scriptDisciplinas.js), [multi-select-dropdown.js](js/multi-select-dropdown.js)  |
| Informar horas complementares realizadas. | Implementado   | [tabs.html](pages/tabs.html), [scriptActivities.js](js/scriptActivities.js)  |
| Exibir disciplinas obrigatórias e eletivas que faltam para conclusão do curso. | Em andamento   | [report.html](pages/report.html)  |
| Exibir horas complementares restantes necessárias para conclusão do curso. | Implementado   | [report.html](pages/report.html)  |
| Exportar dados (disciplinas e horas complementares restantes) exibidos pela calculadora. | Não implementado   |  |
| Exibir infográfico interativo-descritivo. | Implementado   | [info.html](pages/info.html), [grade-curricular.html](pages/grade-curricular.html), [trilhas.html](pages/trilhas.html), [horas-complementares.html](pages/horas-complementares.html)  |
| Exibir e explicar o que são as trilhas e como funcionam.  | Implementado   | [trilhas.html](pages/trilhas.html) |
| Exibir e explicar o que são as horas complementares. | Implementado   | [horas-complementares.html](pages/horas-complementares.html) |
| Exibir e explicar o que são as disciplinas obrigatórias e eletivas. | Implementado   | [grade-curricular.html](pages/grade-curricular.html) |
| Disponibilizar acesso aos dados da matriz curricular  | Implementado   | [MatrizcurricularController.php get( )](api_meuDiploma/src/controllers/MatrizcurricularController.php)  | 
| Disponibilizar acesso aos dados das disciplinas | Implementado   | [DisciplinaController.php get( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
| Alterar registro na tabela de matriz curriculares | Implementado   | [MatrizcurricularController.php update( )](api_meuDiploma/src/controllers/MatrizcurricularController.php) |
| Excluir registro da tabela de matriz curriculares | Implementado   | [MatrizcurricularController.php detele( )](api_meuDiploma/src/controllers/MatrizcurricularController.php) |
| Integrar sistema ao banco  | Implementado   | [scriptDisciplinas.js](js/scriptDisciplinas.js) |
| Incluir registro na tabela de disciplinas  | Implementado   | [DisciplinaController.php insert( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
| Alterar registro na tabela de disciplinas | Implementado   | [DisciplinaController.php update( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
| Excluir registro da tabela de disciplinas  | Implementado   | [DisciplinaController.php delet( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
| Incluir registro na tabela de requisitos | Implementado   | [DisciplinaController.php insertR( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
| Excluir registro da tabela de requisitos | Implementado   | [DisciplinaController.php deleteR( )](api_meuDiploma/src/controllers/DisciplinaController.php) |
