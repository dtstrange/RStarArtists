import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductItem from '../../components/ProductItem/ProductItem';
import fillerPic from "./assets/images/Image-Coming-Soon-Placeholder.png"

class Products extends React.Component{
    
    constructor(props){
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.state={
            fetechedProducts: [],
            name:'',
            catalogNumber:'',
            category:'',
            size:'',
            price:'',
            description:''
        }
    }

    

    componentDidMount(){
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad = () =>{
        axios({
            method:"GET",
            url:'/api/fetch'
            })
        .then((resp)=>{
            console.log(resp.data)
            this.setState({
                fetechedProducts: resp.data
            })
            }
        )
        .catch((error)=>{
            console.error(error)
        })
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                {(this.state.fetechedProducts[0])? <ProductItem data={this.state.fetechedProducts}/> :""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default Products;