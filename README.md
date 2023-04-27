# GameShop

## This is a simple GameShop platform that resembles Steam for academical purposes of learning how to build basic CRUD apps

### Features ->

- Login/Register page
- User profile like any social media platform
- Game Library and showcases
- User and game management.

### How to setup the app ->

1. Make sure you have on your platform:
    - mariadb/mysql php7.4 with composer
    - php7.4-mysql,
    - php7.4-mbstring,
    - php7.4-xml
    - php7.4-curl
2. Create a `.env` file with the `.env.example`
3. Run `composer update` (linux) in the ./api folder
4. Run `php artisan migrate` (linux) in the ./api folder
5. Start a php development server on localhost:8080 linux-> `php -S localhost:8080 -t ./public` inside the /api folder
6. Start a basic server (for example apache or liveServer) for the Front End.
7. Test the app.

## Front-End technologies

- html,
- css &
- Vue JS

## Back-End technologies

- PHP 7.4 with composer,
- Laravel / Lumen micro-framework for building MVC / ORM Api,
- Latest MariaDB version,
- auth0 JWT for authentication tokens &

## Official Lumen documentation

Documentation for the framework can be found on the [Lumen website](https://lumen.laravel.com/docs).

[![Build Status](https://travis-ci.org/laravel/lumen-framework.svg)](https://travis-ci.org/laravel/lumen-framework)
[![Total Downloads](https://img.shields.io/packagist/dt/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![Latest Stable Version](https://img.shields.io/packagist/v/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)
[![License](https://img.shields.io/packagist/l/laravel/framework)](https://packagist.org/packages/laravel/lumen-framework)

Laravel Lumen is a stunningly fast PHP micro-framework for building web applications with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Lumen attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as routing, database abstraction, queueing, and caching.

## Contributing

Thank you for considering contributing to Lumen! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Security Vulnerabilities

If you discover a security vulnerability within Lumen, please send an e-mail to Taylor Otwell at taylor@laravel.com. All security vulnerabilities will be promptly addressed.

## License

The Lumen framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
