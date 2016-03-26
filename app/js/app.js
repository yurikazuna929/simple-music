console.log("アプリの処理開始");

function installServiceWorker(){
  navigator.serviceWorker.register("js/sw.js").then(registration => {
    console.log("The service worker has been registered", registration);
  }).catch(error => {
    console.log(error);
  });
}

function init(){
  var player = document.querySelector("audio");
  console.log(player);
};

window.addEventListener("load", event =>{
  installServiceWorker();
  init();
});
