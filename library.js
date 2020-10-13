'use strict';

const plugin = {};

plugin.addIframeResizableScript = function (list, callback) {
	list.push(
		'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.11/iframeResizer.contentWindow.js'
	);

	callback(null, list);
};

module.exports = plugin;
