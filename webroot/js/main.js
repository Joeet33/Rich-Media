window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('https://up931673.ct.port.ac.uk/CT5RMWD/webroot/sw.js');
    }
  }