<!doctype html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name') }}</title>

    <link href="{{ asset('css/painel.css') }}" rel="stylesheet" type="text/css">

</head>
<body>

    <div id="app">
      <router-view></router-view>
    </div>

</body>

<script type="text/javascript" src="{{ asset('js/painel.js') }}"></script>

</html>
