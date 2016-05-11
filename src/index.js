(function () {
  'use strict';

  var zenscroll = require('zenscroll');

  var _ = require('./util');

  var options = {};

  var defaults = {
    baseClass: 'scroll-nav',
    headingTag: 'h2',
    content: document.body,
    target: document.body,
    fixedClass: 'fixed',
    fixedMargin: 40,
    offset: 40
  };

  function init(opts) {
    options = _.defaults(options, opts, defaults);
    failFast(options);
    options.nav = _.create('ol', options.baseClass);
    options.headings = options.content.querySelectorAll(options.headingTag);
    generateNav();
    registerHandlers();
    checkPosition();
  }

  function failFast(options) {
    findElement('content');
    findElement('target');
  }

  function registerHandlers() {
    window.addEventListener('scroll', checkPosition);
  }

  function generateNav() {
    _.each(options.headings, createNavItem);
    options.target.appendChild(options.nav);
  }

  function createNavItem(heading) {
    var slug = _.slugify(heading.textContent);
    var li = document.createElement('li');
    var a = document.createElement('a');

    heading.setAttribute('id', slug);
    a.innerHTML = heading.textContent;
    a.setAttribute('href', '#' + slug);
    li.appendChild(a);
    options.nav.appendChild(li);
  }

  function findElement(name) {
    if ( !_.isDom(options[name]) ) {
      options[name] = document.querySelector(options[name]);
      if ( !_.isDom(options[name]) ) throw new Error('Could not find DOM node called "' + name + '"');
    }
  }

  function checkPosition() {
    var windowTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var boundaryTop = windowTop + options.offset;
    var boundaryBottom = windowTop + document.documentElement.clientHeight - options.offset;

    if ( windowTop > (options.offset - options.fixedMargin) ) _.addClass(options.nav, options.fixedClass);
    else _.removeClass(options.nav, options.fixedClass);
  }

  module.exports.init = init;
})();
