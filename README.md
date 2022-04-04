Node Version: 16


Before start you should get the mongodb connection string, if you dont have any mongo server you can setup one using docker:
    
    - docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=test -e MONGO_INITDB_ROOT_PASSWORD=test mongo
    - Your default connection string will be: mongodb://test:test@localhost:27017/admin

With the connection in hands you have to edit the .env inside back folder and start the backend server.

    - npm run start

Go to the frontend and set the .env with your backend URL and start it:

    - npm run start
    
Unit test can be running on backend by typing:
    
    - npm run test

Enjoy It
