const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db;
let messagesCollection;
const onlineUsers = new Map();

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("chatapp");
    messagesCollection = db.collection("messages");
    return true;
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
    return false;
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

async function setupServer() {
  const isConnected = await connectToMongo();
  if (!isConnected) {
    console.error("Could not connect to MongoDB. Exiting.");
    process.exit(1);
  }

  io.on('connection', async (socket) => {
    console.log('A user connected');

    socket.on('set username', (username) => {
      socket.username = username;
      onlineUsers.set(socket.id, username);
      io.emit('update online users', Array.from(onlineUsers.values()));
    });

    try {
      // Send last 50 messages to the newly connected user
      const messages = await messagesCollection.find().sort({_id:-1}).limit(50).toArray();
      socket.emit('load messages', messages.reverse());
    } catch (e) {
      console.error("Error loading messages", e);
      socket.emit('error', 'Failed to load messages');
    }

    socket.on('chat message', async (msg) => {
      const message = {
        username: socket.username,
        message: msg,
        timestamp: new Date()
      };
      try {
        await messagesCollection.insertOne(message);
        io.emit('chat message', message);
      } catch (e) {
        console.error("Error saving message", e);
        socket.emit('error', 'Failed to save message');
      }
    });

    socket.on('disconnect', () => {
      onlineUsers.delete(socket.id);
      io.emit('update online users', Array.from(onlineUsers.values()));
      console.log('A user disconnected');
    });
  });

  const PORT = 3000;
  http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

setupServer();