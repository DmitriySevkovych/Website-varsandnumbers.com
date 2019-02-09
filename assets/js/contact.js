var contact = document.getElementById('mBig');
contact.innerHTML = 'info' + '@' + '<span>vars</span>and<span>numbers</span>' + '.' + 'com';

var contactform = document.getElementById('formaction');
contactform.setAttribute('action', '//formspree.io/' + 'd.sevkovych' + '@' + 'varsandnumbers' + '.' + 'com');
