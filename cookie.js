function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Доброго дня " + user +"!");
    } else {
       user = prompt("Будь ласка, введіть свій нікнейм:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

function usernameCookie(){
    var user=getCookie("username");
    if (user != "") {
        alert("Доброго дня " + user +"!");
    } else {
       user = prompt("Будь ласка, введіть свій нікнейм:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}


function registeruserCookie(){
    var user=getCookie("username");
    user = prompt("Будь ласка, введіть свій нікнейм:","");
    if (user != "" && user != null) {
        setCookie("username", user, 30);
        alert ('Дякую за реєстрацію ' + user + '!')
    } else registeruserCookie();
    

}
function welcomeusernameCookie(){
    var user=getCookie("username");
    if (user = user){
        alert ('Доброго дня ' + user + '!')
    }

}

 


    function deleteuserCookie(user) {   
        var user=getCookie("username");
        if  (user !=""  && user != null) (confirm("Ви точно хочете видалити аккаунт" + user + "?"));{
            document.cookie = user +'=; Max-Age=-99999999;';  alert("Ви успішно видалили аккаунт!");
            
        }
        
        
    }

    function showbutton(){
        var user=getCookie("username");
        if (user !=""  && user != null){
            showbutton;
        } else{
            
        }
    }