import $ from 'jquery'; // 相対パスにしなくて良い理由はwebpackが自動解決してくれているから
import velocity from 'velocity-animate';

$('body').css('color', 'red');
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });
