import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {
            firstName: state.firstName,
            lastName: state.lastName,
            emailId: state.emailId,
        };
        console.log('employee =>' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            navigate('/employees');
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const cancel = () => {
        navigate('/employees');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'> Add Employee </h3>
                    <div className='card-body'>
                        <form action=''>
                            <div className='form-group'>
                                <label> First Name </label>
                                <input
                                    placeholder='First Name'
                                    name='firstName'
                                    className='form-control'
                                    value={state.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label> Last Name </label>
                                <input
                                    placeholder='Last Name'
                                    name='lastName'
                                    className='form-control'
                                    value={state.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label> Email </label>
                                <input
                                    placeholder='Email'
                                    name='emailId'
                                    className='form-control'
                                    value={state.emailId}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>
                                Save
                            </button>
                            <button
                                className='btn btn-danger'
                                onClick={cancel}
                                style={{ marginLeft: '10px' }}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;