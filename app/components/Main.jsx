var React = require('react');
var NavBar = require('NavBar');


var Main = React.createClass({
    render(){
        return(
            <div>
                <NavBar />    
                 <div className = "row">  
                     <div className = "columns small-centered medium-6 large-4">
                        {this.props.children}
                     </div>   
                 </div>     
            </div>    
        ); 
    }
});
                
module.exports = Main;                