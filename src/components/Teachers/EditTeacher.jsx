import React, { useContext, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import AppContext from '../AppContext';

function EditTeacher() {
  const params=useParams();
  const navigate=useNavigate();
  const {
        teachername,setTeachername,
        contact,setContact,
        subject,setSubject,
        salary,setSalary,
        errormsg,setErrormsg
        } = useContext(AppContext)

    useEffect(()=>{
      getTeacherDetails(params)
    },[]);
  
    //Get that particular teacher using params ID
    const getTeacherDetails =(params) =>{
      fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Teachers/${params.id}`,{
        method:"GET"
      })
      .then((data)=>data.json())  
      .then(setTeachername(''),setContact(''),setSubject(''),setSalary(''))
      .then((slist)=> ((setTeachername(slist.teachername)),
                      (setContact(slist.contact)),(setSalary(slist.salary)),(setSubject(slist.subject)) 
                      ));
        };  

        const handleUpdate =(event) =>{
          event.preventDefault();
          if(teachername!=''&&contact!=''&&subject!=''&&salary!='')
          {
            setErrormsg('')
            UpdateTeacher({teachername,contact,subject,salary}) 
            
          }else{
            setErrormsg("Please fill all the fields above")
          }
          
        }
      
        //To update that particular teacher details
        const UpdateTeacher =(details)=>{
          fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Teachers/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(details),
            headers: {
              "Content-Type": "application/json",
            },
          })   
          .then(() => navigate("/Teacher/ViewTeachers"))
        }
      
  return (
    <>
    <section className="h-100 gradBG" >
            <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
            <div className="card card-registration my-4">
            <div className="row g-0">
            <div className="col-xl-12">
            <Form onSubmit={handleUpdate}>
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Update Teacher</h3>

                <div className='row'>
                  <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                    Teacher Name
                  </div>
                  <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg" 
                    value={teachername}                
                    onChange={(event) => setTeachername(event.target.value) }/>
                    </div>
                  </div>
                </div>  

                  <div className='row'>
                    <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                      Contact
                    </div>
                    <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                      <input type="number" className="form-control form-control-lg" 
                      value={contact}
                      onChange={(event) => setContact(event.target.value) }/>
                    </div>
                    </div>
                  </div> 

                  <div className='row'>
                    <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                      Subject
                    </div>
                    <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control form-control-lg" 
                      value={subject}
                      onChange={(event) => setSubject(event.target.value) }/>
                    </div>
                    </div>
                  </div> 

                  <div className='row'>
                    <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                      Salary
                    </div>
                    <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control form-control-lg" 
                      value={salary}
                      onChange={(event) => setSalary(event.target.value) }/>
                    </div>
                    </div>
                  </div> 
 
   
                <div>
                 <p style={{ color: "red" }}>{errormsg}</p>
                </div> 

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg"
                  onClick={() => {
                    navigate('/Teacher/ViewTeachers')
                    }}>
                  Cancel</button>
                  <button type="Submit" className="btn btn-primary btn-lg ms-2">Update Teacher</button>
                </div>

              </div>
              </Form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </section>
    </>
  )
}

export default EditTeacher