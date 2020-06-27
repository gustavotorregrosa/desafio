<?php

$multiplos = [3, 5];
$inicio = 1;
$limite = 1000;
$soma = 0;

for ($i = $inicio; $i < $limite ; $i++) { 
    $valido = false;
    foreach($multiplos as $m){
        if($i % $m == 0){
            $valido = true;
        }
    }

    if($valido){
        $soma += $i;
    }
}

echo $soma;
