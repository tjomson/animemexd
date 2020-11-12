//npm install jikanjs --save
function test() {
    let types = document.getElementById("types");
    let username = document.getElementById("username");
    //console.log(jikanjs.loadUser("tjoms", "completed"));
    let response = httpGet("https://api.jikan.moe/v3/user/"+ username.value +"/animelist/completed");
    let asJson = JSON.parse(response);
    let animesOfType = [];
    for (let anime of asJson['anime']) {
        if (anime['type'] === types.value) {
            animesOfType.push(anime);
        }
    }

    console.log(asJson);
    console.log(animesOfType);


}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
//https://jikan.docs.apiary.io/#reference/0/user
//https://github.com/zuritor/jikanjs