import React,{Component} from 'react';

var{Link} = require('react-router-dom'); 

class Example extends Component{
     render(){
        return(
                   <div>
                      <h1 className ="text-center">Examples</h1>
                      <p>Some Examples to try out</p>
                      <ol>
                          <li>
                              <Link to='/?location=philadelphia'>Philadelphia, PA </Link>
                          </li>
                          <li>
                              <Link to="/?location=Rio">Rio,Brazil</Link>
                          </li>
                      </ol>
                   </div>
         );
     }
}

module.exports = Example;