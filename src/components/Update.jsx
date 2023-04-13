
import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readContact, updateContact } from "../db/store";
import { toast } from "react-toastify";

function Update(props) {
    const params = useParams();
    const[fname,setFName] = useState('')
    const[femail,setFEmail] = useState('')
    const[fmobile,setFMobile] = useState('')
    const[fimage,setFImage] = useState('')
    const[faddress,setFAddress] = useState('')

    useEffect(() => {
        let data = readContact(params.id)
        setFName(data.name)
        setFEmail(data.email)
        setFMobile(data.mobile)
        setFImage(data.image)
        setFAddress(data.address)
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            let data = {
                name:fname,
                email:femail,
                mobile:fmobile,
                image:fimage,
                address:faddress
            };
            console.log('upload data =', data)
            updateContact(params.id,data)
        } catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">update{params.id}</h3>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={fname} onChange={(e) => setFName(e.target.value )} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"  value={femail} onChange={(e) => setFEmail(e.target.value )}className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile"  value={fmobile} onChange={(e) => setFMobile(e.target.value )}id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                <label htmlFor="image">Image</label>
                                    <input type="url" name="image"  value={fimage} onChange={(e) => setFImage(e.target.value )}id="image" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                <label htmlFor="address">Address</label>
                                    <textarea name="address" id="address"  value={faddress} onChange={(e) => setFAddress(e.target.value )}cols="30" rows="5" className="form-control" required
                                    ></textarea>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="update" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update;