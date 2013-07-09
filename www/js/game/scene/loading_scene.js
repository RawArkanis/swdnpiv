define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');
    var $ = require('jquery');
    var TOL = require('../ext/OBJLoader');

    var BaseScene = require('./base_scene');
    var GameScene = require('./Game_scene');

    function LoadingScene(manager, json)
    {
        BaseScene.call(this, manager);

        var loadingScene = createLoadingScene();

        this._scene = loadingScene.scene;
        this._camera = loadingScene.camera;

        this._loaded = null;

        var self = this;

        var callbackProgress = function(progress, result)
        {
            var barSize = 200,
                total = progress.totalModels + progress.totalTextures,
                loaded = progress.loadedModels + progress.loadedTextures;

            if (total)
                barSize = Math.floor(barSize - barSize * loaded / total);

            console.log(barSize);

            $('.loading-bar').width(barSize);
        };

        var callbackFinished = function(result)
        {
            self._loaded = result;

            console.log(result);

            setTimeout(function() {
                $('.loading-container').remove();
                var scene = new GameScene(self._manager, result);

                self._manager.changeScene(scene);
            }, 500);
        };

        var loader = new THREE.SceneLoader();

        loader.addHierarchyHandler("obj", TOL.OBJLoader);

        loader.callbackProgress = callbackProgress;

        loader.load(json, callbackFinished);

        function createLoadingScene()
        {
            var result = {
                scene: new THREE.Scene(),
                camera: new THREE.OrthographicCamera(
                    CONST.WIDTH / -2,
                    CONST.WIDTH / 2,
                    CONST.HEIGHT / 2,
                    CONST.HEIGHT / -2,
                    CONST.NEAR,
                    CONST.FAR
                )
            };

            result.camera.position.z = 100;
            result.scene.add(result.camera);

            $('#container').append(' \
                <div class="loading-container"> \
                    <div class="loading-text"> \
                        LOADING... \
                    </div> \
                    <div class="loading-bar-container"> \
                        <div class="loading-bar"> \
                        </div> \
                    </div> \
                </div>'
            );

            return result;
        }
    }

    LoadingScene.prototype = Object.create(BaseScene.prototype);

    return LoadingScene;
});