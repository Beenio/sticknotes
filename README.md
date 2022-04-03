Instructions:

You can use your own mongodb or run it through docker:

- docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=test mongo

Your default connection string will be: mongodb://test:test@localhost:27017/admin

With the connection in hands you have to edit the .env inside back folder and start the backend server.
- npm run start

Go to the frontend folder and start it:
- npm run start