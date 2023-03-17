# Laravel Breeze - React Edition

## Inspiration

This project was inspired by the [Breeze Next.js](https://github.com/laravel/breeze-next) project. 🏝️

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-orange.svg)](https://choosealicense.com/licenses/mit/)
![GitHub repo size](https://img.shields.io/github/repo-size/dmarsal90/laravel-react-authentication?color=yellow&style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/dmarsal90/laravel-react-authentication?color=red)
![GitHub top language](https://img.shields.io/github/languages/top/dmarsal90/laravel-react-authentication?style=plastic)
<a href="https://github.com/dmarsal90/dmarsal90"><img src="https://img.shields.io/badge/status-updating-brightgreen.svg"></a>


## Introduction

This repository is an implementing of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [React](https://react.dev/). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Rrrcat frontend with a powerful Laravel backend.

## Documentation

### Installation

First, create a React compatible Laravel backend by installing Laravel Breeze into a [fresh Laravel application](https://laravel.com/docs/installation) and installing Breeze's API scaffolding:

```bash
# Create the Laravel application...
laravel new api-backend

cd api-backend

# Install Breeze and dependencies...
composer require laravel/breeze

php artisan breeze:install api

# Run database migrations
php artisan migrate
```

Next, ensure that your application's `APP_URL` and `FRONTEND_URL` environment variables are set to `http://localhost:8000` and `http://localhost:3000`, respectively.

After defining the appropriate environment variables, you may serve the Laravel application using the `serve` Artisan command:

```bash
# Serve the application...
php artisan serve
```

Next, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env` and supply the URL of your backend:

```
VITE_APP_NAME=Breeze React Api
VITE_PUBLIC_BACKEND_URL=http://localhost:8000
```

Finally, run the application via `npm run dev`. The application will be available at `http://localhost:3000`:

```
npm run dev
```

> **Note**  
> Currently, is recommended use `localhost` during local development of your backend and frontend to avoid CORS "Same-Origin" issues.

## License

Laravel Breeze - React Edition is open-sourced software licensed under the [MIT license](LICENSE.md).
