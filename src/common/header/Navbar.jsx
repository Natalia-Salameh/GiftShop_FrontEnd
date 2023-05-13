import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <header className='header'>
          <div className='navlink'>
          <ul>
              <li>
                <Link to='/candles'>Candles</Link>
              </li>
              <li>
                <Link to='/ceramic'>Ceramic</Link>
              </li>
              <li>
                <Link to='/crochet'>Crochet</Link>
              </li>
              <li>
                <Link to='/resin'>Resin</Link>
              </li>
              <li>
                <Link to='/woodArt'>Wood Art</Link>
              </li>
              <li>
                <Link to='/embroidery'>Embroidery</Link>
              </li>
            </ul>

          </div>
      </header>
    </>
  )
}

export default Navbar
