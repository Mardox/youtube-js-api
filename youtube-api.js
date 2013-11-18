// ******************************************/
// YouTube Feed API JS library 
// ------------------------------------------
// Wrritten by: Mardox
// 22/10/2013
// ******************************************/ 
//  Usage:
//  var myYouTube = new Youtube(query, query_type, duration, startindex, max_results);
//  myYouTube.getVideos(callback);   
//  
//  *****************************************/
//



    var Youtube = function (query, query_type, duration, startindex, max_results){
        this.query = query;
        this.query_type = query_type;
        this.duration = duration;
        this.startindex = startindex;
        this.max_results = max_results;
    };

    Youtube.prototype.getVideos = function(callback){

        var url_duration ="";
        var url_startindex = "";
        var url_hd ="";
        var api_url ="";
       
        //You tube & building the list view

        console.log('startindex : '+this.startindex);
        if(this.duration){ url_duration ="&duration="+this.duration; }
        if(this.startindex){ 
            url_startindex = "&start-index="+this.startindex;
            //next itteration start index
            this.startindex = this.startindex + this.max_results; 
        }
        if(high_def){ url_hd = "&hd"; }
        if(this.max_results){ url_max_results = "&max-results="+this.max_results }else{ url_max_results = "&max-results=50";}
        
        if(this.query_type == 'channel'){
            //channel query
            api_url = 'https://gdata.youtube.com/feeds/api/users/'
            +this.query+'/uploads?alt=jsonc&v=2'+url_max_results+url_duration+url_startindex;

        }else if(this.query_type == 'search'){
            //search query
            api_url = 'https://gdata.youtube.com/feeds/api/videos?q='
            +this.query+'&orderby=relevance'+url_max_results+'&alt=jsonc&v=2'+url_duration+url_startindex+url_hd;

        }else if(this.query_type == 'playlist'){
            //Playlist query
            api_url = 'https://gdata.youtube.com/feeds/api/playlists/'
            +this.query+'?alt=jsonc&v=2'+url_max_results+url_duration+url_startindex;

        }
        var api_url_encoded = encodeURI(api_url);
        $.ajax({
            url: api_url_encoded,
            dataType: 'jsonp',
            timeout: 15000,
            success: callback
        });
    };
