const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app =express();
const publicPath=path.join(__dirname,'../Public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');
//Getting forecast and geocode coordinate function
const forecast=require('./utils/forecast');
const geocode=require('./utils/geocode');

//Port for heroku to use
const port=process.env.PORT || 3000;

app.set('view engine','hbs'); //Tells express which templating engine to use
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        author:'Bhargav PK'
    });
});

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        author:'Bhargav PK'
    });
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return(res.send({error:'Address query not provided.'}));
    }
    // res.send({
    //     location:req.query.address,
    //     forecast:'Clear throughout the day'
    // });
    geocode(req.query.address,callback=(error,data)=>{
        forecast(data.latitude,data.longitude,getForecast=(errMessage,placeObj)=>{
            res.send({
                location:req.query.address,
                forecast:placeObj.daily.data[1].summary,
                precipProb:placeObj.daily.data[1].precipProbability
            });
        });
    })
})
app.get('/help/*',(req,res)=>{
    //Render required file to take appropriate action
});
app.get('/*',(req,res)=>{
    res.render('error',{
        title: 'Error: route not valid',
        author: 'Bhargav'
    })
})
app.listen(port,()=>{
    console.log('Server running on port '+port);
})