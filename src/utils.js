/**
 * Created by Weil on 2017/5/23.
 */
let ajax = ({method = '', url = '', async = true, data = {}, headers = {}}) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);

    for (let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    if (method.toUpperCase() === 'POST') {
        xhr.setRequestHeader('content-type', 'application/json');
    }

    let sendString = typeof data === 'string' ? data : JSON.stringify(data);
    xhr.send(sendString);

    return new Promise((resolve, reject) => {
        xhr.onload = function () {
            resolve(JSON.parse(xhr.responseText));
        };
        xhr.onerror = function () {
            reject(xhr.responseText);
        };
    });
};
let setRem = (doc, win) => {
    console.log("dpr:" + win.devicePixelRatio);
    let docEle = doc.documentElement,
        isIos = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = Math.min(win.devicePixelRatio, 3),
        scale = 1 / dpr,

        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEle.dataset.dpr = dpr;

    let metaEle = doc.createElement('meta');
    metaEle.name = 'viewport';
    metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale;
    docEle.firstElementChild.appendChild(metaEle);

    let recalCulate = function () {
        let width = docEle.clientWidth;
        if (width / dpr > 640) {
            width = 640 * dpr;
        }
        docEle.style.fontSize = 100 * (width / 750) + 'px';
    };

    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
};
export {ajax};
export {setRem};
export default {
    ajax,
    setRem
}
