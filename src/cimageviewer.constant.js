/**
 * @fileOverview 图片浏览器 - 常量定义
 * @author ctchen
 * @version 1.0.0
 */

(function (CIV) {

    /**
     * 切换动画类型
     */
    CIV.ANIMATION = {
        /**
         * 平移
         */
        TRANSLATE: "translate"
    };

    /**
     * 默认初始化参数
     */
    CIV.defaultOptions = {
        /**
         * 图片列表
         */
        list: null,

        /**
         * 查看的图片序号
         */
        index: 0,

        /**
         * 是否循环查看，默认为 true
         */
        loop: false,

        /**
         * 是否预加载图片，默认为 false
         */
        preload: false,

        /**
         * 是否展示保存按钮，默认为 false
         */
        save: false,

        /**
         * 保存按钮文本，默认为 "保存图片"
         */
        saveBtn: "保存图片",

        /**
         * 弹窗背景色，默认为黑色 "#000"
         */
        background: "#000",

        /**
         * 切换动画，默认是平移 "translate"，值在 CIV.ANIMATION 中定义
         */
        animation: CIV.ANIMATION.TRANSLATE,

        /**
         * 浮层层级，默认是 99999
         */
        zIndex: 99999
    };

})(window.CIV);