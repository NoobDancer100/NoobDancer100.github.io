(function(ext) {
    var open = false;
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.waitopened = function(callback) {
      while(open==false) {}
      open = false;
      callback();
    };
    
    ext.openwait = function() {
      open = true;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ["w", "wait until opened", "waitopened"],
          [" ", "open wait", "openwait"],
        ],
        displayName: "Wait gate"
    };

    // Register the extension
    ScratchExtensions.register('Wait gate', descriptor, ext);
})({});`
