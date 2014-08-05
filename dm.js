var getUrl = function (data) {
    //console.log(data);
    var info = data.match(/var info = (\{.+\}\}\,)/), json,url;
    if (info.length >=2) {
      json = info[1].substring(0, info[1].length-1);
    }
    json = JSON.parse(json);
    if (json["stream_h264_hd1080_url"] != null) {
      url = json["stream_h264_hd1080_url"];
    } else if (json["stream_h264_hd1080_url"] != null) {
      url = json["stream_h264_hd1080_url"];
    } else if (json["stream_h264_hd_url"] != null) {
      url = json["stream_h264_hd_url"];
    } else if (json["stream_h264_hq_url"] != null) {
      url = json["stream_h264_hq_url"];
    } else if (json["stream_h264_ld_url"] != null) {
      url = json["stream_h264_ld_url"];
    } else if (json["stream_h264_url"] != null) {
      url = json["stream_h264_url"];
    } else if (json["stream_hls_url"] != null) {
      url = json["stream_hls_url"];
    } else if (json["stream_live_hls_url"] != null) {
      url = json["stream_live_hls_url"];
    }
    document.getElementById('vid').innerHTML = url;
    return url;
}

function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
   return r;
}
window.onload = function () {
    var script = document.createElement('script');
        script.src = 'proxy.php?vid=' + querystring('vid');
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
}
