function changeContent(pagename) {
  document.getElementById('main').innerHTML = window[pagename]();
}

changeContent('home');
