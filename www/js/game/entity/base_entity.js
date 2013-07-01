define(function(require)
{
    'use strict';
    
    function BaseEntity()
    {
        this.mesh = null;
    }

    BaseEntity.prototype = {
        constructor: BaseEntity,

        update: function(delta)
        {}
    };

    return BaseEntity;
});
