window.addEventListener('DOMContentLoaded', function() {

  console.log('Script loaded.');

  setInterval(function () {
    var text = document.title;
    document.title = text.substr(1) + text.substr(0, 1);
  }, 200);
  
  var favicon = document.querySelector('link[rel="icon"]');
  var index = 0;
  var faviconLetters = ['j', 'a', 'c', 'o', 'b', 'question-mark'];
  setInterval(function () {
    favicon.setAttribute('href', document.URL + 'static/images/' + faviconLetters[++index % faviconLetters.length] + '-favicon.png');
  }, 500);
  
  setInterval(function () {
    if (Math.random() > .9) {
      console.log('Clearing cache in 5000ms');
      setTimeout(function () {
        window.location.reload(true);
      }, 5000);
    }
  }, 10000);

  lib.jacoblee.jacobsimulator['@dev'].deploy.delete({
    password: 'hunter2'
  }, (err, count) => {
    if (err) {
      return document.querySelector('.visitor-count').innerHTML = 'Error please report to the webmaster';
    }
    document.querySelector('.visitor-count').innerText = (count + 1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  });

});
