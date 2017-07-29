/**
 * Created by fuchao on 01/07/2017.
 */
$(function () {
  var site = window.location.host;
  var pageImg = $('.banner-button-box').find('img')[0].src;
  var key;
  if (site.match('localhost')) {
    key = 'finance';
  } else {
    key = site.split('.')[1].slice(5);
  }
  $('.tit2').find('img')[0].src = site + '/img/logo-' + key + '.png';
  $('.qr-code').find('img')[0].src = site + '/img/qr-' + key + '.png';
  if (pageImg.match('union')) {
    pageImg = site + '/img/union-' + key + '.png';
  }
  if (pageImg.match('contact')) {
    pageImg = site + '/img/contact-' + key + '.png';
  }
});