import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


const ViewEmployeeComponent = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
    });

    const populateEmployeeFields = async() => {
        const url = window.location.href;
        const employeeId = url.split("http://localhost:3000/view-employee/").pop();
      

        const employeeData = await EmployeeService.getEmployeeById(employeeId).then(r => r.data);
        console.log(employeeData);
        setState({
            ...employeeData
        })
    }
    
    useEffect(() => {
        populateEmployeeFields();
    },[]);

    return (
        <div>
        <br></br>
        <div className = "card col-md-6 offset-md-3">
            <h3 className = "text-center"> View Employee Details</h3>
            <div className = "card-body">
                <div className = "row">
                    <label> Employee First Name: </label>
                    <div> { state.firstName }</div>
                </div>
                <div className = "row">
                    <label> Employee Last Name: </label>
                    <div> { state.lastName }</div>
                </div>
                <div className = "row">
                    <label> Employee Email ID: </label>
                    <div> { state.emailId }</div>
                </div>
            </div>

        </div>
    </div>
    );

}

export default ViewEmployeeComponent;