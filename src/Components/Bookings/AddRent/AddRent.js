import React, { useState } from 'react';

const AddRent = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('location', info.location);
        formData.append('bathroom', info.bathroom);
        formData.append('price', info.price);
        formData.append('bedroom', info.bedroom);

        fetch('https://powerful-fjord-39182.herokuapp.com/addRentHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Service Added successfully!');
             
            })
            .catch(error => {
                console.error(error);
                alert('Fill all fields properly.');
            })
        e.preventDefault();
        e.target.reset();
        }

    return (
        <section id="order" className="p-4">
            <h3>Add Service</h3><br />
            <div className="container">                
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-8 col-lg-6">   
                            <label ><b>Service Title</b></label>               
                            <input  type="text" onBlur={handleBlur} name="title" placeholder="Enter title" className="form-control " required />  <br />
                            <label ><b>Location</b></label>                 
                            <input type="text" onBlur={handleBlur} name="location" placeholder="Enter Location" className="form-control" required /> <br />
                            <label ><b>No. of Bedrooms</b></label>                 
                            <input type="text" onBlur={handleBlur} name="bedroom" placeholder="Enter Bedrooms" className="form-control" required />                          
                        </div>
                        <div className="col-md-4 col-lg-6">         

                            <label ><b>Price</b></label>               
                            <input  type="text" onBlur={handleBlur} name="price" placeholder="Enter Price" className="form-control" required />  <br />
                            <label ><b>No. of Bathrooms</b></label>               
                            <input  type="text" onBlur={handleBlur} name="bathroom" placeholder="Enter Bathrooms" className="form-control" required /> <br />                                                      
                            <div className="col-6 my-1">
                                <label><b>Thumbnail</b></label>
                                <input type="file" onChange={handleFileChange} name="photo" />
                            </div> <br />                                                    
                                              
                        </div>
                    </div> 
                     <br/>
                    <input type="submit" className="btn btn-success ml-3 px-4" value="Submit"/>                          
                </form>                        
            </div> 
        </section>
    );
};

export default AddRent;