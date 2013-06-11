define(function(require)
{
    'use strict';
    
    function BaseScene(manager)
    {
        this._manager = manager;

        this._scene = null;
        this._camera = null;
    }

    BaseScene.prototype = {
        constructor: BaseScene,

        update: function(delta)
        {},

        render: function()
        {}

        // TODO Implementar onWindowResize
    };

    return BaseScene;
});
