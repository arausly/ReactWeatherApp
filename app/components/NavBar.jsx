
var {Link} = require('react-router-dom');
import React,{Component} from 'react';
import QueryString from 'query-string';
import PropTypes from 'prop-types';

 class NavBar extends Component{
     
     onSearch = (e) => {
        e.preventDefault();
        let location = this.refs.location.value;
        let encodeLocation = encodeURIComponent(location);
          if(location.length > 0){
             this.refs.location.value = '';
             window.location.hash =`#/?location=${encodeLocation}`;
             
          } 
        }      
    render(){
        return(
            <div className = "top-bar">
                <div className = "top-bar-left">
                    <ul className = "menu">
                        <li className = "menu-text">Weather App</li>
                        <li> <Link to ='/'>Get Weather</Link></li>
                        <li><Link to ='/about'>About</Link></li>
                        <li> <Link to='/Example'>Example</Link></li>
                    </ul>    
                </div>
                <div className = "top-bar-right">
                    <form onSubmit = {this.onSearch}>
                     <ul className = "menu">    
                        <li>
                           <input type ="search" placeholder = "Search your city's weather" ref = "location" />
                        </li>
                        <li>
                           <input type = "submit" className = "button" value = "Get Weather" />    
                         </li> 
                     </ul>     
                    </form>   
                </div>    
            </div>    
        );
    } 
}

module.exports = NavBar;        


