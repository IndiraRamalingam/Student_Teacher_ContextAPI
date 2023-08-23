import React, { useContext, useEffect } from 'react'
import { Table,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import AppContext from '../AppContext';

function ViewTeacher() {

  const{teach,getTeachers} =useContext(AppContext)

  useEffect(()=>{
    getTeachers();
  },[]);

  //To delete Student by ID
  const handleDeleteTeacher =(id)=>{
    window.confirm(`Are you sure want to delete this Teacher with ID ${id}`)
    fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Teachers/${id}`,{
      method:"DELETE"
    })
    .then(()=>getTeachers())
  };

  return (
    <>
      <div className=''>
      <div className="card-body p-md-4 text-black">
                <h3 className="mb-1 text-uppercase" style={{color:"#4e73df",'fontWeight':'bolder','textAlign':'center'}}>Teachers List</h3>
              </div>     
                <div className="table-responsive text-nowrap">
                    <Table className='table table-bordered table-hover' >
                        <thead align='middle' className='bg-primary' style={{color:'white'}}>
                          <tr >
                            <th>#</th>
                            <th >Name</th>
                            <th>Contact</th>
                            <th>Subject</th>
                            <th>Salary</th>
                            <th>Action</th>
                          </tr>
                        </thead> 
                        {teach.map((s,i) =>{ 
                            return(  
                                <tbody key={s.id}  align='middle'>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{s.teachername}</td>
                                    <td>{s.contact}</td>
                                    <td>{s.subject}</td>
                                    <td>{s.salary}</td>
                                    <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Action
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item
                                            as={Link}
                                            to={`/Teacher/EditTeacher/${s.id}`}
                                        >
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => {
                                                handleDeleteTeacher(s.id);
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

export default ViewTeacher