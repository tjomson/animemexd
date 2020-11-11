//npm install jikanjs --save

function test() {
    //console.log(jikanjs.loadUser("tjoms", "completed"));
    let response = httpGet("https://api.jikan.moe/v3/user/tjoms/animelist/completed");
    let asJson = JSON.parse(response);
    console.log(asJson['anime'][0]);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
//https://jikan.docs.apiary.io/#reference/0/user
//https://github.com/zuritor/jikanjs