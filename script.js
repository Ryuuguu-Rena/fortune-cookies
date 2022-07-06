let style = document.createElement('style'),
	cookie = document.createElement('div');
document.head.append(style);
style.sheet.insertRule(
	'#cookie{' +
		'content: url("imgs/cookie.png")' +
	'}'
);
cookie.id = 'cookie';
cookie.addEventListener('click', () => {
	if(document.styleSheets[0].cssRules[0].style.content == 'url("imgs/cookie.png")'){
		style.sheet.deleteRule(0);
		style.sheet.insertRule(
			'#cookie{' +
				'content: url("imgs/broken_cookie.png")' +
			'}'
		);
	}
	else if(document.styleSheets[0].cssRules[0].style.content == 'url("imgs/broken_cookie.png")'){
		style.sheet.deleteRule(0);
		style.sheet.insertRule(
			'#cookie{' +
				'content: url("imgs/cookie.png")' +
			'}'
		);
	}
})
document.body.append(cookie)
