import { Node } from '../Node';
/**
 * 视频节点
 *
```js
let videoNode = new VideoNode('视频双击播放', 0, 220, 100, 60);
// 图片：未播放时显示
videoNode.setImage('./assets/img/camer.png');

// 视频加载后自动包袱
videoNode.autoplay = true;
// 视频源：支持类型参考各浏览器，MP4、mov等
videoNode.setVideo('./assets/video/video_demo.mov');

// 双击播放
videoNode.on('dblclick', function () {
    videoNode.play();
});
// 播放结束
videoNode.onEnded(function () {
    // 再次播放，循环
    videoNode.play();
});
layer.addChild(videoNode);
```
 */
export declare class VideoNode extends Node {
    className: any;
    /**
     * 视频对象
     */
    private _video;
    private _dom;
    /**
     * @protected
    * 视频对象路径
    */
    _videoSrc?: string;
    /**
     * 是否自动播放
     */
    autoplay: boolean;
    /**
     * @protected
     * 视频对象
     */
    _isPlaying: boolean;
    /**
    * 序列化属性列表
    */
    serializers: Array<string>;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    /**
     * 显示封面图片
     * @deprecated 已过时，未来将移除
     */
    showCover(): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
    * 设置视频
    * @param {string} video 视频文件路径
    */
    setVideo(video: string | HTMLVideoElement): void;
    /**
     * 当播放时的处理
     * @param {function} fn 回调函数
     */
    onPlay(fn: any): void;
    onPause(fn: any): void;
    /**
     * 当播放结束时的处理
     * @param {function} fn 回调函数
     */
    onEnded(fn: any): void;
    draw(ctx: any): void;
    destory(): void;
}
export { VideoNode as default };
