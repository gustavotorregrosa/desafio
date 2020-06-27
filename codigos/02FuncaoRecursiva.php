<?php

function encontraMultiplo ($numero = 1){
    $mutiplos = [3, 5, 10];
    $numeroValido = true;
    foreach($mutiplos as $m){
        if($numero % $m != 0){
            $numeroValido = false;
        }
    }

    if($numeroValido){
        return $numero;
    }

    $numero++;
    return encontraMultiplo($numero);
}

echo encontraMultiplo();