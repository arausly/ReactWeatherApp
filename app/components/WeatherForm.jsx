var React  = require('react');
var ReactDOM = require('react-dom');

var WeatherForm  = React.createClass({
     onSubmitForm(e){
         e.preventDefault();
         var weatherMsg = this.refs.input.value;
         if(weatherMsg.length > 0){
            this.refs.input.value = ' ';
              this.props.onSearch(weatherMsg);
         }

     },
    
    render(){
        return(
                  <div>
                    <form>U
                     <input type = "text" placeholder = "Enter city name" ref="input" />    
                        <button onClick = {this.onSubmitForm}>
                          Get Weather
                        </button>    
                    </form>
                  </div>        
        );
    }
}); 

module.exports = WeatherForm;