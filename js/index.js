function changeContent(pageName) {
  document.getElementById('main').innerHTML = window[pageName]();
}

changeContent('home');
