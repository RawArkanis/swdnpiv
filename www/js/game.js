requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        game: '../game'
    }
});

requirejs(['game/main']);
