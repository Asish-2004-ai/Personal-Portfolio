import React from 'react'
import skills from './data/skills.json'

const Skills = () => {
  return (
    <>
      <div className="container skill" id='skill'>
        <h3>Skills</h3>
        <div className="items">
        {
          skills.map(skill=>(
            <>
              <div className="item" key={skill.title}
              data-aos="flip-left"
              data-aos-duration="2000"
              >
                <img src={`/Assest/${skill.imageSrc}`} alt="" />
              <h4>{skill.title}</h4>
              </div>
            </>
          )
        )
      }
      </div>
      </div>
    </>
  )
}

export default Skills
