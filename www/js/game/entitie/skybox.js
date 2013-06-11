define(function(require)
{
    'use strict';

    var THREE = require('three.min');
    var CONST = require('../constant');

    function Skybox(size, textures)
    {
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

        var skyboxMesh = new THREE.Mesh(geometry, material);
        
        return skyboxMesh;
    }

    return Skybox;
});