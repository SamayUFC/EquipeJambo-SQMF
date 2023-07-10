<?php
use core\Router;

$router = new Router();

$router->get('/', 'MatrizcurricularController@indexMatrix');
$router->get('/listaDisciplinas', 'DisciplinaController@index');
$router->get('/listaDisciplinasSemestre/{semestre}', 'DisciplinaController@get');
$router->get('/matriz/{matriz}', 'MatrizcurricularController@get');

$router->post('/incluirMatriz', 'MatrizcurricularController@insert');
$router->delete('/deleteMatriz/{matriz}', 'MatrizcurricularController@delete');
$router->post('/updateMatriz/{matriz}', 'MatrizcurricularController@update');

$router->post('/insertDisc/{matriz}', 'DisciplinaController@insert');
$router->delete('/deleteDisc/{codigo}', 'DisciplinaController@delete');
$router->post('/updateDisc/{codigo}', 'DisciplinaController@update');

$router->post('/insertRequisito', 'DisciplinaController@insertR');
$router->delete('/deleteR/{id}', 'DisciplinaController@deleteR');



