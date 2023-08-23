import React, { useContext, useEffect } from 'react'
import { Table,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import AppContext from '../AppContext';

function ViewStudent() {

  const{studentList,getStudents} =useContext(AppContext)

  useEffect(()=>{
    getStudents();
  },[]);

  //To delete Student by ID
  const handleDeleteStudent =(id)=>{
    window.confirm(`Are you sure want to delete this Student with ID ${id}`)
    fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Students/${id}`,{
      method:"DELETE"
    })
    .then(()=>getStudents())
  };

  return (
    <>
      <div className=''>
      <div className="card-body p-md-4 text-black">
                <h3 className="mb-1 text-uppercase" style={{color:"#4e73df",'fontWeight':'bolder','textAlign':'center'}}>Students List</h3>
              </div>     
                <div className="table-responsive text-nowrap">
                    <Table className='table table-bordered table-hover' >
                        <thead align='middle' className='bg-primary' style={{color:'white'}}>
                          <tr >
                            <th>#</th>
                            <th >Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Section</th>
                            <th>Teacher</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {studentList.map((s,i) =>{ 
                            return(  
                                <tbody key={s.id}  align='middle'>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{s.name}</td>
                                    <td>{s.age}</td>
                                    <td>{s.address}</td>
                                    <td>{s.contact}</td>
                                    <td>{s.section}</td>
                                    <td>{s.teachername}</td>
                                    <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item
                                            as={Link}
                                            to={`/Student/EditStudent/${s.id}`}
                                        >
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                handleDeleteStudent(s.id);
                                            }}
                                        >
                                            Delete 
                                        </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                </tr>
                                </tbody>
                              );    
                            })}
                        </Table>
                        </div>
        
      </div>
    </>
  )
}

export default ViewStudent