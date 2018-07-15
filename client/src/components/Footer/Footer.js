import React from 'react';
import css from './footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div className='row'>
              <div id='footer' className='col-md-12 text-center'>  
                © RStarArtists 2018
              </div>  
            </div>    
        );
    }
};

export default Footer;