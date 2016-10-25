Grapher Boilerplate
===================

Welcome!

Start the app
=============

```
git clone https://github.com/cult-of-coders/grapher-boilerplate
cd grapher-boilerplate
meteor npm install
meteor
```

Read the documentation
======================

http://grapher.cultofcoders.com

Make sure you read the guide first!

Architecture
============

Based on: https://guide.meteor.com/structure.html


client
└── main.js // Just a proxy for "/imports/startup/client"
server
└── main.js // Just a proxy for "/imports/startup/server"
imports/startup
├── client
│   └── index.js // Loads everything for the client on initila load
└── server
    ├── fixtures.js // Demo Data
    ├── grapher-live.js // Initializer for Grapher Live
    └── index.js // Load everything for the server, when meteor is started
imports/api
├── grapher
│   ├── exposures.js // loader for exposure information from our collections
│   ├── index.js // loader for all the collections and linking information for each collection
│   └── namedQueries
│       ├── index.js // Loads all the namedQueries in the system. We do this so Grapher Documentation can know about our existing namedQueries
│       ├── postsWithGroups.js // It is better to put it in: /imports/api/posts/namedQueries/postsWithGroups.js, this is just an example.
│       └── usersWithComments.js
├── {collectionName}
│   ├── collection.js // instantiation of Mongo.Collection
│   ├── expose.js // exposing your Mongo.Collection
│   ├── links.js // linking information
│   └── schema.js // schema for the collection

Have fun!
