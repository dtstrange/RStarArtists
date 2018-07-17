import React from 'react';
import { ReactDOM, Link } from 'react-router-dom';
import fillerImage from './assets/images/Image-Coming-Soon-Placeholder.png';
import css from './productItem.css'

class ProductItem extends React.Component {

    const 

    render() {
        return (
            <div id="fetechedProducts">
                {this.props.data.map((product) => {
                    return <div >
                        <div className='row'>
                            <div className='col-md-3 prodImg'>
                                {/* <img src={prodImage + product.catalogNumber + '/thumb/1.jpg'} alt={product.name} height="200" width="200"></img> */}
                            </div>
                            <div className='col-md-8'>
                                <Link to={'/products/' + product.catalogNumber} activeClassName="active">
                                <div className='row'>
                                    <div className="div-md-6">
                                        <h3 className="catNum">{product.catalogNumber}</h3>
                                    </div>
                                    <div className="div-md-6">
                                        <h3 className="name">{product.name}</h3>
                                    </div>    
                                </div>    
                                </Link>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <h1 className="category">{product.category}</h1>
                                </div>
                                <div className='col-md-4'>
                                    <h1 className="size">{product.size}</h1>
                                </div>
                                <div className='col-md-4'>
                                    <h1 className="price">${product.price}</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default ProductItem;