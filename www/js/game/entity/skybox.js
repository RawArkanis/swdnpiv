define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    var BaseEntity =  require('./base_entity');

    function Skybox(size, textures)
    {
        BaseEntity.call(this);

        var textureCube = textures;

        var shader = THREE.ShaderLib[ "cube" ];
        shader.uniforms[ "tCube" ].value = textureCube;

        var material = new THREE.ShaderMaterial({
            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide
        });

        var geometry = new THREE.CubeGeometry(CONST.FAR, CONST.FAR, CONST.FAR);

        this.mesh = new THREE.Mesh(geometry, material);
    }

    Skybox.prototype = {
        constructor: Skybox,

        update: function(delta)
        {}
    };

    return Skybox;
});
