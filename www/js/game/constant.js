define(function(require)
{
    'use strict';

    return {
        WIDTH: window.innerWidth,
        HEIGHT: window.innerHeight,
        VIEW_ANGLE: 45,
        ASPECT: window.innerWidth / window.innerHeight,
        NEAR: 0.1,
        FAR: 10000.0,
        FULLSCREEN: false
    };
});