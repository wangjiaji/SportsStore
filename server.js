var connect = require('connect');

connect.createServer(
    connect.static('../angular')
).listen(5000);
