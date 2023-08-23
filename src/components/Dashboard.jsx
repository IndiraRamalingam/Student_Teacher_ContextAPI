import React, { useContext, useEffect } from 'react'
import AppContext from './AppContext'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate=useNavigate();
  const{studNum,teachNum,getStudentsNum,getTeachersNum}=useContext(AppContext);
 
  console.log(studNum,teachNum)
  useEffect(()=>{
    getStudentsNum()
    getTeachersNum()
  },[])
  return (
    <>
     
      {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    <div className="card-body p-md-4">
                      <h3 className="mb-4 text-uppercase" style={{color:"#4e73df",'fontWeight':'bolder','textAlign':'center'}}>DASHBOARD</h3>
                    </div>

                  <div className="row">
                    <div className="col-sm-6 mb-4" >
                      <div className="card border-primary text-center">
                      <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_VUGhJCT9KO5o4RwRZp0BL5zMvVV-GyciA&usqp=CAU" alt="Student" height={'170vh'}/>
                        <div className="card-body text-primary">
                          <h5 className="card-title  fw-bold fs-3">Students</h5>
                          <p className="card-text">Total number Of Students : {studNum}</p>
                          <button className='btn btn-primary ' onClick={()=>{
                          navigate(`/Student/ViewStudents`)
                        }}>
                          View Students
                        </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mb-4">
                      <div className="card border-primary text-center">
                      <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaM0IK2clbN4H9OgndVugguoATF8CwGh4aXQ&usqp=CAU" alt="Teacher" height={'170vh'}/>
                      
                        <div className="card-body text-primary">
                          <h5 className="card-title fw-bold fs-3">Teachers</h5>
                          <p className="card-text">Total number Of Students : {teachNum}</p>
                          <button className='btn btn-primary' onClick={()=>{
                          navigate(`/Teacher/ViewTeachers`)
                        }}>
                          View Teachers
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
        
                           
     </div>
    </>
  )
}

export default Dashboard