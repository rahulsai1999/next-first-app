var app=require("express")();
var next=require("next");
var logger = require('morgan');
var mongoose=require("mongoose");
var passport=require("passport");
var bodyParser = require('body-parser');
var localStrategy=require("passport-local");
var passportLocalMongoose=require("passport-local-mongoose");
var http=require("http");
var dev = process.env.NODE_ENV !== 'production'
var ap = next({ dev })
var handle = ap.getRequestHandler()
mongoose.connect("mongodb://admin:admin83@ds151012.mlab.com:51012/revcentral");
var User=require("./models/User");

app.use(logger('dev'));
app.use(require("express-session")({
    secret:'nextjs',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));

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

    app.get("/trans",(req,res)=>{
        ap.render(req,res,'/transition')
    })

    app.get("/protected",isLoggedIn,(req,res)=>{
        var actualPage='/prot'
        ap.render(req,res,actualPage)
    });

    app.get("/login",function(req,res){
        ap.render(req,res,'/login');
    });

    app.get("/signup",function(req,res){
        ap.render(req,res,'/register');
    })

    app.post("/register",function(req,res){
        User.register(new User(
        {username:req.body.username}),
        req.body.password,
            function(err,user){
                if(err)
                {
                    console.log(err);
                    res.redirect("/signup");
                }
            passport.authenticate("local")(req,res,function(){
                res.redirect("/login");
            });
        });
    });

    app.post("/login",passport.authenticate("local",{
        failureRedirect:"/login"}),
        function(req,res){
            res.redirect('/protected');
        });

    app.get("/logout", function(req, res){
        req.logout();
        res.redirect("/");
    });  

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }

    app.get("*",(req,res)=>{
        return handle(req,res)
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