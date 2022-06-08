import React from 'react';

const Navbar = () => {
    const menuElement=<>
                           <li className='mr-6'><a href="#home">Home</a></li>
                           <li className='mr-6'><a href="#about">About</a></li>
                           <li className='mr-6'><a href="#skill">Skill</a></li>
                           <li className='mr-6'><a href="#projects">Project</a></li>
                           <li className='mr-6'><a href="#contact">Contact</a></li> 
                      </>

    return (
        <div>
            <div class="navbar text-white sticky top-0">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        {menuElement}

        {/* here */}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">I Studio</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
        {
            menuElement
        }
   {/* here */}
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Download Cv</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;