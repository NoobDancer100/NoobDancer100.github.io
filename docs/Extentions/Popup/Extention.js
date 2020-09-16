(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.popupp = function(Message) {
        // Code that gets executed when the block is run
        alert(Message)
    };
    ext.confirmp = function(Message) {
      return confirm(Message)
    };
    ext.promptp = function(Message) {
    return prompt(Message)
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Tell %s In popup', 'popupp', "Hello world!"],
            ['r', 'Confirm %s In popup', 'confirmp', 'Are you sure?'],
            ['b', 'Prompt %s In popup', 'promptp', 'Whats your name?'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
