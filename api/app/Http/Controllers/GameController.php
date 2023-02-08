<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{
    
    public function showAllGames()
    {
        return response()->json(Game::all());
    }

    public function showOneGame($id)
    {
        return response()->json(Game::find($id));
    }

    public function create(Request $request)
    {
        $this->validate($request, [

            'title' => 'required',
            'genre' => 'required',
            'price' => 'required',
            'platform' => 'required',
            'creator' => 'required',
            
        ]);

        $Game = Game::create($request->all());

        return response()->json($Game, 201);
    }

    public function update($id, Request $request)
    {
        $Game = Game::findOrFail($id);
        $Game->update($request->all());

        return response()->json($Game, 200);
    }

    public function delete($id)
    {
        Game::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}