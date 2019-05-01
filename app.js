var app=require("express")();
var mongoose=require("mongoose");
var passport=require("passport");
var localStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var http=require("http");
var User=require("./models/User");

app.use(require("express-session")({
    secret:'nextjs',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",(req,res)=>{
    res.send("Hello from the server");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/signup",function(req,res){
    res.render("signup")
})

app.post("/register",function(req,res){
    User.register(new User(
    {username:req.body.username}),
    req.body.password,
        function(err,user){
            if(err)
            {
                console.log(err);
                res.render("signup");
            }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/login");
        });
    });
});

app.post("/login",passport.authenticate("local",{
    failureRedirect:"/login"}),
    function(req,res){
        res.redirect("/users/"+req.user.username);
    });

app.get("/logout", function(req, res){
    req.logout();
    userr="";
    res.redirect("/");
});  

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

//trash
app.get("*",function(req,res){
    res.render("error");
});




//server
var server = http.createServer(app);

var port = 3000;//process.env.PORT; // 2. Using process.env.PORT
  app.set('port', port);

server.listen(port);