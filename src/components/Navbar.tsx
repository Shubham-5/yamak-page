import { CgProfile } from "react-icons/cg";
import { BsArrowLeftCircle, BsArrowRepeat } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-light shadow p-3 mb-5 bg-body '>
        <div className='container-fluid'>
          <a className='navbar-brand logo fw-semibold md' href='#'>
            <span className='text-logo-blue fw-bold '>Yamak</span>.ai
          </a>
          <a href='#' className='navbar-brand sm'>
            <BsArrowLeftCircle
              className='text-logo-blue fw-bold '
              fontSize={35}
            />
          </a>
          <ul className='navbar-nav flex-row md'>
            <li className='nav-item'>
              <a className='nav-link ' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Marketing
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active ' href='#'>
                Social Media
              </a>
            </li>
            <li className='nav-item '>
              <a className='nav-link '>Sales Copy</a>
            </li>
            <li className='nav-item '>
              <a className='nav-link '>Blogs</a>
            </li>
            <li className='nav-item '>
              <a className='nav-link '>Others</a>
            </li>
          </ul>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item px-4'>
              <a className='nav-link '>
                <BsArrowRepeat className='notify-icon' fontSize={30} />
              </a>
            </li>
            <div className='nav-item me-4'>
              <a href='#' className='nav-link '>
                <CgProfile className='profile-icon' fontSize={25} />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
