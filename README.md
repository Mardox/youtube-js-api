youtube-js
==========

Javascript  library for YouTube Feed API


This simple and small library will get a YouTube feed based on search, channel or playlists.

Simply create a youtube object and pass the arguments. Then make a call to the getVideos method 
with the callback function as an argument. 
```
Usage:
var myYouTube = new Youtube(query, query_type, duration, start_index, max_results);
myYouTube.getVideos(callback); 
```
query : could be a search query, channel username or a playlistID

query_type : could be one of the following ( depending on the query )

    - search
    - playlist
    - channel
     
duration : could be **short**, **medium** or **long**

start_index : the start index for the result list

max_results : it could be set *up to 50 results* per call

callback : the function which will handle the call results
