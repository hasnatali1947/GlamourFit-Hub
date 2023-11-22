import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='headerUl'>
            <li>Glamour Souting</li>
            <Link className='listSizesHeader' href="/ListSizes"> <li>List Sizes</li> </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
