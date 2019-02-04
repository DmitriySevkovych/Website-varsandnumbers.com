var contact = document.getElementById('mBig');
contact.innerHTML = 'info' + '@' + '<span>v</span>ars<span>a</span>nd<span>n</span>umbers' + '.' + 'com';

var contactform = document.getElementById('formaction');
contactform.setAttribute('action', '//formspree.io/' + 'd.sevkovych' + '@' + 'varsandnumbers' + '.' + 'com');
