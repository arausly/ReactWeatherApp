import React,{Component} from 'react';
import {Link} from 'react-router-dom';

  class ErrorModal extends Component{
     componentDidMount(){
         let modal = new Foundation.Reveal($('#modalError'));
          modal.open();
     }
     render(){
         return(
                 <div className ="reveal tiny text-center" id= "modalError" data-reveal ="">
                       <p className = "lead">Location not found, check <Link to = '/Example' data-close =""><br /> The Examples Page!</Link></p>
                         <p>
                            <button className ="button hollow"  aria-label ='Close modal' data-close ="">
                                 Okay
                            </button>
                       </p>
                 </div> 
         );
     }
}

module.exports = ErrorModal;