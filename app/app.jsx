var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter ,Route} = require('react-router-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

ReactDOM.render(
<HashRouter>
      <Main>  
          <Route exact={true} path = '/' component = {Weather} />
          <Route path = '/about' component = {About} />
          <Route  path ='/Example' component = {Example} />
    </Main>      
</HashRouter>, 
document.getElementById('main'));