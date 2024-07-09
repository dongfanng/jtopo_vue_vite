/**
 * 不同浏览器下效果差异较大, 不是很推荐使用
 *
 * 将Html片段当做图片使用的类, 例如：

```js
let htmlNode = new Node('From', 200, 200, 150, 150);
let htmlImage = new jtopo.HtmlImage(`
<div xmlns="http://www.w3.org/1999/xhtml"
    style="height:97%;background-color:#eeeeee; border:2px white solid;">

    <center><h4 style="color:orange;margin:0px;">居中标题</h4></center>

    <ul style="text-align:left;background-color:#65472f;font-size:14px;">
      <li style="color:#e9d9bf"><i>斜体-颜色-E9D9BF</i></li>
      <li style="color:white"><strong>加粗-白色</strong></li>
    </ul>

    <img src="./assets/img/laptop.png" width="40" height="30"/>
<div>`, htmlNode.width, htmlNode.height);

htmlImage.getCanvas().then(function(canvas){
    htmlNode.setImage(canvas);
});

```
 * 该例中 div的xmlns属性是必须的
*/
export declare class HtmlImage {
    isHtmlImage: boolean;
    html: any;
    width: number;
    height: number;
    opacity: number;
    svg: any;
    canvas: HTMLCanvasElement;
    /**
     *
     * @param {String} html html片段
     * @param {Number} width 宽
     * @param {Number} height 高
     * @param {Number} opacity 透明度
     */
    constructor(html: any, width: any, height: any, opacity?: number);
    setSize(width: any, height: any): void;
    getAttribute(name: any): string;
    setHtml(html: any): void;
    /**
     * 获取canvas
     */
    getCanvas(): Promise<HTMLCanvasElement>;
}
export { HtmlImage as default };
