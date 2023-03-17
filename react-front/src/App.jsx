import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {


    return (
        <div className="bg-slate-100">
        <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
            <div
                className="container mx-auto flex flex-wrap items-center justify-between"
                bis_skin_checked="1">
                <a href="#" className="flex items-center">
                    Breeze-React
                </a>

                <div
                    className="hidden w-full md:block md:w-auto">
                    <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                        <li>
                            <Link to={"/"}
                                  class="block rounded py-2 pr-4 pl-3 text-white"
                                  aria-current="page">Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/login"}
                                  class="block rounded py-2 pr-4 pl-3 text-white"
                                  aria-current="page">Login
                            </Link>
                        </li>
                        <li>
                            <Link to={"/register"}
                                  class="block rounded py-2 pr-4 pl-3 text-white"
                                  aria-current="page">Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <div className="max-w-7xl mx-auto mt-6">
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/register'} element={<Register/>} />
                </Routes>
            </div>
    </div>
    )
}

export default App
