define(function(require)
{
    'use strict';
    
    var THREE = require('three.min');
    var CONST = require('../constant');

    function ThirdPersonCamera()
    {
        this.internal = new THREE.PerspectiveCamera(CONST.VIEW_ANGLE, CONST.ASPECT, CONST.NEAR, CONST.FAR);
        this.internal.position.set(0, 5, 10);
        this.internal.lookAt(new THREE.Vector3(0, 0, 0));
    }

    ThirdPersonCamera.prototype = {
        constructor: ThirdPersonCamera
    };

    return ThirdPersonCamera;
});
