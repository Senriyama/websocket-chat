# Simple Chat Application

This is a simple real-time chat application built with Node.js and Socket.IO.
## App Profile
<!-- Badges -->
<table>
  <tr>
    <td>License</td>
    <td>Lang</td>
    <td>DB</td>
  </tr>
  <tr>
    <td>
      <a href="./LICENSE">
        <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat">
      </a>
    </td>
    <td>
      <img src="https://img.shields.io/badge/-HTML5-333.svg?logo=html5&style=flat">
      <img src="https://img.shields.io/badge/-JavaScript-276DC3.svg?logo=javascript&style=flat">
      <img src="https://img.shields.io/badge/-Node.js-555.svg?logo=nodedotjs&style=flat">
    </td>
    <td>
      <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?logo=sqlite&style=flat">
      <img src="https://img.shields.io/badge/-PostgreSQL-555.svg?logo=postgresql&style=flat">
      <img src="https://img.shields.io/badge/-MySQL-000000.svg?logo=mysql&style=flat">
    </td>
  </tr>
</table>


## System Architecture

```
+-------------------+
|   Client Browser  |
|    (index.html)   |
+--------+----------+
         |
         | HTTP / WebSocket
         |
+--------v----------+
|                   |
|   Node.js Server  |
|                   |
| +---------------+ |
| |   Express.js  | |
| +---------------+ |
|                   |
| +---------------+ |
| |   Socket.IO   | |
| +---------------+ |
|                   |
| +---------------+ |
| |    app.js     | |
| +---------------+ |
|                   |
+-------------------+
```
## Features

- Real-time messaging: Users can send and receive messages instantly.
- Multiple clients: The chat supports multiple users connecting simultaneously.
- Simple interface: A clean, easy-to-use chat interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have a Windows/Linux/Mac machine.

## Installing Simple Chat Application

To install the Simple Chat Application, follow these steps:

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

```
npm install
```

## Using Simple Chat Application

To use the Simple Chat Application, follow these steps:

1. Start the server by running the following command in the project directory:

```
node app.js
```

2. You should see the message "Server running on port 3000" in the console.
3. Open a web browser and go to `http://localhost:3000`.
4. You should now see the chat interface.
5. Open multiple browser windows pointing to the same URL to simulate multiple users.
6. Start chatting!
<img width="1512" alt="スクリーンショット 2024-07-08 15 12 41" src="https://github.com/Senriyama/websocket-chat/assets/65900702/fc3eaeda-606b-4478-bd54-0684ceeb4c9a">

## License

This project uses the following license: [MIT License](<link_to_license>).
