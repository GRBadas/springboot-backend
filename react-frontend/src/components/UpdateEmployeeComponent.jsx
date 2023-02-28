import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const populateEmployeeFields = async() => {
        const url = window.location.href;
        const employeeId = url.split("http://localhost:3000/update-employee/").pop();
      

        const employeeData = await EmployeeService.getEmployeeById(employeeId).then(r => r.data);
        console.log(employeeData);
        setState({
            ...employeeData
        })
    }
    
    useEffect(() => {
        populateEmployeeFields();
    },[]);

    const updateEmployee = async (event) => {
        const url = window.location.href;
        const employeeId = url.split("http://localhost:3000/update-employee/").pop();
  
        event.preventDefault();
        const employee = {
            firstName: state.firstName,
            lastName: state.lastName,
            emailId: state.emailId,
        };

        
        console.log(employeeId);
        console.log('employee =>' + JSON.stringify(employee));

        await EmployeeService.updateEmployeeId(state)
        navigate(`/employees`); 
            
                
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
                    <h3 className='text-center'> Update Employee </h3>
                    <div className='card-body'>
                        <form action=''>
                            <div className='form-group'>
                                <label> First Name </label>
                                <input
                                    name='firstName'
                                    className='form-control'
                                    value={state.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label> Last Name </label>
                                <input
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
                            <button className='btn btn-success' onClick={updateEmployee}>
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

export default UpdateEmployeeComponent;