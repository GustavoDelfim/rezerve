<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">

    </head>
    <body>


        <header id="header">
            <span class="background"></span>
            <div class="container">
                <a href="{{ route('index') }}" class="logo">
                    <img src="{{ asset('img/logo-write.png') }}" alt="Rezerve">
                    <img src="{{ asset('img/logo-black.png') }}" alt="Rezerve" class="logo-black">
                </a>
                <ul class="menu">
                    <li><a href=""> Cadastrar </a></li>
                    <li><a class="modal-trigger" href="{{ route('painel') }}"> Entrar </a></li>
                </ul>
            </div>
        </header>

        <div id="banner"></div>

        <div style="height: 500px; float: left; width: 100%;"></div>

    </body>

    <script type="text/javascript" src="{{ asset('js/site.js') }}"></script>

</html>
