import './footer.css'
import { FaChevronUp } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <p>all rights reserved to @nozaraki</p>
        <a  href='#' className='btn btn__primary float'><FaChevronUp /></a>
    </div>
  )
}

export default Footer