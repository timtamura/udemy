### Run the node.js server (server side)
```
$ npm run start:server
> mean-course@0.0.0 start:server
> nodemon server.js
```

### Run the Angular application (client side)
```
$ ng serve
```                      
the command must execute within the application folder. 

### Connect to the MongoDB 
````
$ mongosh "mongodb+srv://cluster0.ynquu.mongodb.net/test" --apiVersion 1 --username user1

Atlas atlas-104tdh-shard-0 [primary] test> use node-angular
switched to db node-angular
Atlas atlas-104tdh-shard-0 [primary] node-angular> help
Atlas atlas-104tdh-shard-0 [primary] node-angular> db.posts.find()
```
