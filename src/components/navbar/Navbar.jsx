import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const Navbar = () => {
    // get user from localStorage 
    const storedUser = localStorage.getItem('users');
    const user = storedUser ? JSON.parse(storedUser) : null;

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.removeItem('users');
        navigate("/login");
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex flex-row justify-evenly text-center items-center  lg:space-x-9 text-white font-medium text-md lg:px-5 lg:mx-0 mx-2 w-full">
            {/* Home */}
            <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {/* {user?.name} */}
            {user?.role === "user" && <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/user-dashboard'}> User-Dashboard </Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li className="hover:text-orange-600 text-xs lg:text-lg">
                <Link to={'/admin-dashboard'}>{user?.name}</Link>
            </li>}

            {/* Logout */}
            {user && <li className=" bg-orange-900 hover:bg-orange-800 px-2 py-1 rounded-md cursor-pointer text-xs lg:text-lg" onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li className="text-xs lg:text-lg">
                {/* <Link to={'/cart'}>
                    Cart ({cartItems.length})
                </Link> */}
                 <Link to={'/cart'} className="relative">
                Cart
                <span className="absolute top-0 right-0 transform translate-x-[100%] -translate-y-1/3 bg-orange-900 text-white rounded-full px-2 py-1 text-xs">
                    {cartItems.length}
                </span>
            </Link>
            </li>
        </ul>
    );

    return (
        // <PiShoppingBagOpenFill />
        <nav className="bg-black sticky top-0">
            {/* main  */}
            <div className="flex lg:flex-row flex-col lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                
                <div className="left py-3 lg:py-0  lg:w-[15%]">
                    <Link to={'/'}>
                    <div className="flex flex-row justify-center items-center" >
                    <h2 className="text-3xl text-white mr-1" ><PiShoppingBagOpenFill /></h2>
                    <h2 className=" font-bold text-white text-2xl text-center">  Astra-Mart</h2>
                    </div>
                        
                    </Link>
                </div>

                <div className="flex lg:flex-row flex-col lg:justify-end lg:items-center lg:w-[85%] w-full" >

                     {/* Search Bar  */}
                  <div className=" lg:w-[50%] order-2 lg:order-1">  <SearchBar /></div>
                

                {/* right  */}
                <div className=" order-1 lg:order-2 right flex justify-center mb-2 lg:mb-0 lg:w-[50%] w-full">
                    {navList}
                </div>
                </div>

                 

{/* <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full lg:w-auto">
        
        <div className="order-2 lg:order-1 flex-grow lg:flex-grow-0">
            <SearchBar />
        </div>

        
        <div className="order-1 lg:order-2 right flex justify-start mb-2 lg:mb-0 my-4">
            {navList}
        </div>
    </div> */}


              
            </div>
        </nav>
    );
}

export default Navbar;
