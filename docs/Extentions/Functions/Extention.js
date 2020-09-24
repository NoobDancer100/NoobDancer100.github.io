(function(ext) {
    var run = "";
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.run = function(name) {
      run = name;
    };
    
    ext.hat = function(name) {
      if (!run === "") {
        if (run === name) {
          run = "";
          return true;
        }
      }
      return false;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [" ", "run function %s", "run", "main"],
        ["h", "function %s", "hat", "main"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
