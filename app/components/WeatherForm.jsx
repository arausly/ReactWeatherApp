import React,{Component} from 'react';
var ReactDOM = require('react-dom');

class WeatherForm extends Component{
     onSubmitForm = (e) =>{
         e.preventDefault();
         var weatherMsg = this.refs.input.value;
         if(weatherMsg.length > 0){
            this.refs.input.value = ' ';
              this.props.onSearch(weatherMsg);
         }

     }
    
    render(){
        return(
                  <div>
                    <form onSubmit ={this.onSubmitForm}>
                     <input type = "search" placeholder="Search your city's weather" ref="input" />    
                        <button className="button medium-6 large-4 expanded">
                          Get Weather
                        </button>    
                    </form>
                  </div>        
        );
    }
} 

module.exports = WeatherForm;