var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setPublishChannel("requestChannel");
    var subscribeChannels = ["responseChannel"]
    wsClientProvider.setSubscribeChannel(subscribeChannels);
    wsClientProvider.setBaseUrl("wss://api-convergia.scriptrapps.io");
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
}]





