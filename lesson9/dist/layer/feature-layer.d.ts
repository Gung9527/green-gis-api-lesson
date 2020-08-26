import { Layer } from "./layer";
import { Bound } from "../util/bound";
import { Projection } from "../projection/projection";
import { FeatureClass } from "../data/feature-class";
import { Renderer } from "../renderer/renderer";
import { Label } from "../label/label";
export declare class FeatureLayer extends Layer {
    private _featureClass;
    private _renderer;
    private _zoom;
    private _label;
    labeled: boolean;
    cluster: boolean;
    get featureClass(): FeatureClass;
    set featureClass(value: FeatureClass);
    set label(value: Label);
    set renderer(value: Renderer);
    on(event: any, handler: any): void;
    off(event: any, handler: any): void;
    emit(event: any, param: any): void;
    draw(ctx: CanvasRenderingContext2D, projection?: Projection, extent?: Bound, zoom?: number): void;
    drawLabel(ctx: CanvasRenderingContext2D, projection?: Projection, extent?: Bound, zoom?: number): void;
    _getSymbol(feature: any): import("../symbol/symbol").Symbol;
    contain(screenX: number, screenY: number, projection?: Projection, extent?: Bound, zoom?: number, event?: string): boolean;
}
