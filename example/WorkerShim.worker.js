importScripts('/jspm_packages/system.js', '/jspm.config.js');

var loaded = false;
self.onmessage = function(message) {
	if (loaded) return;
	loaded = true;

	var path = message.data;

	System.import(path).then(function() {
		self.postMessage('WEBWORKER_FINISH_LOADING');
	});
};
