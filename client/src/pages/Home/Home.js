import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';
import css from './home.css';



class Home extends React.Component{
    render(){
        return(
            <div className="col-md-7 mx-auto">
                <Slideshow/>
            </div>
        )
    }
}

export default Home;