import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { loginSuccess } from '../redux/action';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:4000/login`, {
            email, password
        })
            .then((result) => {
                if (result.status === 200) {
                    dispatch(loginSuccess(result.data.data))
                    navigate('/dashboard')
                }
                else {
                    // handle unexpected response structure
                    console.log('unexpected response structure:', result)
                }
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.err
                })
            })
    }


    return (
        <div className='container login-container'>
            <div className="row">

                <div className="col-md col-sm- col-lg d-flex align-items-center justify-content-center">
                    <div className="card shadow text-align-center mt-5">

                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <input
                                    type="email"
                                    className="p-2 mt-3 mb-2 form-control "
                                    placeholder='username or email'
                                    value={email}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    className="p-2 mb-2 form-control "
                                    placeholder='password'
                                    value={password}
                                    onChange={(ev) => setPassword(ev.target.value)}
                                    required
                                />
                                <div className='mt-3 d-grid'>
                                    <button type='submit' className="btn btn-primary">Log In</button>
                                </div>
                                <div className='my-4'>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted' />
                                </div>
                                <div className='mt-3 mb-5 d-grid '>
                                    <button className="btn btn-primary">
                                        <span className='text fs-6'>Don't have an account?</span>
                                        <Link to="/signup" className='ms-1 text-info fw-bold'>sign up</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login