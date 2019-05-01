var app=require("express")();
var next=require("next");
var logger = require('morgan');
var mongoose=require("mongoose");
var passport=require("passport");
var localStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var http=require("http");
var dev = process.env.NODE_ENV !== 'production'
var ap = next({ dev })
var handle = ap.getRequestHandler()

var User=require("./models/User");

app.use(logger('dev'));
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

ap.prepare().then(()=>{
    
    app.get("/",(req,res)=>{
        var actualPage='/index'
        ap.render(req,res,actualPage);
    });

    app.get("/post/:id",(req,res)=>{
        var actualPage='/post'
        var queryParams= {title:req.params.id}
        ap.render(req,res,actualPage,queryParams)
    });

    app.get("*",(req,res)=>{
        return handle(req,res)
    });

    // app.get("/login",function(req,res){
    //     res.render("login");
    // });

    // app.get("/signup",function(req,res){
    //     res.render("signup")
    // })

    // app.post("/register",function(req,res){
    //     User.register(new User(
    //     {username:req.body.username}),
    //     req.body.password,
    //         function(err,user){
    //             if(err)
    //             {
    //                 console.log(err);
    //                 res.render("signup");
    //             }
    //         passport.authenticate("local")(req,res,function(){
    //             res.redirect("/login");
    //         });
    //     });
    // });

    // app.post("/login",passport.authenticate("local",{
    //     failureRedirect:"/login"}),
    //     function(req,res){
    //         res.redirect("/users/"+req.user.username);
    //     });

    // app.get("/logout", function(req, res){
    //     req.logout();
    //     userr="";
    //     res.redirect("/");
    // });  

    // function isLoggedIn(req, res, next){
    //     if(req.isAuthenticated()){
    //         return next();
    //     }
    //     res.redirect("/login");
    // }

    //trash
    app.get("*",function(req,res){
        res.render("error");
    });


    //server
    var server = http.createServer(app);
    var port = 3000;
    app.set('port', port);
    server.listen(port,err=>{
        if(err) throw err
        console.log("Server started");
    });
})