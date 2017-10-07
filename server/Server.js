var http = require('http');
var https = require('https');


function HttpsPostDataToCloud(){
    var HttpSCloud = https.request({
        method:"POST",
        host:"ariefkahfi.000webhostapp.com",
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        },
        path:'/insert.php'
    },function (response){
        response.on('data',function(data){console.log('Response body : ' + data);});
        response.on('end',function(){console.log('End Response')});
    }).on('error',function(e){console.log(e);});


    HttpSCloud.write(
      "nama=NodeJS"
    );
    HttpSCloud.end();
}


function httpRequestPostData(){
    HttpPOST  = http.request({
        method:"POST",
        host:"localhost",
        path:"/angular_service1/back-end/insert.php",
        headers:{
            'Content-type':'application/x-www-form-urlencoded'
        }
    },function (response){
        response.on('data',function (data){
            console.log('Response body : ' + data);
        });
        response.on('end',function (){
            console.log('Response end');
        });
    }).on('error',function(e){console.log(e);});

    HttpPOST.write(
      "nama=This&alamat=is&gender=NodeJS"
    );
    HttpPOST.end();
}


function httpRequestSelectData(){
    HttpReq = http.request({
       method:"GET",
       host:"localhost",
       path:"/angular_service1/back-end/select.php"
    },function (response){

        response.on('data',function (data){
            console.log(data);
        });

        response.on('end',function (){
            console.log('end Response');
        });

    }).on('error',function(e){
       console.log(e);
    });

    HttpReq.end();
}

var server = http.createServer(function (req,res){
    // httpRequestSelectData();
    // httpRequestPostData();
    HttpsPostDataToCloud();
    res.end();
});


server.listen(8080,function(){
   console.log('Server running on 8080 ....');
});