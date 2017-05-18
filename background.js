onload = function () {
  var socket = chrome.socket;
  var socketInfo;
  socket.create("tcp", {}, function (_socketInfo) {
    socketInfo = _socketInfo
    socket.listen(socketInfo.socketId, "127.0.0.1", 3040, 20, function (result) {
      console.log("Listening", result);
      socket.accept(socketInfo.socketId, onAccept)
    });
  });
  onAccept = function (acceptInfo) {
    console.log("Accept", acceptInfo);
    socket.read(acceptInfo.socketId, function (readInfo) {
      console.log("Read", readInfo);
      var data = arrayBufferToSString(read.data);
      if (data.indexOf("GET ") === 0) {
        console.log('GET')
        // var uriEnd  = data.indexOf(" ", 4);
        // var uri = data.substring(4, uriEnd);
        // var 
      }
    });
  }
  arrayBufferToSString = function (buffer) {
    var str = "";
    var uArrayVal = new Uint8Array(buffer);
    for (var i = 0; i < uArrayVal.length; i++)
      str += String.fromCharCode(uArrayVal[i])
    return str;
  }
}

onload();
var page = "index.html"
chrome.app.window.create(page,
  opts,
  function (mainWindow) {
    // window.mainWindow = mainWindow;
    // mainWindow.onClosed.addListener(window_closed)
    // var hiddenwin = chrome.app.window.get('hidden')
    // if (hiddenwin) { hiddenwin.close() }

  });