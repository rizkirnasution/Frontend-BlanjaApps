/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../configs/redux/actions/userAction";

import cart from "../../../assets/image/search.svg";
import Profil from "../../../assets/image/profil.png";
import bell from "../../../assets/image/bell (1) 1.png";
import mail from "../../../assets/image/mail (3) 1.png";
import { Dropdown, Button, Modal, DropdownButton } from "react-bootstrap";
import swal from "sweetalert2";
import axios from "axios";
import './navbar.css'

const NavbarBase = ({ onChange, onClick, src,srcCart }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
   const data  = useSelector((state) => state.bag);
  console.log(user);
  const handleSignOut = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(signOut());
    swal.fire({
      icon: "success",
      title: `Logout Success!`,
    });
  };

  //Searching path
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");

  const handleSearch = () => {
    // navigate({
    //   pathname: "/myProducts",
    //   search: "?search=" + search,
    // });

    navigate({
      pathname: "/myProducts",
      search: "?search=" + search + "&sort=" + searchParams.get("sort"),
    });
  
  };

  useEffect(() => {
    // getProducts();
    datas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [date_of_brith, setDate_of_brith] = useState("");
  // useEffect(() => {
  //   datas();
  // }, []);

  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/users/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data.user);
    // setDate_of_brith(response.data.data[0].date_of_brith);
  };
  return (
    // <nav className="navbar navbar-expand-md navbar-light fixed-top mb-4">
    //   <div className="container">
    //     <Link to="/home">
    //       <img src={src} alt="" className="" />
    //     </Link>
    //     <div className="collapse navbar-collapse ms-auto " id="navbarCollapse">
    //       <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
    //         <div className="input-group rounded nav-search">
    //           <input
    //             type="search"
    //             className="form-control search-input"
    //             placeholder="Search"
    //             aria-label="Search"
    //             aria-describedby="search-addon"
    //             name="search"
    //             onChange={(e) => setSearch(e.target.value)}
    //           />
    //           <span
    //             className="input-group-text search bg-light"
    //             id="search-addon"
    //           >
    //             <i className="bi bi-search" onClick={handleSearch}></i>
    //           </span>
    //         </div>
    //       </ul>
    //       {user?.id ? (
    //         <>
    //           <form className="ms-4">
    //             <Link to="/Checkout">
    //               <button
    //                 className="btn btn-link position-relative"
    //                 style={{
    //                   width: 40,
    //                   height: 40,
    //                 }}
    //               >
    //                 <img src={cart} alt="" className="icon-cart mb-2" />
    //                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    //                   {data.cart.length}
    //                 </span>
    //               </button>
    //             </Link>
    //             <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
    //             <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
    //           </form>
    //           <DropdownButton
    //             align="end"
    //             title={
    //               <img
    //                 src={Profil}
    //                 alt=""
    //                 width={35}
    //                 height={35}
    //                 className="rounded-circle"
    //               />
    //             }
    //             variant="link"
    //             id="dropdown-menu-align-end"
    //           >
    //             <Dropdown.Item variant="link">
    //               {" "}
    //               <p className="text-center text-primary">{user.fullname}</p>
    //             </Dropdown.Item>
    //             <Dropdown.Divider />
    //             <Dropdown.Item variant="secondary" eventKey="4">
    //               {" "}
    //               <Link to="/profil">Profile</Link>
    //             </Dropdown.Item>
    //             <Dropdown.Divider />
    //             <Dropdown.Item eventKey="4" variant="danger">
    //               <Link to="/login" onClick={() => handleSignOut()}>
    //                 Logout
    //               </Link>
    //             </Dropdown.Item>
    //           </DropdownButton>
    //         </>
    //       ) : (
    //         <>
    //           <Link to="/login">
    //             <button className="btn button-login " type="button">
    //               {" "}
    //               Login
    //             </button>
    //           </Link>
    //           <Link to="/register">
    //             <button
    //               type="button"
    //               className="btn btn-outline-secondary button-signup 3 mb-2"
    //             >
    //               {" "}
    //               Sign Up
    //             </button>
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </nav>

    <nav className="navbar navbar-search navbar-expand-md navbar-light fixed-top mb-4">
  <div className="container">
     <Link to="/home">
           <img src={src} alt="" className="" />
         </Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
        {/* <li className="nav-item"> */}
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <ul className="navbar-nav mb-2 mb-md-0 w-50 me-auto">
             <div className="input-group rounded nav-search">
               <input
                type="search"
                className="form-control search-input"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                className="input-group-text search bg-light"
                id="search-addon"
              >
                <i className="bi bi-search" onClick={handleSearch}></i>
              </span>
            </div>
          </ul>
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
        {user?.id ? (
            <>
              <form className="">
                <Link to="/Checkout">
                  <button
                    className="btn btn-link position-relative"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  >
                    <img src={cart} alt="" className="icon-cart mb-2" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {data.cart.length}
                    </span>
                  </button>
                </Link>
                <img src={bell} alt="" className="icon-cart ms-3 mb-2" />
                <img src={mail} alt="" className="icon-cart ms-3 mb-2" />
              </form>
              <DropdownButton
                align="end"
                title={
                  <img
                    src={Profil}
                    alt=""
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                }
                variant="link"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item variant="link">
                  {" "}
                  <p className="text-center text-primary">{user.fullname}</p>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item variant="secondary" eventKey="4">
                  {" "}
                  <Link to="/profil">Profile</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" variant="danger">
                  <Link to="/login" onClick={() => handleSignOut()}>
                    Logout
                  </Link>
                </Dropdown.Item>
              </DropdownButton>
            </>
            ) : (
                      <>
                        <Link to="/login">
                          <button className="btn button-login " type="button">
                            {" "}
                            Login
                          </button>
                        </Link>
                        <Link to="/register">
                          <button
                            type="button"
                            className="btn btn-outline-secondary button-signup 3 mb-2"
                          >
                            {" "}
                            Sign Up
                          </button>
                        </Link>
                      </>
                    )}
                    {/* </ul> */}

    </div>
  </div>
</nav>
  );
};

export default NavbarBase;
