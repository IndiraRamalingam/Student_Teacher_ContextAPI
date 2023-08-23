import React, { useContext, useEffect } from 'react'
import AppContext from '../AppContext'
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

function EditStudent() {
  const navigate=useNavigate();
  const params=useParams();
  const {
        name,setName,
        age,setAge,
        address,setAddress,
        contact,setContact,
        section,setSection,
        teachername,setTeachername,
        teach,
        errormsg,setErrormsg,
        getTeachers
        } = useContext(AppContext)
   
  useEffect(()=>{
    getStudentDetails(params)
    getTeachers()
  },[]);

  //Get that particular student using params ID
  const getStudentDetails =(params) =>{
    fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Students/${params.id}`,{
      method:"GET"
    })
   .then((data)=>data.json())  
   .then(setName(''),setAddress(''),setAge(''),setContact(''),setSection(''),setTeachername(''))
   .then((slist)=> ((setAge(slist.age)), (setName(slist.name)),(setAddress(slist.address)),
                    (setContact(slist.contact)),(setSection(slist.section)),(setTeachername(slist.teachername)) 
                    ));
     };  


  const handleUpdate =(event) =>{
    event.preventDefault();
    if(name!=''&&age!=''&&address!=''&&contact!=''&&section!=''&&teachername!='')
    {
      setErrormsg('')
      UpdateStudent({name,address,age,section,contact,teachername}) 
      
    }else{
      setErrormsg("Please fill all the fields above")
    }
    
  }

  //To update that particular student details
  const UpdateStudent =(details)=>{
    fetch(`https://64e32cc9bac46e480e7852ab.mockapi.io/Students/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })   
    .then(() => navigate("/Student/ViewStudents"))
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
                <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Update Student</h3>

                <div className='row'>
                  <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                    Student Name
                  </div>
                  <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                    <input type="text" className="form-control form-control-lg" 
                    value={name}                
                    onChange={(event) => setName(event.target.value) }/>
                    </div>
                  </div>
                </div>  

                <div className='row'>
                  <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                    Age
                  </div>
                  <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                    <input type="number" className="form-control form-control-lg" 
                    value={age}
                    onChange={(event) => setAge(event.target.value) }/>
                  </div>
                  </div>
                </div> 

                <div className='row'>
                    <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                      Address
                    </div>
                    <div className='col-sm-9'>
                      <div className="form-outline mb-4">
                      <input type="text" className="form-control form-control-lg" 
                      value={address}
                      onChange={(event) => setAddress(event.target.value) }/>
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
                      Section
                    </div>
                    <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                      <input type="text" className="form-control form-control-lg" 
                      value={section}
                      onChange={(event) => setSection(event.target.value) }/>
                    </div>
                    </div>
                  </div> 

                  <div className='row'>
                    <div className='col-sm-3 fs-4 fw-bold' style={{color:'#301091'}}>
                      Teacher
                    </div>
                    <div className='col-sm-9'>
                    <div className="form-outline mb-4">
                      <select className="form-select form-select-lg"  onChange={(e)=>setTeachername(e.target.value)}>
                          <option selected >{teachername}</option>
                            {
                            teach.map((t,i)=>                     
                            <option key={i} >{t.teachername}</option>
                            )
                            }
                      </select>
                    </div>
                    </div>
                  </div> 
   
                <div>
                 <p style={{ color: "red" }}>{errormsg}</p>
                </div> 

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg"
                  onClick={() => {
                    navigate('/Student/ViewStudents')
                    }}>
                  Cancel</button>
                  <button type="Submit" className="btn btn-primary btn-lg ms-2">Update Student</button>
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

export default EditStudent