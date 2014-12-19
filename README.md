Instagram-Client
================

Instagram Web Client built with Node/Angular with the Instagram API to get more familiar with the Server-side OAuth flow. Available [here](http://xasos.github.io/Instagram-Client).

## Getting Started
Create an app on the [Instagram Developer page](http://instagram.com/developer/). Specify both the Website URL and Redirect URI as http://localhost:8000 (or whatever pertains to your host). Then, copy the Client ID into client/app.js and the Client Secret into server/config.js.

### Running App
```sh
$ npm install
$ mongod && node app

# In another terminal window
$ cd client
$ open index.html
```

## License
[MIT License](LICENSE)
