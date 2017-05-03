var React = require('react');
var WeatherForm = require('WeatherForm'); 
var WeatherReport = require('WeatherReport');
var openWeatherMap = require('openWeatherMap'); 

var Weather = React.createClass({    
    getInitialState(){
         return{
           isLoading:false,
         }
    },
   handleUpdate(weatherMsg){
       this.setState({isLoading:true});
       var getThis = this;
       openWeatherMap.getTemp(weatherMsg).then(function(temp){
            getThis.setState({
               msg:weatherMsg,
               temp:temp,
               isLoading:false
           });
       },
        function(errorMsg){
         getThis.setState({isLoading:false});
           alert(errorMsg);
   
       });
           
        
       /*this.setState({
       msg:weatherMsg,s
       temp:7,
   });*/
 },
 render(){
     var {isLoading,temp, msg} = this.state;
      function renderMessage(){
            if(isLoading){
              return <h3 className ="text-center">Fetching Data...</h3>;
          }else if(temp && msg){
              return <WeatherReport msg = {msg}  temp = {temp} />;
          }
      }
     return(
               <div>
                  <h1 className="text-center">Get Weather</h1>
                    <WeatherForm onSearch ={this.handleUpdate} />
                     {renderMessage()}
               </div>
     );
 }  
});


module.exports = Weather;