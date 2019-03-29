window.$j = jQuery.noConflict();

var scripts = [
    "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",
    "./node_modules/three/build/three.js",
    "./node_modules/promise-polyfill/dist/polyfill.js",
    "./depend/static/uevent.js",
    "./depend/static/doT.js",
    "./depend/static/NoSleep.js",
    "./depend/ext/CanvasRenderer.js",
    "./depend/ext/Projector.js",
    './depend/ext/DeviceOrientationControls.js',
    './depend/ext/StereoEffect.js',
    './depend/static/psv.js',
    './depend/static/binaryajax-lib.js',
    './depend/static/imageinfo-lib.js',
    './depend/static/exif.js',
    './depend/static/canvas-toBlob.js',
    './dist/main.js'
];

function loadScript(src, onLoad) {
    try {
        var head   = document.getElementsByTagName('head')[0];
        var script = document.createElement("script");

        script.type   = "text/javascript";
        script.src    = src;
        script.onload = onLoad;

        head.appendChild(script);
    }
    catch(ex){
        console.log('Error loading script: ' + src);
        console.log(ex);
    }
}

function loadScripts(scripts, onLoad, i) {
    if (i < scripts.length) {
        loadScript(scripts[i], function () {
            loadScripts(scripts, onLoad, ++i);
        });
    } else {
        onLoad();
    }
}

window.onload = function () {

    loadScripts(scripts, function () {
        // // app startup
        // if (setupRuntime) {
        //     setupRuntime();
        // }
        console.log('Scripts loaded.');
    }, 0);
};

