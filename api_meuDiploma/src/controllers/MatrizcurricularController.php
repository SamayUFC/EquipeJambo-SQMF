<?php
namespace src\controllers;

use \core\Controller;
use \src\models\Matrizcurricular;
use \src\models\Disciplinas;
use \src\models\Prerequisitos;

class MatrizcurricularController extends Controller {

    public function indexMatrix() {

        $Matrizcurricular = Matrizcurricular::select()->orderBy('ID')->get();                
        
        echo json_encode($Matrizcurricular);
    }

    public function get($matriz){

        if($matriz){
            
            

            $retorno = Matrizcurricular::select()->where($matriz)->get();
            $disc = [];
            foreach($retorno as $key => $value){

                $matriz2 = [
                    'idmatriz' => $value['ID']
                ];

                $disciplinas = Disciplinas::select()->where($matriz2)->get();

                

                foreach($disciplinas as $key1 => $value1){
                   

                    $codigodisc = [
                        'DISC' => $value1['ID']
                    ];
                    

                    
                    $prerequisito = Prerequisitos::select()->where($codigodisc)->get();

                    $requisitos = [];
                        foreach($prerequisito as $key2 => $value2){
                            

                            $idprereq = [
                                'id' => $value2['REQUISITO']
                            ];
                            $discrequisitos = Disciplinas::select()->where($idprereq)->get();

                            foreach($discrequisitos as $key3 => $value3){
                                $dadosRequi = [
                                    'id' => $value2['ID'],
                                    'codigo' => $value3['CODIGO'],
                                    'componente' => $value3['COMPONENTE']
                                ];
                                array_push($requisitos, $dadosRequi); 
                            }
                            
                            
                        }
                    
                    

                    $disc1 = [
                        'id' => $value1['ID'],
                        'codigo' => $value1['CODIGO'],
                        'componente' => $value1['COMPONENTE'],
                        'natureza' => $value1['NATUREZA'],
                        'cargahoraria' => $value1['CARGAHORARIA'],
                        'semestre' => $value1['SEMESTRE'],
                        'prerequisito' => $requisitos

                    ];

                    array_push($disc, $disc1);

                
                }

               
                
                $dados = [
                    'matriz' => $value['MATRIZ'],
                    'cargaHorariaTotal' => $value['CARGAHORARIATOTAL'],
                    'cargaObrigatoria' => $value['CARGAOBRIG'],
                    'cargaOptativa' => $value['CARGAOPTATIVA'],
                    'cargaOptativaLivre' => $value['CARGAOPTATIVALIVRE'],
                    'disciplinas' => $disc,
                ];
                
            }

            echo json_encode($dados);
        }

    }
}
