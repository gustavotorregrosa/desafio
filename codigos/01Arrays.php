<?php

$arraySiglas = ['ES', 'MG', 'RJ', 'SP'];
$arrayNomeInteiros = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
$arraySiglaNome = [];

foreach($arraySiglas as $i => $sigla){
    $indexArrayNomes = count($arrayNomeInteiros) -1 -$i;
    $arraySiglaNome[$sigla] = $arrayNomeInteiros[$indexArrayNomes];
}

foreach($arraySiglaNome as $key => $value){
    echo $key." - ".$value;
    echo "<br>";
}