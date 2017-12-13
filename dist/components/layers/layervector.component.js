"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_component_1 = require("../map.component");
var layer_component_1 = require("./layer.component");
var layergroup_component_1 = require("./layergroup.component");
var map_system_1 = require("../../map-system");
var LayerVectorComponent = (function (_super) {
    __extends(LayerVectorComponent, _super);
    function LayerVectorComponent(mapSystem, map, group) {
        var _this = _super.call(this, mapSystem, group || map) || this;
        _this.mapSystem = mapSystem;
        return _this;
    }
    LayerVectorComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new this.mapSystem.layer.Vector(this);
        _super.prototype.ngOnInit.call(this);
    };
    return LayerVectorComponent;
}(layer_component_1.LayerComponent));
LayerVectorComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'aol-layer-vector',
                template: "<ng-content></ng-content>"
            },] },
];
/** @nocollapse */
LayerVectorComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core_1.Inject, args: [map_system_1.MapSystemToken,] },] },
    { type: map_component_1.MapComponent, },
    { type: layergroup_component_1.LayerGroupComponent, decorators: [{ type: core_1.Optional },] },
]; };
LayerVectorComponent.propDecorators = {
    'renderBuffer': [{ type: core_1.Input },],
};
exports.LayerVectorComponent = LayerVectorComponent;
//# sourceMappingURL=layervector.component.js.map