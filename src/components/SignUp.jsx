import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

    const [input, setInput] = new useState(
        {
            "name": "",
            "phoneno": "",
            "email": "",
            "password": "",
            "confirmpass": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        if (input.password == input.confirmpass) {
            let newInput = {
                "name": input.name,
                "phoneno": input.phoneno,
                "email": input.email,
                "password": input.password
            }
            axios.post("http://localhost:3030/signUp", newInput).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Registered successfully")
                        setInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "confirmpass": ""
                        })//for clearing data
                    } else {
                        alert("Email id already exists")
                        setInput({
                            "name": "",
                            "phone": "",
                            "email": "",
                            "password": "",
                            "confirmpass": ""
                        })
                    }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        } else {
            alert("Password does not match...!")
        }

    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="  col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='confirmpass' value={input.confirmpass} onChange={inputHandler} />
                            </div>
                            <div className="  col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <button className="btn btn-success" onClick={readValue} >Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <a href="/" className="btn btn-primary">Back To Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp