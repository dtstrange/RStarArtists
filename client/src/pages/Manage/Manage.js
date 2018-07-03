import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Manage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            catalogNumber:'',
            name:'',
            category:'',
            size:'',
            price:'',
            description:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmit(event){
        event.preventDefault();
        const loginToken = window.localStorage.getItem("token");
        // let data = new FormData();
        // data.append("images.img1", document.getElementById("img1").files[0])
        // data.append("image2", document.getElementById("img2").files[0])
        // data.append("image3", document.getElementById("img3").files[0])
        // data.append("thumb1", document.getElementById("thumb1").files[0])
        // data.append("thumb2", document.getElementById("thumb2").files[0])
        // data.append("thumb3", document.getElementById("thumb3").files[0])

        axios({
            headers: { "Authorization": "Bearer " + loginToken},
            method: 'post',
            url: '/api/inventory/create',
            data:{
                catalogNumber:this.state.catalogNumber,
                name:this.state.name,
                category:this.state.category,
                size:this.state.size,
                price:this.state.price,
                description:this.state.description,
                
            }
        })
        .then(function(data){
            console.log(data);
            window.location.reload();
        })
        .catch(function(error){
            console.error(error)
        });

    };

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            Catalog Number:
                            <input name="catalogNumber" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Name:
                            <input name="name" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Category:
                            <input name="category" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Size:
                            <input name="size" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Price:
                            <input name="price" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        <label>
                            Description:
                            <input name="description" type="text" value={this.state.value} onChange={this.handleChange}/>
                        </label>
                        {/* <label>
                            Image 1:
                            <input name="image1" type="file" id="img1" accept=".jpg" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Image 2:
                            <input name="image2" type="file" id="img2" accept=".jpg" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Image 3:
                            <input name="image3" type="file" id="img3" accept=".jpg" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Thumbnail 1:
                            <input name="thumb1" type="file" id="thumb1"  accept=".jpg" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Thumbnail 2:
                            <input name="thumb2" type="file" id="thumb2" accept=".jpg" onChange={this.handleChange}/>
                        </label>
                        <label>
                            Thumbnail 3:
                            <input name="thumb3" type="file" id="thumb3" accept=".jpg" onChange={this.handleChange}/>
                        </label> */}
                        <input type="submit" value="Submit" />    
                        </form>
                    </div>
                </div>    
            </div>    
        )
    }
}

export default Manage;