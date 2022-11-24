import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/module/profile/profile.css";
import axios from "axios";
import Profile from "../../components/module/profile/Profile";
import Footer from "../../components/module/home/footer/Footer";
import Navbar from "../../components/module/home/navbar/Navbar";
import Swal from "sweetalert2";
// import ModalCreate from "../../components/module/ActionProduct/CreateProductModal";
import ModalCreate from "../../components/module/ActionProduct/CreateProducts";
// import EditProduct from "../../components/module/ActionProduct/EditProductModal"
import EditProduct from "../../components/module/ActionProduct/EditProducts"

const ProductList = () => {
  const [products, getProducts] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(navigate);
  async function fetchData() {
    try {
     const token = localStorage.getItem("token");
     const createdAt = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}/products`,
      //  `${process.env.REACT_APP_API_BACKEND}products/myProduct`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     console.log(createdAt.data.data);
      getProducts(createdAt.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
    setShow(false)
    setShow(true)
  }, []);

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Sure to Delete This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`http://localhost:8080/products/${id}`)
          .then((res) => {
            fetchData();
            // dispatch(deleteProduct(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Product Delete Success!", "success");
            // console.log(res);
            setShow(false)
          })
            .catch((err)=>{
              Swal.fire("Failed!", "Product Delete Failed!", "error")
              setShow(false)
          });
      }
    });
  };

  return (
    <div className="my-bag">
      <Navbar />
      <div className="row py-5">
        <Profile>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ms-5 small ">
            <li>
              <Link
                to="/productlist"
                className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-2"
              >
                My Products
              </Link>
            </li>
          </ul>
        </Profile>
        <div className="col-lg-7 profil-form">
          <div className="card mt-5">
            <div className="card-body">
              <h4 className="mb-2">My Products</h4>
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                  <a className="text-danger" href={'/productlist'}> All Items</a>
                 </div>
              </div>
              <div className="table-responsive mt-3">
              <ModalCreate/>
                <table className="table">
                  <thead className="table-light">
                  
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Stock</th>
                      {/* <th>Description</th> */}
                      <th>Merk</th>
                      <th>Photo</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        {/* <td>{item.descriptions}</td> */}
                        <td>{item.merk}</td>
                        <td>
                          <img className=""
                            src={item.photo}
                            alt=""
                            width={50}
                            height={55}
                          />
                        </td>
                        <td>
                          <EditProduct id={item.id} name={item.name} condition={item.condition} merk={item.merk} stock={item.stock} price={item.price} descriptions={item.descriptions} category_name={item.category_name} address_transactions={item.address_transactions}/>
                          <button
                            onClick={() => deleteProduct(item.id)}
                            className="btn btn-danger mt-1 mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default ProductList;
