import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className='order-first w-60 px-7 pt-7 bg-[#F4F4F4]'>
    <ul>
      <li className='px-3.5 text-base'>
        <Link to=''>메뉴</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
