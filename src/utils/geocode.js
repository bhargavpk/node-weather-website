const request=require('request');
const geocode=(placeName,callback)=>{
request({
    url:'https://api.mapbox.com/geocoding/v5/mapbox.places/'+placeName+'.json?access_token=pk.eyJ1IjoiYmhhcmdhdnBrMTk5IiwiYSI6ImNrNXBnN3JtODA3Z3gzaHBhODBrdDhnd20ifQ.l8tVfGje1Up0QZe3vGdyeQ&limit=1',
    json:true
},(error,response)=>{
    if(error)
    callback('Unable to connect.',undefined);
    else if(response.body.message)
    callback('Invalid token',undefined);
    else if(response.body.error)
    callback('Unable to parse information',undefined);
    else{
        callback(undefined,{
        latitude:response.body.features[0].center[0],
        longitude:response.body.features[0].center[1]
        });
    }
}
)};
module.exports=geocode;