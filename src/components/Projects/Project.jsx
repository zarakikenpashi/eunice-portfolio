import './project.css'
import cooking from '../../assets/cooking.png'
import coinchic from '../../assets/coinchic.png'
import blog from '../../assets/blog.png'
import glowra from '../../assets/glowra.png'
import joby from '../../assets/joby.png'
import rental from '../../assets/rental.png'

function Project() {
  return (
    <div className='projects' id='projects'>
        <div className="projects__title">Projects <span className='circle'></span></div>
            <div className="projects__content">
                <div className="projects__part">
                    <img src={cooking} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">R7 Ivoire</div>
                        <div className='projects__desc'>
                            A mobile application offering a multitude of authentic African culinary recipes to explore the continents gastronomic riches.
                        </div>
                        <div className='projects__techno'>
                            <span>React Native</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>

                <div className="projects__part">
                    <img src={coinchic} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">CoinChic</div>
                        <div className='projects__desc'>
                            A revolutionary mobile application to instantly discover the chic spots of the moment.
                        </div>
                        <div className='projects__techno'>
                            <span>Flutter</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>

                <div className="projects__part">
                    <img src={blog} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">Blog</div>
                        <div className='projects__desc'>
                            A blogging application that lets users create, publish and share content with an online community.
                        </div>
                        <div className='projects__techno'>
                            <span>Javascript</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>


                <div className="projects__part">
                    <img src={glowra} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">Glowra</div>
                        <div className='projects__desc'>
                            E-commerce platform specializing in the sale of cosmetics, offering a simple, secure experience.
                        </div>
                        <div className='projects__techno'>
                            <span>Javascript</span>
                            <span>PHP</span>
                        </div>
                    </div>
                </div>

                <div className="projects__part">
                    <img src={joby} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">JobY</div>
                        <div className='projects__desc'>
                            JobY is a web application connecting job seekers with tailored opportunities from diverse industries.
                        </div>
                        <div className='projects__techno'>
                            <span>ReactJs</span>
                            <span>NextJS</span>
                        </div>
                    </div>
                </div>

                <div className="projects__part">
                    <img src={rental} alt="" className='projects__img'/>
                    <div className="projects__body">
                        <div className="projects__part__title">Rental+</div>
                        <div className='projects__desc'>
                            A web-based platform offering a wide range of properties with advanced search and immersive viewing functionalities.
                        </div>
                        <div className='projects__techno'>
                            <span>Laravel</span>
                            <span>ReactJS</span>
                        </div>
                    </div>
                </div>


        </div>
        <div className="projects__more"><button className='btn btn__primary'>more</button></div>
    </div>
  )
}

export default Project