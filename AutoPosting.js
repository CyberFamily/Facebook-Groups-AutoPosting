//you need valid access token with user_groups and publish_action permission
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var x = document.getElementsByName("fb_dtsg")[0].value;
var uidArray = [];
var xhr = new XMLHttpRequest();
var access = prompt("Please Enter A Valid access_token : ");
xhr.open( 'GET', 'https://graph.facebook.com/me?fields=groups.limit(200)&access_token=' + access , false );
xhr.send();




if (xhr['readyState'] != 4) {} else {


if (xhr.status == 200 || window.location.href.indexOf("http") == -1) {

var groups_data_id = xhr.responseText ;



var objJSON = eval("(function(){return " + groups_data_id + ";})()");

var all = objJSON.groups.data;

  uidArray = [];
            all.forEach(function(item) {
                uidArray.push(item.id)
            });



} else {

console.log("Error");
}
} 


var d1 = document.getElementById('facebook');
d1.insertAdjacentHTML('beforeend', '<div id=\'happy\' style=\'background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\'><span id=\'cnt\'>0</span> of ' + uidArray.length + ' groups remained.<div id=\'happyStatus\' style=\'margin-top:30px;\'><a id=\'happyButton\' href=\'#\' style=\'display:block;\' onclick=\'atopst();\'>Start Posting.</a></div></div>');

function atopst() {

var myArray2 = ['msg 1','msg2','msg3'];    
var rand2 = myArray2[Math.floor(Math.random() * myArray2.length)];
    

 for (var i = 0 ; i < uidArray.length ; i++) {
 
     
    var mypostrequest = new XMLHttpRequest;
    mypostrequest.open("POST", "https://graph.facebook.com/v2.1/" + uidArray[i] + "/feed?message=" + rand2 + "&access_token=" + access + ""  , false);
    mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    mypostrequest.send(); 
       var fieldNameElement = document.getElementById('cnt');
       fieldNameElement.textContent =  uidArray[i];

       if (i == uidArray[i]) {

       	location.reload(true);
       }
   
 }
  






}

