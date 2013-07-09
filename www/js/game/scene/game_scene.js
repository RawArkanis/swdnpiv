define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    var BaseScene = require('./base_scene');
    var ThirdPersonCamera = require('../camera/third_person_camera');

    var Skybox = require('../entity/skybox');
    var Ship = require('../entity/ship');

    function GameScene(manager, json)
    {
        BaseScene.call(this, manager);

        this._scene = new THREE.Scene();

        this._camera = new ThirdPersonCamera();
        this._scene.add(this._camera.internal);

        this._skybox = new Skybox(CONST.FAR, json.textures.skybox);
        this._scene.add(this._skybox.mesh);

        this._ship = new Ship();
        //this._scene.add(this._ship.mesh);

        this._scene.add(json.objects.ship);
    }

    GameScene.prototype = {
        constructor: GameScene,

        update: function(delta)
        {
            
        },

        render: function()
        {
            this._manager.renderer.render(this._scene, this._camera.internal);
        }

    };

    return GameScene;
});