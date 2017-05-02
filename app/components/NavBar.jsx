var React = require('react');
var{Link} = require('react-router-dom');

var NavBar = React.createClass({
    render(){
        return(
            <div>
               <h2>NavBar Component</h2>
                <Link to ='/' activeClassName = "active" activeStyle = {{fontWeight:'bold'}}>Get Weather</Link>
                <Link to ='/about' activeClassName= "active" activeStyle ={{fontWeight:'bold'}}>About</Link>
                <Link to='/Example' activeClassName = "active" activeStyle ={{fontWeight:'bold'}}>Example</Link>
            </div>    
        );
    }
});
                
module.exports = NavBar;                