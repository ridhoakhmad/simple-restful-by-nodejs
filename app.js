/**
 * Created by pc on 8/28/2017.
 */
var express = require('express');
var app     = express();
var fs      = require('fs');

app.get('/movielist', function(req, res){
   fs.readFile(__dirname + "/"+ "movie.json", 'utf8', function(err, data){
       console.log(data);
       res.end(data)
   });
})

var movies =  {
        "id_movie": "3",
        "movie_title": "The Dark Tower",
        "movie_rate": "8"
    }


app.post('/addmovie', function(req, res){
   fs.readFile(__dirname + "/" + 'movie.json', 'utf8', function(err, data){
      data = JSON.parse(data);
      data = movies;
      console.log(data);
      res.end(JSON.stringify(data));
   });
})

app.listen(3000);


