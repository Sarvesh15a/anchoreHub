import { Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link , useLocation} from 'react-router-dom'
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from 'react-icons/fa'

const Header = () => {
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap
       text-sm sm:text-xl font-semibold dark:text-white' >

        <span className='px-2 py-1 bg-gradient-to-r from-blue-500
         via-purple-600 to bg-pink-500 rounded-lg text-white' >Anchore</span>
        Hub
      </Link>

      <form>
        <TextInput
        type='text'
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
      </form>

      <button className='w-12 h-10 lg:hidden' color='gray'  >
        <AiOutlineSearch/>
      </button>

     <div className='flex gap-2 md:order-2'>
     <button className='w-12 h-10 hidden sm:inline ' color='gray' >
        <FaMoon/>
      </button>

      <Link to='/signin'>
      <button  className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-1  rounded-lg outline" >
        Sign In
      </button>
      </Link>
       <Navbar.Toggle/>
     </div>
       
     <Navbar.Collapse>
          <Navbar.Link active={path==="/home"} as={'div'}>
            <Link to='/home'>
              Home
            </Link>
          </Navbar.Link>
          
          <Navbar.Link active={path==="/profile"} as={'div'}>
            <Link to='/profile'>
              Profile
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path==="/list"} as={'div'}>
            <Link to='/list'>
              Job List
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header