import './hero.css'
import photo from '../../assets/favicon.png'
function Hero() {
  return (
    <div className="hero">
        <div className="hero__part1">
            <div className="hero__img">
                <img src={photo} alt="" />
            </div>
            <div className="hero__text">
                <div className="hero__hi">Hello! I am Abel</div>
                <h1 className='title'><span>Full</span> Stack Developer</h1>
                <div className='hero__desc'>
                    Passionate full-stack developer with a knack for problem-solving and a love for creating innovative solutions that enhance user experiences.
                </div>
                <div className="hero__controls">
                    <button className='btn__primary btn'>Get Resume</button>
                    <button className='btn__secondary btn'>Browser Projects</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero