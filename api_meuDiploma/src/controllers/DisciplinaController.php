<?php
namespace src\controllers;

use \core\Controller;
use \src\models\Disciplinas;
use \src\models\Matrizcurricular;


class DisciplinaController extends Controller {

    public function index() {

        $Disciplinas = Disciplinas::select()->orderBy('ID')->get();                
        
        echo json_encode($Disciplinas);
    }

    public function get($semestre){
        
        if($semestre){
            
            $matriz = filter_input(INPUT_GET, 'matriz');

            $matriz = [
                'matriz' => $matriz
            ];

            $idmatriz = Matrizcurricular::select()->where($matriz)->get();
            
            $idmatriz = $idmatriz[0]['ID'];

            $retorno = Disciplinas::select()->where($semestre)->where('idmatriz', $idmatriz)->get();

            echo json_encode($retorno);

        }

    }


}