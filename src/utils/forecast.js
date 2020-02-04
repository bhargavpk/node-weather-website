const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const URL='https://api.darksky.net/forecast/e8b9fe19e15da6470076532218176552/'+String(longitude)+','+String(latitude);
    request({
        url:URL,
        json:true
    },(error,response_data)=>{
        if(error)
            callback('Connection lost. Try again',undefined);
        else if(response_data.body.error)
            callback('Invalid geocode parameters!',undefined);
        else
            callback(undefined,response_data.body);
    });
};
module.exports=forecast;