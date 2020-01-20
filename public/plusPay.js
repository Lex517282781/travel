;(function() {
  var plusReady = function (callback) {
    if (window.plus) {
      callback()
    } else {
      document.addEventListener('plusready', callback)
    }
  }

  var pays={};

  var init = function() {
    plus.payment.getChannels(function(channels) {
      console.log(channels, '123')
    }, function(e){
      alert("获取支付通道列表失败："+e.message);
    })
  }

  plusReady(init)


})()