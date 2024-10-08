<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['middleware' => 'App\Http\Middleware\CorsMiddleware', 'prefix' => 'api'], function () use ($router) {

    $router->get('users',  ['uses' => 'UserController@showAllUsers']);

    $router->get('users/{id}', ['uses' => 'UserController@showOneUser']);

    $router->post('users', ['uses' => 'UserController@create']);

    $router->delete('users/{id}', ['uses' => 'UserController@delete']);

    $router->put('users/{id}', ['uses' => 'UserController@update']);

    /* Games */

    $router->get('games', ['uses' => 'GameController@showAllGames']);

    $router->get('games/{id}', ['uses' => 'GameController@showOneGame']);

    $router->post('games', ['uses' => 'GameController@create']);

    $router->delete('games/{id}', ['uses' => 'GameController@delete']);

    $router->put('games/{id}', ['uses' => 'GameController@update']);
});
