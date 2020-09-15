(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.my_first_block = function(Thing) {
		return Thing;
	}

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
	['r', 'Return %s', 'my_first_block']
        ]
		displayName: 'My Mod'
    };

    // Register the extension
    ScratchExtensions.register('My Extention', descriptor, ext);
})({});
