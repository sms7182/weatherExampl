const request=require('request');
const geocode=require('./geocode');
const forecast=require('./forecast');


let location=process.argv[2];
if(!location){
  return console.log('please enter address');
}
if(location){
geocode(location,(error,data)=>{
  if(error){
    return console.log('Error',error);
  }


  forecast(data.latitude,data.longitude,(error,forecastData)=>{
   if(error){
     console.log('Error',error);
   }
    console.log(data.location);
   console.log(forecastData);
  });
})}



