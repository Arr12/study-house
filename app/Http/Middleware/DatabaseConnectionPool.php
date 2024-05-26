<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;

class DatabaseConnectionPool
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $connection = DB::connection();

        $request->attributes->set('db_connection', $connection);

        return $next($request);
    }
}
