<?php
use core\Router;

$router = new Router();

$router->get('/', 'MatrizcurricularController@indexMatrix');
$router->get('/listaDisciplinas', 'DisciplinaController@index');
$router->get('/listaDisciplinasSemestre/{semestre}', 'DisciplinaController@get');
$router->get('/matriz/{matriz}', 'MatrizcurricularController@get');

