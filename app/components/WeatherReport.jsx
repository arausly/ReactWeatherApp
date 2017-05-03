var React  = require('react');

var WeatherReport = React.createClass({
    render(){
        var {msg,temp} = this.props;
        return(
                <div>
                   <h3 className ="text-center">it's {temp} degrees fahrenheit in {msg}</h3>
                </div>    
        );
    } 
});

module.exports = WeatherReport;