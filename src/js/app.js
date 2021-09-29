import $ from 'jquery'; // 相対パスにしなくて良い理由はwebpackが自動解決してくれているから
import velocity from 'velocity-animate';
import { add } from './modules/math'; // .jsがなくてもwebpackが自動で探しに行ってくれる

console.log('app');

const result = add(1, 2);

$('body').append(result);
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });

console.log("hoge");