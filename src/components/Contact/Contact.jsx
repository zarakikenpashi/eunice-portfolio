import './contact.css'

function Contact() {
  return (
    <div className='contacts' id='contacts'>
        <div className="contacts__title">Contacts <span className='circle'></span></div>
        <div className="contacts__content">
            <div className="contacts__info">
                <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just say hi to me.</p>
                <p><button className='btn__primary btn'>Contact Me</button></p>
            </div>
            <div className="contacts__list">
                <ul>
                    <li>
                        <h5>Email</h5>
                        <p>sadiarog.abel@gmail.com</p>
                    </li>
                    <li>
                        <h5>Git</h5>
                        <p>https://github.com/zarakikenpashi</p>
                    </li>
                    <li>
                        <h5>Social</h5>
                        <p>Facebook/Twitter @nozaraki</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact