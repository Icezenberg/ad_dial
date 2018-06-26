var express = require ('express');
var app = express();
var port =9061; 


// utilisation des template ejs 
app.set("view engine", "ejs");


app.get ('/', function(req, res){
    callDatas(res)
});


// fonction d'appel des données ejs 
function callDatas(res){
    res.render('index',{
        nom:'ada',
        prenom:'dial',
        warn:'ne jamais utiliser le stash'
    })

}

// port d'écoute
app.listen(port, function() { 
    console.log("Listening on port 9061")
});