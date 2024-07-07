const express = require('express');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log("new client connected");

    const sendSalesData = () => {
        const salesData = generateRandomSalesData();
        socket.emit('salesData', salesData);
    };
    const interval = setInterval(sendSalesData, 2000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(interval);
    });
});


const generateRandomSalesData = () => {
    return [
        {product: 'Product A', sales: Math.floor(Math.random() * 100)},
        {product: 'Product B', sales: Math.floor(Math.random() * 100)},
        {product: 'Product C', sales: Math.floor(Math.random() * 100)},
        {product: 'Product D', sales: Math.floor(Math.random() * 100)}
    ];
};

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));