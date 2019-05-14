var contact = document.getElementById('mBig');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

var contactform = document.getElementById('formaction');
// contactform.setAttribute('action', '//formspree.io/' + 'd.sevkovych' + '@' + 'varsandnumbers' + '.' + 'com');
contactform.setAttribute('action', '/assets/cgi/test.php');

/*
Document ready function
*/
$(function() {});
