<?php

return [
    'migrations' => 'migrations',
    'default' => env('DB_CONNECTION', 'pgsql'),

    'connections' => [

        'pgsql' => [
            'driver' => 'pgsql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'forge'),
            'username' => env('DB_USERNAME', 'forge'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'schema' => 'public',
            'sslmode' => 'prefer',
            'strict' => true,
            'engine' => null,
            'options' => [
                \PDO::ATTR_PERSISTENT => true, // Enable persistent connections
                \PDO::ATTR_EMULATE_PREPARES => true,
            ],
        ],

    ],

    // Other database configurations...

];
