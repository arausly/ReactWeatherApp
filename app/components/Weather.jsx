import React,{Component} from 'react';
var WeatherForm = require('WeatherForm'); 
var WeatherReport = require('WeatherReport');
var openWeatherMap = require('openWeatherMap'); 
var ErrorModal = require('errorModal');
var queryString = require('query-string');
var PropTypes = require('prop-types');

class Weather extends Component{    
 constructor(props){
     super(props);
     this.state = { 
         isLoading:false,
     }
     this.handleUpdate = this.handleUpdate.bind(this);
 }
   handleUpdate(weatherMsg){
         this.setState({
           isLoading:true,
         });

            var getThis = this;
       openWeatherMap.getTemp(weatherMsg).then(function(temp){
            getThis.setState({
               msg:weatherMsg,
               temp:temp,
               isLoading:false      
           });
       },
        function(e){
         getThis.setState({
             isLoading:false,
             errorMessage:e.message
             });
       });
       /*this.setState({
       msg:weatherMsg,
       temp:7,
   });*/
 }
componentDidMount(){
 
 let location = queryString.parse(this.props.location.search);
 let local_val = location.location;
    if(local_val != null){
        this.handleUpdate(local_val);
        window.location.hash ='#/'
    }
}
    
componentWillReceiveProps(newProps){
    let location = queryString.parse(this.props.location.search);
 let local_val = location.location;
    if(local_val != null){
        this.handleUpdate(local_val);
        window.location.hash ='#/'
    }
}
 render(){
     var {isLoading,temp, msg,errorMessage} = this.state;
      function renderMessage(){
            if(isLoading){
              return <h3 className ="text-center">Fetching Data...</h3>;
          }else if(temp && msg){
              return <WeatherReport msg = {msg}  temp = {temp} />;
          }
      }
     
     function renderError(){
          if(typeof errorMessage === 'string'){
              return (<ErrorModal message = {errorMessage} />);
          }
     }
     return(
               <div>
                  <h1 className="text-center page-header">Get Weather</h1>
                    <WeatherForm onSearch ={this.handleUpdate} />
                     {renderMessage()}
                     {renderError()}
               </div>
     );
 }  
}

module.exports = Weather;