import React, { useContext, useEffect } from 'react'
import AppContext from '../AppContext'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const navigate=useNavigate();
  const {
        name,setName,
        age,setAge,
        address,setAddress,
        contact,setContact,
        section,setSection,
        teach,
        teachername,setTeachername,
        errormsg,setErrormsg,getTeachers
        } = useContext(AppContext)
  
  
  useEffect(()=>{
    getTeachers();
  },[]);

  const handleCreate =(event) =>{
    event.preventDefault();
    if(name!=''&&age!=''&&address!=''&&contact!=''&&section!=''&&teachername!='')
    {
      setErrormsg('')
      CreateStudent({name,age,address,contact,section,teachername});
      
    }else{
      setErrormsg("Please fill all the fields above")
    }
    
  }

  //To add new Student
  const CreateStudent =(details)=>{
    fetch("https://64e32cc9bac46e480e7852ab.mockapi.io/Students", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })   
    .then(() => navigate("/Student/ViewStudents"))
    .then(setName(''),setAddress(''),setAge(''),setContact(''),setSection(''),setTeachername(''))
  }

  return (
    <>
    <section className="h-100 gradBG" >
            <div className="container  h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
            <div className="card card-registration my-4">
            <div className="row g-0">
            <div className="col-xl-4 d-none d-xl-block">
              <img src='https://media.istockphoto.com/id/1175129881/photo/digital-lifestyle-blog-writer-or-business-person-using-smart-device-working-on-internet.jpg?s=612x612&w=0&k=20&c=cQAWkyTx_WWUcHmZ6yT7XLMNbMHCJ9jDbBpmSyTrZMQ='
                alt="Sample photo" className="img-fluid"
                style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'675px'}}/>
            </div>
            <div className="col-xl-8">
            <Form onSubmit={handleCreate}>
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Add Student</h3>
                  
                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder='Student Name'
                  onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input type="number" className="form-control form-control-lg" 
                  placeholder='Age'
                  onChange={(event) => setAge(event.target.value) }/>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder='Address'
                  onChange={(event) => setAddress(event.target.value) }/>
                </div>

                <div className="form-outline mb-4">
                  <input type="number" className="form-control form-control-lg" 
                  placeholder='Contact Number'
                  onChange={(event) => setContact(event.target.value) }/>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder="Section"
                  onChange={(event) => setSection(event.target.value) }/>
                </div>

                <div className="form-outline mb-4">
                  <select className="form-select form-select-lg" onChange={(e)=>setTeachername(e.target.value)}>
                      <option selected >--Select Teacher--</option>
                        {
                        teach.map((t,i)=>                     
                        <option key={i} >{t.teachername}</option>
                        )
                        }
                    </select>
                  </div>
                
                <div>
                <p style={{ color: "red" }}>{errormsg}</p>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg"
                  onClick={() => {
                    setErrormsg('')
                    navigate('/Student/ViewStudents')
                    }}>
                  Cancel</button>
                  <button type="Submit" className="btn btn-primary btn-lg ms-2">Add Student</button>
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

export default AddStudent