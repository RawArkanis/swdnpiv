define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    var BaseEntity =  require('./base_entity');

    function Ship()
    {
        BaseEntity.call(this);

        var material = new THREE.MeshBasicMaterial();

        var geometry = new THREE.CubeGeometry(1, 1, 1);

        this.mesh = new THREE.Mesh(geometry, material);
    }

    Ship.prototype = {
        constructor: Ship,

        update: function(delta)
        {}
    };

    return Ship;
});
