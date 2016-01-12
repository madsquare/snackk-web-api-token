require.config(
    baseUrl: '/assets/src'
    waitSeconds: 0
    paths:
        'jquery': '../vendor/jquery.min'
        'jquery-cookie': '../vendor/jquery.cookie.min'
    shim:
        'jquery':
            exports: '$'
        'jquery-cookie': 
            deps: ['jquery']
            exports: '$.fn.cookie'
)