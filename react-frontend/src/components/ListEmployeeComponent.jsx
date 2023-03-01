import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  function editEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function addEmployee() {
    navigate('/add-employee');
  }

  async function deleteEmployee(employeeId) {
    await EmployeeService.deleteEmployee(employeeId)
      .then(response => {
        console.log(`Employee with ID ${employeeId} has been deleted successfully.`);
        setEmployees(employees.filter(employee => employee.id !== employeeId));
      })
      .catch(error => {
        console.log(`Error deleting employee with ID ${employeeId}: ${error.message}`);
        
      });
      window.location.reload()
  }

  return (
    <div>
      <h2 className='text-center'>Employees List</h2>
      <div className='row'>
        <button className='btn btn-primary' onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th> Employee First Name</th>
              <th> Employee Last Name</th>
              <th> Employee Email Id </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td> {employee.firstName} </td>
                <td> {employee.lastName} </td>
                <td> {employee.emailId} </td>
                <td>
                  <button onClick={() => editEmployee(employee.id)} className="btn btn-info">
                    Update
                  </button>
                  <button style={{marginLeft: "10px"}} onClick={() => deleteEmployee(employee)} className='btn btn-danger'> Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;