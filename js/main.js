window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  alert('DOMContentLoaded');
  alert('Title shared: ' + parsedUrl.searchParams.get('title'));
  alert('Text shared: ' + parsedUrl.searchParams.get('text'));
  alert('URL shared: ' + parsedUrl.searchParams.get('url'));
}); 
window.addEventListener('load', () => {
  alert('load');
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  alert('Title shared: ' + parsedUrl.searchParams.get('title'));
  alert('Text shared: ' + parsedUrl.searchParams.get('text'));
  alert('URL shared: ' + parsedUrl.searchParams.get('url'));
}); 