<?php
namespace src\controllers;

use \core\Controller;
use \src\models\Disciplinas;
use \src\models\Matrizcurricular;
use \src\models\Prerequisitos;


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

    public function insert($matriz){

        $codigo = filter_input(INPUT_POST, 'codigo');
        $componente = filter_input(INPUT_POST, 'componente');
        $cargahoraria = filter_input(INPUT_POST, 'cargahoraria');
        $natureza = filter_input(INPUT_POST, 'natureza');
        $semestre = filter_input(INPUT_POST, 'semestre');

        $data = [
            'matriz' => $matriz
        ];

        $idmatriz = Matrizcurricular::select()->where($data)->get();

        $idmatriz = json_encode($idmatriz[0]['ID']);
        

        Disciplinas::insert(
            [
                'codigo' => $codigo,
                'componente' => $componente,
                'cargahoraria' => $cargahoraria,
                'natureza' => $natureza,
                'semestre' => $semestre,
                'idmatriz' => $idmatriz
            ]
        )->execute(); 


    }

    public function delete($codigo){
        Disciplinas::delete()->where('codigo',$codigo['codigo'])->execute(); 
    }

    public function update($codigo){

        $codigo2 = filter_input(INPUT_POST, 'codigo');
        $componente = filter_input(INPUT_POST, 'componente');
        $cargahoraria = filter_input(INPUT_POST, 'cargahoraria');
        $natureza = filter_input(INPUT_POST, 'natureza');
        $semestre = filter_input(INPUT_POST, 'semestre');

        $data = [
            'codigo' => $codigo
        ];

        Disciplinas::update()->set(
            [
                'codigo' => $codigo2,
                'componente' => $componente,
                'cargahoraria' => $cargahoraria,
                'natureza' => $natureza,
                'semestre' => $semestre
            ]
        )->where('codigo', $codigo['codigo'])->execute();
        
    }
    
    public function insertR(){

        $disc = filter_input(INPUT_POST, 'disc');
        $requi = filter_input(INPUT_POST, 'requisito');

        Prerequisitos::insert(
            [
                'disc' => $disc,
                'requisito' => $requi
            ]
        )->execute(); 
    }

    public function deleteR($id){
        Prerequisitos::delete()->where('id',$id['id'])->execute(); 
    }

}