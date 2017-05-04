import React,{Component} from 'react';


class WeatherReport extends Component{
    render(){
        var {msg,temp} = this.props;
        return(
                <div>
                   <h3 className ="text-center">it's {temp} degrees fahrenheit in {msg}</h3>
                </div>    
        );
    } 
}

module.exports = WeatherReport;