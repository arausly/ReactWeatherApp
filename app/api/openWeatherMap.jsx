 var axios = require('axios');

 const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0c4f2ff6a69fb76a65872f377141b9d9&units=imperial';
       
       
module.exports = {
    getTemp : function(location){
        var encodeRequest = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeRequest}`;
        
      return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                return (res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function(res){
            return (res.data.message); 
        });
    },
};