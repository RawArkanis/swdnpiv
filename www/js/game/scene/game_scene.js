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

        this._scene.add(json.objects.sun_light);

        this._skybox = new Skybox(CONST.FAR, json.textures.skybox);
        this._scene.add(this._skybox.mesh);

        this._ship = new Ship(json.objects.ship);
        this._scene.add(this._ship.mesh);

        this._angle = 0.0;
    }

    GameScene.prototype = {
        constructor: GameScene,

        update: function(delta)
        {
            this._angle += 0.01;

            var distance = 10,
                height = 10;

            var target = new THREE.Vector3(0, 0, 0);

            this._camera.internal.position.x = Math.cos(this._angle) * distance + target.x;
            this._camera.internal.position.y = Math.sin(this._angle) * distance + target.y;
            this._camera.internal.position.z = height + target.y;
            this._camera.internal.lookAt(target);
        },

        render: function()
        {
            this._manager.renderer.render(this._scene, this._camera.internal);
        }

    };

    return GameScene;
});