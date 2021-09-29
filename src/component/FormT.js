import React, { Component } from 'react'
export class FormT extends Component {
    constructor(props) {
        super(props);
        this.state={
            formData:[]
        }
    }   

    handler=(event)=>{
        let{name, value} = event.target;
            this.setState({ [name] : value });
    }

    formSubmit=(event)=>{
        event.preventDefault();
        let { formData, fname, email, password, age, mobile, city, stat, zip, address} = this.state;   
        this.setState({ formData: [...formData, {fname: fname, email: email, password: password, age: age, mobile: mobile, address: address, stat: stat, city: city, zip: zip}] }); 
    }


    render(){
        return(

            <div >
                
                <h1 className="container">Fill this form to proceed...</h1>
                <br/>
                <form onSubmit={this.formSubmit}  className="container">

                    <table>

                        <tr><td><label for="fname">Name: </label></td>
                        <td><input type="text" id="fname" name="fname" className="select" onChange={this.handler}/></td>
                        </tr>
                    
                        <tr><td><label for="email">Email: </label></td>
                        <td><input type="text" id="email" className="select" name="email" onChange={this.handler}/></td>
                        </tr>

                        <tr><td><label for="mobile">Age. : </label></td>
                        <td><input type="number" id="age" className="select" name="age" onChange={this.handler}/></td>
                        </tr>
                        
                        <tr><td><label for="mobile">Mobile no. : </label></td>
                        <td><input type="number" id="mobile" name="mobile" className="select" onChange={this.handler}/></td>
                        </tr>

                        <tr><td><label for="fname">Address: </label></td>
                        <td><textarea  id="address" name="address"  className="select" onChange={this.handler}/></td>
                        </tr>
        

                        <tr><td><label for="age">City: </label></td>
                        <td><input type="text" id="city" name="city"  className="select" onChange={this.handler}/></td>
                        </tr>

                        <tr><td><label for="fname">State: </label></td>
                        <td><input type="text" id="stat" name="stat" className="select" onChange={this.handler}/></td>
                        </tr>

                        <tr><td><label for="fname">Zip: </label></td>
                        <td><input type="number" id="zip" name="zip" className="select" onChange={this.handler}/></td>
                        </tr>

                        <tr><td><label for="password">Password: </label></td>
                        <td><input type="password" id="password" name="password" className="select" onChange={this.handler}/></td>
                        </tr>

                        <tr><td></td>
                        <td><input type="submit" value="submit" className="btn1"/></td>
                        </tr>
                    
                    </table>
                </form>
                <br />
            <div>

                    <h2>Verify your details</h2>
                    <table border='1' id="customers">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Age</td>
                                    <td>Mobile No.</td>
                                    <td>Address</td>
                                    <td>City</td>
                                    <td>State</td>
                                    <td>zip</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.formData.map((item,index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.fname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.age}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>{item.city}</td>
                                            <td>{item.stat}</td>
                                            <td>{item.zip}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
    )
 }
}

export default FormT
