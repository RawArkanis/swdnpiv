define(function (require)
{
    'use strict';

    if (!window.requestAnimationFrame)
    {
        window.requestAnimationFrame = (function()
        {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element)
                {
                    return window.setTimeout(callback, 1000 / 60);
                };
        })();
    }

    if (!window.cancelRequestAnimationFrame)
    {
        window.cancelRequestAnimationFrame = (function()
        {
            return window.webkitCancelRequestAnimationFrame ||
                window.mozCancelRequestAnimationFrame ||
                window.oCancelRequestAnimationFrame ||
                window.msCancelRequestAnimationFrame ||
                clearTimeout
        })();
    }

    var THREE = require('three.min');
    var CONST = require('./constant');
    var Stats = require('stats');

    var SceneManager = require('./scene/scene_manager');
    var LoadingScene = require('./scene/loading_scene');

    $('.wait').remove();

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(CONST.WIDTH, CONST.HEIGHT);

    var manager = new SceneManager(renderer);
    var scene = new LoadingScene(manager, 'js/game/scene/test.json');
    manager.changeScene(scene);

    var fps = new Stats();
    fps.setMode(0);

    fps.domElement.style.position = 'absolute';
    fps.domElement.style.right = '0px';
    fps.domElement.style.bottom = '0px';

    document.getElementById("container").appendChild(renderer.domElement);
    document.body.appendChild(fps.domElement);

    run();

    function update(delta)
    {
        manager.update(delta);
    };

    function render()
    {
        manager.render();
    };

    function run()
    {
        fps.begin();

        window.requestAnimationFrame(run);

        update(1.0);

        render();

        fps.end();
    };
});