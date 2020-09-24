(function(ext) {
    var run = false
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.event = function() {
      if (run === true) {
        run = false;
        return true;
      }
      
      return false;
    };
    
    ext.normal = function(msg) {
       run = true;
       alert(msg)
    };
    ext.prompt = function(msg) {
       run = true;
       report prompt(msg)
    };
    
    ext.confirm = function(msg) {
      run = true
      report confirm(msg)
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ["h", "When a popup shows", "event"],
          [" ", "Show popup %s", "normal", "Hi!"],
          ["r", "Prompt %s in popup", "prompt", "Whats your name?"],
          ["b", "Confirm %s in popup", "confirm", "Are you sure?"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
