<?php

class Multiplicador {

    private $primeiro, $segundo, $terceiro;

    function getPrimeiro(){
        return $this->primeiro;
    }

    function getSegundo(){
        return $this->segundo;
    }

    function getTerceiro(){
        return $this->terceiro;
    }

    function setPrimeiro($num){
        $this->primeiro = $num;
        return $this;
    }

    function setSegundo($num){
        $this->segundo = $num;
        return $this;
    }

    function setTerceiro($num){
        $this->terceiro = $num;
        return $this;
    }

    function produto(){
        return $this->primeiro * $this->segundo * $this->terceiro;
    }


}

$muliplicador = new Multiplicador();

echo $muliplicador->setPrimeiro(10)->setSegundo(20)->setTerceiro(30)->produto();
