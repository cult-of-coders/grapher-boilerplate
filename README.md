Grapher Boilerplate
===================

In order to make it work with module structure you need to:

- Separate your links from your collection
- Load all the links client-side and server-side separately, we do this to avoid scenarios where you link 2 collections,
and both need each other, leading to a inter-dependency and getting objects such as {__esModule: true, default: xxx}


Start the app
=============

```
git clone https://github.com/cult-of-coders/grapher-boilerplate
cd grapher-boilerplate
meteor npm install
meteor
```

Have fun!
