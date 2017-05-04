import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ErrorModal extends Component{
 componentDidMount(){
     let modal = new Foundation.Reveal($('#modalError'));
      modal.open();
 }
 render(){
     var {Error,message} = this.props;
     return(
             <div className ="reveal tiny text-center" id="modalError" data-reveal ="">
                        <h4>{Error}</h4>
                   <p className = "lead">{message}, check <Link to = '/Example' data-close =""><br /> The Examples Page!</Link></p>
                     <p>
                        <button className ="button hollow" aria-label ='Close modal' data-close ="">
                             Okay
                        </button>
                   </p>
             </div> 
     );
 }
}


ErrorModal.propTypes ={
Error: PropTypes.string.isRequired,
message:PropTypes.string.isRequired
};
ErrorModal.getDefaultProps ={Error};

module.exports = ErrorModal;