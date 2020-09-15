(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.popup_normal = function(Message) {
        // Code that gets executed when the block is run
        alert(Message);
    };
    ext.popup_ask = function(Message) {
    return Prompt(Message);
    };
    ext.popup_confirm = function(Message) {
     return Confirm(Message)
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Tell %s in popup', 'popup_normal'],
            ['r', 'Ask %s in popup', 'popup_ask'],
            ['b', 'Confirm %s in popup','popup_confirm']
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
