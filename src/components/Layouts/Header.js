import { Link } from "react-router-dom";
import Logo from "../../assets/images/mainLogo.png";
import {useState,useEffect} from 'react'
import { Search } from "../Section/Search";
import { DropdownLoggedIn } from "../Elements/DropDownLoggedIn";
import { DropdownLoggeOut } from "../Elements/DroppedDownLogout";
import { useCart } from "../../context/CartContext";
export const Header = () => {
  const [darkMode,setDarkMode] = useState(false)
  const [searchSection,setSearchSection] = useState(false)
  const [dropDown,setDropDown] = useState(false)
  const {cartList}  = useCart()
  const token = JSON.parse(sessionStorage.getItem("token"))
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  })
  return (
    <header>      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center">
                  <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>
              <div className="flex items-center relative">
                  <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                  <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>                    
                  </Link>
                  <span onClick={() => setDropDown(!dropDown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  { dropDown && (token?<DropdownLoggedIn setDropDown={setDropDown}/>:<DropdownLoggeOut setDropDown={setDropDown}/> ) }
              </div>
          </div>
      </nav>
      { searchSection && <Search setSearchSection={setSearchSection} /> }
      
    </header>
  )
}