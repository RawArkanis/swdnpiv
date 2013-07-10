define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    var BaseEntity =  require('./base_entity');

    function Ship(obj)
    {
        BaseEntity.call(this);

        obj.children[0].geometry.faceVertexUvs[1] = obj.children[0].geometry.faceVertexUvs[0];

        this.mesh = obj;
    }

    Ship.prototype = {
        constructor: Ship,

        update: function(delta)
        {}
    };

    return Ship;
});
