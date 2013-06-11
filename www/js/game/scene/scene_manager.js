define(function(require)
{
    'use strict';
    
    function SceneManager(renderer)
    {
        this.renderer = renderer;

        this._currentScene = null;
    }

    SceneManager.prototype = {
        constructor: SceneManager,

        changeScene: function(scene)
        {
            this._currentScene = scene;
        },

        update: function(delta)
        {
            if (this._currentScene != null)
                this._currentScene.update(delta);
        },

        render: function()
        {
            if (this._currentScene != null)
                this._currentScene.render();
        }
    };

    return SceneManager;
});
