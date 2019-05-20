const request=require('request');

const url='https://api.darksky.net/forecast/1d2c0ed3bf7c79f5c7d1dd373f7cd995/37.8267,-122.4233?lang=fr';

request({url:url,json:true},(error,response)=>{
        if(error){
                console.log(error)
        }
        else{
console.log(response.body.daily.data[0].summary+' it is currently'+' degress out. there is  a '+ response.body.currently.precipProbability+' % chance of  rain');}


})


const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic21zNzE4MiIsImEiOiJjanZzNGRpN2wwYzdyNDBsOXNuazZtejhhIn0.8maufq84IXJV_52uRPwOIQ';
request({url:geocodeURL,json:true},(error,response)=>{
        const latitude=response.body.features[0].center[0];
        const longitude=response.body.features[0].center[1];
        console.log(latitude,longitude);
});