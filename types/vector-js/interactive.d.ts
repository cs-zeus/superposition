declare module "vector-js-clone" {
  declare type SVGAttributes = 'viewBox' | 'preserveAspectRatio' | 'transform';
  /**
  * This class represents a SVG element. There are four geometric properties x, y,
  * width, and height. The (x,y) properties only affect nested SVG elements.
  */
  export class SVG extends Element implements Descriptive, Shape, Structural, Typography {
    root: SVGSVGElement;
    /**
    * Constructs a svg element.
    */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
    * Constructs and returns a SVG object within the DOM.  If the provided
    * argument is an HTMLElement appends the interactive within that element. If
    * the provided a value is a string, appends the interactive within the HTML
    * element with the corresponding ID. If no element is found throws an error.
    */
    static SVG(idOrElement: string | HTMLElement, x?: number, y?: number, width?: number, height?: number): SVG;
    /**
    * Return the width of this svg element.
    */
    get width(): number;
    /**
    * Set the width of this svg element.
    */
    set width(value: number);
    /**
    * Returns the height of this svg element.
    */
    get height(): number;
    /**
    * Sets the height of this svg element to the provided value.
    */
    set height(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    get viewBox(): string;
    set viewBox(value: string);
    setViewBox(x: number, y: number, width: number, height: number): void;
    setAttribute(name: SVGAttributes | CoreAttributes, value: string): SVG;
    getAttribute(name: SVGAttributes | CoreAttributes): string;
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    defs(): Defs;
    group(): Group;
    svg(x: number, y: number, width: number, height: number): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    text(x: number, y: number, str: string): Text;
    /**
    * Constructs and appends an 'a' (link) element within this element.
    */
    a(href: string): A;
    /**
    * Constructs and appends a 'clipPath' element within this element.
    */
    clipPath(): ClipPath;
    /**
    * Constructs and appends a 'marker' element within this element.
    */
    marker(refX: number, refY: number, width: number, height: number): Marker;
    /**
    * Constructs and appends a 'script' element within this element.
    */
    script(): Script;
  }

  /**
* A group is a structural element that allows for elements to be grouped
* together and have styles and transformations applied to the elements in the
* group.
*/
  export class Group extends Element implements Descriptive, Shape, Structural {
    root: SVGGElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor();
    setAttribute(name: GroupAttributes | CoreAttributes, value: string): Group;
    getAttribute(name: GroupAttributes | CoreAttributes): string;
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    defs(): Defs;
    group(): Group;
    svg(x: number, y: number, width: number, height: number): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    /**
    * Constructs and appends a text element within this element.
    */
    text(x: number, y: number, str: string): Text;
    /**
    * Constructs and appends an 'a' (link) within this element.
    */
    a(href: string): A;
    /**
    * Constructs and appends a clipPath within this element
    */
    clipPath(): ClipPath;
  }
  /**
* An object that takes in user input in the form of user events.
*/
  export class Input extends Group {
    private _onchange;
    /**
    * Constructs a new input group.
    */
    constructor();
    /**
    * This function is called whenever the state of an input element changes. The
    * default behavior of this function is to update the dependents of this
    * element. WARNING: changing this function can have unintented side effects.
    */
    set onchange(func: () => void);
    get onchange(): () => void;
  }

  /**
* A basic element of the interactive ecosystem. Each element has an unique
* identifier, an update function to be defined by the user, and the ability to
* add dependencies on other elements.
*/
  export abstract class BaseElement {
    /**
    * Allows for the events attatched to elements to be disabled.
    */
    static disable: boolean;
    /**
    * The controller manages the dependencies between elements. Every element
    * is added to this controller upon creation.
    */
    static controller: Controller;
    /**
    * This number uniquely identifes elements
    */
    static count: number;
    /**
    * A unique identifier string
    */
    private _id;
    /**
    * The update function describes how this element should update itself
    */
    update: () => void;
    /**
    * Constructs the elements and adds it into the current controller.
    */
    constructor();
    /**
    * Clears the static data structures holding elements and resets the count.
    */
    static clear(disable?: boolean): void;
    /**
    * Returns the unique generated identifier associated with this element.
    */
    get id(): string;
    /**
    * Removes this element from the DOM and from the Element controller.
    */
    remove(): void;
    /**
    * Declares this element dependent on the provided element(s).
    */
    addDependency(...elements: BaseElement[]): void;
    /**
    * Updates all of the elements that depend on this element.
    */
    updateDependents(): void;
  }

  /**
* These global attributes are associated with every SVG element in the DOM.
*/
  export type CoreAttributes = 'id' | 'tabindex' | 'style' | 'class' | 'lang' | 'autofocus' | 'xml:space' | 'transform';
  /**
  * This class defines the basic shape for all SVG elements within our library.
  */
  export class Element extends BaseElement {
    /**
    * The root element of this element.
    */
    root: SVGElement;
    /**
    * Style for the root element.
    */
    style: CSSStyleDeclaration;
    /**
    * Class attribute for the root element.
    */
    classList: DOMTokenList;
    /**
    * Constructs the elements and adds it into the current controller.
    */
    constructor(root: SVGElement);
    /**
    * Sets the provided attribute with the value. WARNING: Elements are given
    * a unique id by default. Changing the id may have unintended consequences.
    * Similarly, the style and class attributes should be accessed through the
    * properties "style" and "classList".
    */
    setAttribute(name: CoreAttributes, value: string): Element;
    /**
    * Returns the value associated with the attribute.
    */
    getAttribute(name: CoreAttributes): string;
    /**
    * Appends the element as a child within this element.
    */
    appendChild<T extends Element>(child: T): T;
    /**
    * Inserts the element before the first child within this element.
    */
    prependChild<T extends Element>(child: T): T;
    /**
    * Returns true if this element contains the argument element.
    */
    contains(element: Element): boolean;
    /**
    * Removes this element from the DOM and from the Element controller.
    */
    remove(): void;
    /**
    * Removes all child elements from this element.
    */
    clear(): void;
    /**
    * Returns the bounding box of this element. Note, this is different from the
    * getBoundingClientRect method since the bounding box is affected by the
    * current viewPort.
    *
    * If this element's root is not a SVGGraphics element as is the case for the
    * marker, title, and more element, then null is returned instead of a DOMRect.
    */
    getBoundingBox(): SVGRect;
  }

  /**
* Attributes associated with geometric SVG elements.
*/
  export type ShapeAttributes = 'marker-start' | 'marker-mid' | 'marker-end' | 'transform';
  /**
  * A shape is a basic geometric element.
  */
  export abstract class Shape extends Element {
    root: SVGGeometryElement;
    /**
    * Constructs a shape element with the provided root.
    */
    constructor(root: SVGGeometryElement);
    setAttribute(name: ShapeAttributes | CoreAttributes, value: string): Shape;
    getAttribute(name: ShapeAttributes | CoreAttributes): string;
    /**
    * Returns the location of the point on the path.
    */
    getPointAtLength(x: number): DOMPoint;
    /**
    * Returns the total length of this path.
    */
    getTotalLength(): number;
    /**
    * Returns true if the point is contained within this shapes fill
    */
    isPointInFill(point: DOMPoint): boolean;
    /**
    * Returns true if the point is contained within this shapes stroke
    */
    isPointInStroke(point: DOMPoint): boolean;
  }

  /**
* These attributes control the text position.
*/
  export type TextAttributes = 'baseline-shift' | 'text-anchor' | 'alignment-baseline';
  /**
  * Text is a basic element containing string contents
  */
  export class Text extends Element implements Typography {
    root: SVGTextElement;
    /**
    * Constructs text at the position (x,y) with the provided string
    */
    constructor(x: number, y: number, str?: string);
    setAttribute(name: TextAttributes | CoreAttributes, value: string): Text;
    getAttribute(name: TextAttributes | CoreAttributes): string;
    /**
    * Sets the contents of this element
    */
    set contents(str: string);
    /**
    * Sets the contents of this element
    */
    get contents(): string;
    /**
    * Gets the x position of this element
    */
    get x(): number;
    /**
    * Gets the y position of this element
    */
    get y(): number;
    /**
    * Sets the x position of this element
    */
    set x(value: number);
    /**
    * Sets the y position of this element
    */
    set y(value: number);
    /**
    * Returns the length of the text
    */
    get length(): number;
    text(x: number, y: number, str: string): Text;
    tspan(text: string): TSpan;
  }

  declare type RectangleAttributes = 'rx' | 'ry';
  /**
  * A rectangle is a basic element with a position, width, and height. The
  * position refers to the top left corner of the rectangle
  */
  export class Rectangle extends Shape {
    root: SVGRectElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(x: number, y: number, width: number, height: number);
    setAttribute(name: RectangleAttributes | ShapeAttributes | CoreAttributes, value: string): Rectangle;
    getAttribute(name: RectangleAttributes | ShapeAttributes | CoreAttributes): string;
    /**
    * Returns the x position of the rectangle
    */
    get x(): number;
    /**
    * Sets the x position of the rectangle
    */
    set x(n: number);
    /**
    * Returns the y position of the rectangle
    */
    get y(): number;
    /**
    * Sets the y position of the rectangle
    */
    set y(n: number);
    /**
    * Returns the width of the rectangle
    */
    get width(): number;
    /**
    * Sets the width of the rectangle
    */
    set width(n: number);
    /**
    * Returns the height of the rectangle
    */
    get height(): number;
    /**
    * Sets the height of the rectangle
    */
    set height(n: number);
    translate(x: number, y: number): void;
    /**
    * Returns the fill style of this rectangle
    */
    get fill(): string;
    /**
    * Sets the fill style of this rectangle
    */
    set fill(s: string);
    /**
    * Returns the stroke style of this rectangle
    */
    get stroke(): string;
    /**
    * Sets the stroke style of this rectangle
    */
    set stroke(s: string);
  }

  /**
  * A circle is a basic geometric element with a position and radius.
  *
  * Geometric Properties:
  *   - cx
  *   - cy
  *   - r
  */
  export class Circle extends Shape {
    root: SVGCircleElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(cx: number, cy: number, r: number);
    /**
    * Returns the radius of this circle.
    */
    get r(): number;
    /**
    * Sets the value of the radius of this circle.
    */
    set r(value: number);
    /**
    * Returns the x position of the rectangle
    */
    get cx(): number;
    /**
    * Sets the x position of the rectangle
    */
    set cx(n: number);
    /**
    * Returns the y position of the rectangle
    */
    get cy(): number;
    /**
    * Sets the y position of the rectangle
    */
    set cy(n: number);
    getPath(): Path;
    /**
    * Translates the circle to a new position by changing the x and y attributes.
    */
    translate(x: number, y: number): void;
    /**
    * Returns the fill style of this circle
    */
    get fill(): string;
    /**
    * Sets the fill style of this circle
    */
    set fill(s: string);
    /**
    * Returns the stroke style of this circle
    */
    get stroke(): string;
    /**
    * Sets the stroke style of this circle
    */
    set stroke(s: string);
  }

  /**
 * A point has an x position and y position
 */
  export class Point {
    x: number;
    y: number;
  }
  /**
  * A control point is a draggable two dimensional point.
  */
  export class Control extends Input {
    stroke: any;

    private static pointRadius;
    private static handleRadius;
    private static active;
    private static slopX;
    private static slopY;
    private static prevX;
    private static prevY;
    private _x;
    private _y;
    private _dx;
    private _dy;
    private static initalized;
    point: Circle;
    handle: Circle;
    /**
    * Modifying the transform function allows for the control to be constrained
    * to a path or constrained to the region enclosed in a path.
    */
    constrain: (_oldPosition: Point, newPosition: Point) => Point;
    /**
    * Constructs a control at the position (x,y)
    */
    constructor(x: number, y: number);
    /**
    * Handles when the user moves their mouse over the window. If there is an
    * active control, the control's position is updated.
    */
    static handleMouseMove(event: MouseEvent): void;
    /**
    * Handles a touch move event. If there is an active control, the control's
    * position is updated.
    */
    static handleTouchMove(event: TouchEvent): void;
    /**
    * Moves the active control to the new (x,y) position.
    */
    static handleMoveTo(clientX: number, clientY: number): void;
    /**
    * Handles when a use mouses up over the window or ends their touch event.
    */
    static handleInputEnd(event: TouchEvent | MouseEvent): void;
    /**
    * When a user mouses over a control, add the class "highlight" to the control
    * handle.
    */
    static handleMouseOver(event: MouseEvent): void;
    /**
    * When a user mouses out of a control handle and when there is no active
    * control, remove the "highlight" class from the event target.
    */
    handleMouseOut(event: MouseEvent): void;
    /**
    * Handle when a user mouses down over a Control's handle. Stores the error in
    * the user's click as well as stores which Control the user is clicking.
    */
    handleMouseDown(event: MouseEvent): void;
    /**
    * Handle when a user touches over a Control's handle. Stores the error in
    * the user's input as well as stores which Control the user is clicking.
    */
    handleTouchStart(event: TouchEvent): void;
    /**
    * Moves the control to a new location
    */
    translate(x: number, y: number): void;
    /**
    * Updates the x position of the control.
    */
    set x(x: number);
    /**
    * Updates the y position of the control.
    */
    set y(y: number);
    /**
    * Gets the x position of the control.
    */
    get x(): number;
    /**
    * Gets the y position of the control.
    */
    get y(): number;
    /**
    * Gets the change in x position of this control.
    */
    get dx(): number;
    /**
    * Gets the change in y position of this control.
    */
    get dy(): number;
    /**
    * Constrains the movement of this control point to the path of the provided
    * element.
    */
    constrainTo(element: Path | Circle | Rectangle): void;
    /**
    * Constrains the movement of this control point to the path of the provided
    * element.
    */
    constrainWithin(element: Path | Circle | Rectangle): void;
    /**
    * Constrains the control to follow the path of the circle specified by the
    * arguments. TODO: add a method to constrain the control to a path
    */
    constrainToCircle(cx: number, cy: number, r: number): void;
    /**
    * Constrains the control to the box defined by the points (x1, y1) and
    * (x2, y2). The first point defines the top-left corner of the box, the
    * second the bottom-right corner of the box.
    */
    constrainWithinBox(x1: number, y1: number, x2: number, y2: number): void;
    constrainWithinRange(minX: number, maxX: number): void;
    /**
    * Constrain this control to only move left and right along its current x
    * position.
    */
    constrainToX(minX?: number, maxX?: number): void;
    /**
    * Constrain this control to only move up and down along its current y
    * position.
    */
    constrainToY(): void;
  }

  /**
* A path element allows for the creation of complicated shapes and curves.
*/
  export class Path extends Shape {
    root: any | SVGGeometryElement | SVGPathElement;
    /**
    * Construct a new path element with a string of commands.
    */
    constructor(d: string);
    /**
    * Returns the d attribute
    */
    get d(): string;
    /**
    * Sets the d attribute
    */
    set d(d: string);
    /**
    * Returns the path representation of the provided shape.
    */
    static getPath(shape: Shape): Path;
  }


  /**
* A circle is a basic shape element with a start and end position.
*
* Geometric Properties:
*   - x1
*   - y1
*   - x2
*   - y2
*/
  export class Line extends Shape {
    root: SVGLineElement;
    /**
    * Constructs a line between the points (x1, y1) and (x2, y2)
    */
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
    * Returns the x position of the start position
    */
    get x1(): number;
    /**
    * Sets the x position of the start position
    */
    set x1(x1: number);
    /**
    * Returns the y position of the start position
    */
    get y1(): number;
    /**
    * Sets the y position of the start position
    */
    set y1(y1: number);
    /**
    * Returns the x position of the end position
    */
    get x2(): number;
    /**
    * Sets the x position of the end position
    */
    set x2(x2: number);
    /**
    * Returns the y position of the end position
    */
    get y2(): number;
    /**
    * Sets the y position of the end position
    */
    set y2(y2: number);
    translate(x: number, y: number): void;
    /**
    * Returns the fill style of this line
    */
    get fill(): string;
    /**
    * Sets the fill style of this line
    */
    set fill(s: string);
    /**
    * Returns the stroke style of this line
    */
    get stroke(): string;
    /**
    * Sets the stroke style of this line
    */
    set stroke(s: string);
  }

  declare type MarkerAttributes = 'viewBox' | 'preserveAspectRatio' | 'refX' | 'refY' | 'markerUnits' | 'markerWidth' | 'markerHeight' | 'orient';
  /**
  * A marker is a shape that can be repeatably drawn on a shape.
  */
  export class Marker extends Element implements Shape, Structural {
    root: SVGMarkerElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(refX: number, refY: number, width: number, height: number);
    setAttribute(name: MarkerAttributes | CoreAttributes, value: string): Element;
    getAttribute(name: MarkerAttributes | CoreAttributes): string;
    get viewBox(): string;
    set viewBox(value: string);
    get refX(): number;
    set refX(value: number);
    get refY(): number;
    set refY(value: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    defs(): Defs;
    group(): Group;
    svg(): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    text(x: number, y: number, str: string): Text;
  }

  export interface InteractiveOptions {
    width?: number;
    height?: number;
    originX?: number;
    originY?: number;
    border?: boolean;
  }

  /**
  * This class exposes the high level functionality of our library. Elements can
  * created and related together
  *
  * By default input elements are added to a SVG "controls" group and visual
  * elements are added to the "background" group. This ensures that controls will
  * always be focusable, despite the order in which elements are created.
  */
  export class Interactive extends SVG {
    style: Style;
    /**
    * The container element for this interactive.
    */
    container: HTMLElement;
    /**
    * The input groups sits on top of the background group and ensures that
    * input elements will always visually appear above background elements.
    */
    input: Group;
    /**
    * The background is where everything that is not a primary control is drawn.
    */
    background: Group;
    /**
    * This group contains symbols that can be reused within this interactive.
    */
    private symbols;
    /**
    * Maps icon names to ids.
    */
    private icons;
    private _width;
    private _height;
    private _originX;
    private _originY;
    /**
    * Constructs a new interactive object and appends it into the DOM. If the
    * provided argument is an HTMLElement appends the interactive within that
    * element. If the provided a value is a string, appends the interactive within
    * the HTML element with the corresponding ID. If no element is found throws an
    * error.
    */
    constructor(value: string | HTMLElement, options?: InteractiveOptions);
    /**
    * Sets the width of this interactive area.
    */
    set width(value: number);
    /**
    * Returns the width of this interactive area.
    */
    get width(): number;
    /**
    * Sets the height of this interactive area.
    */
    set height(value: number);
    /**
    * Returns the height of this interactive area.
    */
    get height(): number;
    /**
    * Sets the x coordinate of the origin.
    */
    set originX(value: number);
    /**
    * Returns the value of the x-coordinate of the origin.
    */
    get originX(): number;
    /**
    * Sets the y coordinate of the origin.
    */
    set originY(value: number);
    /**
    * Returns the value of the x-coordinate of the origin.
    */
    get originY(): number;
    /**
    * If set to true, styles the interactive to float on top of the background.
    * This feature is good for interactives where elements can be dragged out of
    * the bounds of the container element.
    */
    set window(value: boolean);
    /**
    * If set to true, draws a minimal border around the interactive.
    */
    set border(value: boolean);
    /**
    * Returns the minimum x-coordinate of this interactive.
    */
    get minX(): number;
    /**
    * Returns the minimum y-coordinate of this interactive.
    */
    get minY(): number;
    /**
    * Returns the maximum x-coordinate of this interactive.
    */
    get maxX(): number;
    /**
    * Returns the maximum y-coordinate of this interactive.
    */
    get maxY(): number;
    /**
    * Appends the element within the interactive. If the element is an "input"
    * element, places the element in the input group so that visually the element
    * is always placed above other graphical elements.
    */
    appendChild<T extends Element>(child: T): T;
    /**
    * Creates a nested interactive within this interactive
    */
    interactive(x: number, y: number, options?: InteractiveOptions): Interactive;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    button(x: number, y: number, label: string): Button;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    checkBox(x: number, y: number, label: string, value: boolean): CheckBox;
    /**
    * Creates an icon at the position (x,y) with the provided dimensions.
    */
    icon(x: number, y: number, width: number, height: number, name: string, options?: {
      baseURL?: string;
    }): Icon;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    radioControl(x: number, y: number, labels: string[], index?: number): RadioControl;
    /**
    * Creates a dropdown input at the position (x,y) within this interactive.
    */
    dropdownControl(x: number, y: number, optionLabels: string[], defaultIndex: number): DropdownControl;
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    control(x: number, y: number): Control;
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    controlCircle(x: number, y: number): Control;
    /**
    * Creates a plot within this interactive at the position (x,y).
    */
    plot(fn: (x: number) => number, options: PlotOptions): Plot;
    /**
    * Creates a graph element within this interactive
    */
    graph(options: GraphOptions): Graph;
    hoverBox(str: string): HoverBox;
    /**
    * Creates a graph element within this interactive
    */
    map(externalData: GeoJSON, featureName?: string, options?: MapOptions): Map;
    /**
    * Creates a slider input within this interactive
    */
    slider(x: number, y: number, options: SliderOptions): Slider;
    /**
    * Creates a scrubber with a play and pause button at the position (x,y).
    */
    scrubber(x: number, y: number, options: SliderOptions): Scrubber;
    /**
    * Creates a node within this interactive.
    */
    node(x: number, y: number, rx: number, ry: number, contents: string): Node;
    /**
    * Creates an edge connecting two nodes within this interactive.
    */
    edge(nodeFrom: Node, nodeTo: Node, directed: boolean): Edge;
    /**
    *
    */
    loadSVG(url: string): Promise<Group>;
  }
}

declare module "@vector-js/library/dist/interactive";