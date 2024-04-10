import './skills.css'

function Skills() {
  return (
    <div className='skills' id='skills'>
        <div className="skills__title">Skills <span className='circle'></span></div>
        <div className="skills__content">
            <div className="skills__part">
                <div className="skills__part__title">Soft Skills</div>
                <ul>
                    <li>Effective communication</li>
                    <li>Collaboration</li>
                    <li>Commitment</li>
                    <li>LeaderShip</li>
                </ul>
            </div>

            <div className="skills__part">
                <div className="skills__part__title">Frontend</div>
                <ul>
                    <li>Javascript</li>
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>CSS3</li>
                </ul>
            </div>

            <div className="skills__part">
                <div className="skills__part__title">Backend</div>
                <ul>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>Laravel</li>
                    <li>ExpressJS</li>
                </ul>
            </div>
            <div className="skills__part">
                <div className="skills__part__title">Others</div>
                <ul>
                    <li>Git</li>
                    <li>Flutter</li>
                    <li>ReactNative</li>
                    <li>Scrum</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills