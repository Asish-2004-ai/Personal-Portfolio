import React from 'react'
import project from './data/project.json'

const Project = () => {
  return (
    <>
     <div classNameName="container project my-3" id='project'>
      <h3>𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</h3>
      <div classNameName="row d-flex justify-content-center align-items-center">
     {
      project.map(projects=>(
          <>
          <div key={projects.title} className='my-5 col-lg-3 col-md-4 col-sm-6' style={{marginLeft:'25%'}}>
          <div className="card bg-dark text-white" style={{width:"18rem",border:'1px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)'}}
            data-aos="flip-right"
          data-aos-duration="2000"
          >
            <div className="img d-flex justify-content-center align-items-center p-3">
  <img src={`/Assest/${projects.imgsrc}`} style={{height:'200px',width:'250px',border:'2px solid yellow', borderRadius:'10px'}} className="card-img-top" alt="..." />
            </div>
  <div className="card-body ">
    <h5 className="card-title text-center">{projects.title}</h5>
    <p className="card-text text-center">{projects.description}</p>
   <div style={{marginLeft:'35px'}}>
   <a href={projects.demo} className="btn btn-warning mx-3 ">
       Demo
    </a>
    <a href={projects.source} className="btn btn-light " >
      Code
      </a>
   </div>
  </div>
</div>
          </div>
          </>
      ))
     }
      </div>
      </div> 
    </>
  )
}

export default Project
