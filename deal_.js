Game.market.createOrder({
    type: ORDER_SELL,
    resourceType: RESOURCE_POWER,
    price: 35.3,
    totalAmount: 10000,
    roomName: "E26N8"
});


Game.market.createOrder({
    type: ORDER_BUY,
    resourceType: RESOURCE_POWER,
    price: 22.0,
    totalAmount: 50000,
    roomName: "E26N8"
});

Game.market.createOrder({
    type: ORDER_SELL,
    resourceType: RESOURCE_ENERGY,
    price: 0.28,
    totalAmount: 100000,
    roomName: "E26N8"
});

Game.market.createOrder({
    type: ORDER_BUY,
    resourceType: RESOURCE_SILICON,
    price: 17.5,
    totalAmount: 20000,
    roomName: "E27N7"
});
Game.rooms['E26N8'].factory