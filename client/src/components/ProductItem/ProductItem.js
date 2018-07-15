import React from 'react';
import {ReactDOM, Link} from 'react-router-dom';
// import prodImage from './assets/images/';

class ProductItem extends React.Component{

    render(){
        return(
            <div id="fetechedProducts">
                {this.props.data.map((product)=>{
                    return <div >
                        {/* <img src={prodImage + product.catalogNumber + '/thumb/1.jpg'} alt={product.name} height="200" width="200"></img> */}
                        <Link to={'/products/' + product.catalogNumber} activeClassName="active">
                            <h1 className="catNum">{product.catalogNumber}</h1>
                            <h1 className="name">{product.name}</h1>
                        </Link>
                        <h1 className="category">{product.category}</h1>
                        <p>{product.description}</p>
                        <h1 className="size">{product.size}</h1>
                        <h1 className="price">${product.price}</h1>

                    </div>
                })}
            </div>    
        )
    }
}

export default ProductItem;