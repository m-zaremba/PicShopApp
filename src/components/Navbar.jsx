import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return(

    <nav>
      <div>
        <Link to='/'>Shopping</Link>

        <ul>
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/cart'>My cart</Link></li>
        </ul>
      </div>
    </nav>

  )

}

export default Navbar;
