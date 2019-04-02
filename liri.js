require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var userOption = process.argv[2];
var inputParameter = process.argv[3];

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says