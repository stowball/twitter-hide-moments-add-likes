// ==UserScript==
// @name         Hide Twitter Moments and Add Likes
// @namespace    http://mattstow.com/
// @version      0.1
// @description  Hide Twitter Moments tab and a Likes tab
// @author       Matt Stow
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */

(function() {
    'use strict';

    var nav = document.getElementById('global-actions');
    var li = document.createElement('li');

    nav.getElementsByClassName('moments')[0].style.display = 'none';
    li.innerHTML = '<a href="/i/likes"><span class="Icon Icon--heart Icon--large"></span><span class="text">Likes</span></a>';
    nav.appendChild(li);
})();
