Instagram-Client
================

Instagram Web Client built with Node/Angular with the Instagram API to get more familiar with Server-side OAuth flow. Frontend is hosted on GitHub Pages (Client folder) and backend is hosted on Heroku (Server folder). Available [here](http://xasos.github.io/Instagram-Client).

## Getting Started
Create an app on the [Instagram Developer page](http://instagram.com/developer/). Specify both the Website URL and Redirect URI as http://localhost:8000 (or whatever pertains to your host). Then, copy the Client ID into client/app.js and the Client Secret into server/config.js.

### Running App
```sh
$ mongod

# In another terminal window
$ cd server
$ npm install
$ node server.js

# In another terminal window
$ cd client
$ python -m SimpleHTTPServer
$ open localhost:8000/
```

## License
[MIT License](LICENSE)
