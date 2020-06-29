<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\Contato;
use Illuminate\Support\Facades\Validator;

class ContatosController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contato = Contato::orderBy('nome')->get();
        return respostaCors($contato, 200);
    }

    public function store(Request $request)
    {

        $validacao = Validator::make($request->all(), [
            'nome' => 'required',
            'email' => 'required|email'
        ]);

        if ($validacao->fails()) {
            return respostaCors([], 422, "Nome e/ou email inválidos");
        }

        Contato::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'nascimento' => $request->nascimento,
            'telefone' => $request->telefone
        ]);

        return respostaCors([], 200, "Contato " . $request->nome . " adicionado");
    }


    public function delete($id)
    {
        try {
            $contato = Contato::findOrFail($id);
            $contato->delete();
            return respostaCors([], 200, "Contato " . $contato->nome . " deletado ");
        } catch (Exception $e) {
            return respostaCors([], $e->getCode(), "Excecao: ".$e->getMessage());
            
        }
    }

 
}
