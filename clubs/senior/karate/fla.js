	if (AC_FL_RunContent == 0) {
		alert("このページでは \"AC_RunActiveContent.js\" が必要です。");
	} else {
		AC_FL_RunContent(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0',
			'width', '900',
			'height', '300',
			'src', 'mainfla',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'showall',
			'wmode', 'window',
			'devicefont', 'false',
			'id', 'mainfla',
			'bgcolor', '#000000',
			'name', 'mainfla',
			'menu', 'true',
			'allowFullScreen', 'false',
			'allowScriptAccess','sameDomain',
			'movie', 'mainfla',
			'salign', ''
			); //end AC code
	}
