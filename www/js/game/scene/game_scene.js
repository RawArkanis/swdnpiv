define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    var BaseScene = require('./base_scene');

    var Skybox = require('../entity/skybox');

    function GameScene(manager, json)
    {
        BaseScene.call(this, manager);

        this._scene = new THREE.Scene();

        this._camera = new THREE.PerspectiveCamera(CONST.VIEW_ANGLE, CONST.ASPECT, CONST.NEAR, CONST.FAR);
        this._camera.position.set(0, 0, 10);
        this._camera.lookAt(this._scene.position);

        this._scene.add(this._camera);

        this._skybox = new Skybox(CONST.FAR, json.textures.skybox);

        this._scene.add(this._skybox.mesh);
    }

    GameScene.prototype = {
        constructor: GameScene,

        update: function(delta)
        {
            
        },

        render: function()
        {
            this._manager.renderer.render(this._scene, this._camera);
        }

    };

    return GameScene;
});