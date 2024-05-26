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

$router->group(['prefix' => 'v1/api'], function () use ($router) {
    $router->post('/login', 'AuthController@login');
    $router->group(['middleware' => 'auth'], function () use ($router) {
        $router->get('/me', 'AuthController@me');

        $router->get('/users/hot', 'UserController@index');
        $router->get('/users', 'UserController@create');
        $router->get('/users/{id}', 'UserController@edit');
        $router->post('/users', 'UserController@store');
        $router->put('/users/{id}', 'UserController@update');
        $router->delete('/users/{id}', 'UserController@destroy');

        $router->get('/roles/hot', 'RolesController@index');
        $router->get('/roles', 'RolesController@create');
        $router->get('/roles/{id}', 'RolesController@edit');
        $router->post('/roles', 'RolesController@store');
        $router->put('/roles/{id}', 'RolesController@update');
        $router->delete('/roles/{id}', 'RolesController@destroy');

        $router->get('/settings', 'SettingController@index');
        $router->get('/settings', 'SettingController@create');
        $router->get('/settings/{id}', 'SettingController@edit');
        $router->post('/settings', 'SettingController@store');
        $router->put('/settings/{id}', 'SettingController@update');
        $router->delete('/settings/{id}', 'SettingController@destroy');
    });
});
