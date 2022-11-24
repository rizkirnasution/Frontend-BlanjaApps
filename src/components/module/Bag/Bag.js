/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../home/StyleHome.css";
// import bag from '../../../assets/image/bag.png'
import Rectangle from "../../../assets/image/Rectangle 605.png";
import shape from "../../../assets/image/Shape.png";
import Total from "../Total/Total";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../configs/redux/actions/bagAction";
import { useNavigate } from "react-router-dom";
import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../base/Button/Button.jsx";

const Bag = () => {
  const { cart } = useSelector((state) => state.bag);
  console.log(cart);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);
  let totalHarga = 0;
  for (let i = 0; i < cart.length; i++) {
    totalHarga += cart[i].price * cart[i].qty;
  }

  const addQty = async (id) => {
    try {
      console.log(token);
      await axios.put(`${process.env.REACT_APP_API_BACKEND}/cart/add/${id}`);
      setQty(1);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(qty);
  const deleteCart = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BACKEND}/cart/${id}`, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQty(1);
    } catch (error) {
      console.log(error);
    }
  };

  const MinQty = (id) => {
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}/cart/decrease/${id}`)
      .then(() => {
        setQty(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);
  return (
    <div className="container bag-my">
      <h3 className="title-bag">My Bag</h3>
      <div className="row ">
        <div className="col-lg-8 pl-lg-0">
          <div className="card mb-3 select-all">
            <div className="table-responsive-sm">
              <table className="table mt-3">
                <tbody>
                  <td className="me-5">
                    <div className="check-select">
                      <label className="customcheck ms-2">
                        <p className="select-item ms-4">
                          Select All Items{" "}
                          <span className="text-secondary">
                            ({cart.length} items selected)
                          </span>{" "}
                        </p>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <span className="checkmak mt-2 pl-4"></span>
                      </label>
                    </div>
                  </td>
                  <td className="delete text-right">Delete</td>
                </tbody>
              </table>
            </div>
          </div>
          {cart.length > 0 && (
            <ul>
              {cart.map((item, index) => (
                <div className="card mb-3 " key={index}>
                  <div className="table-responsive-sm">
                    <table className="table">
                      <tbody>
                        <td className="align-middle">
                          <div className="check ms-2 mt-2">
                            <label className="customcheck mt-2 input">
                              <input
                                className="form-check-input "
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </td>
                        <td className="align-middle  float-start">
                          <img
                            className="img-products"
                            src={item.photo}
                            alt="product"
                          />
                        </td>
                        <td className="align-middle float-start">
                          <p className="post mb-1">{item.name}</p>
                          <span className="text-secondary sub-post">
                            {item.merk}
                          </span>
                        </td>
                        <td className="align-middle">
                          <tr>
                            <button
                              className="btn btn-secondary min"
                              onClick={() => {
                                MinQty(item.id);
                              }}
                            >
                              <img
                                src={Rectangle}
                                alt=""
                                className="icon-min"
                              />
                            </button>
                          </tr>
                        </td>
                        <td className="align-middle one">{item.qty}</td>
                        <td className="align-middle">
                          <tr>
                            <button
                              className="btn btn-light max"
                              onClick={() => {
                                addQty(item.id);
                              }}
                            >
                              <img src={shape} alt="" className="icon-max" />
                            </button>
                          </tr>
                        </td>
                        <td className="align-middle price">
                          <FormatRupiah value={item.price * item.qty} />
                        </td>
                        <button
                          onClick={() => {
                            deleteCart(item.id);
                          }}
                          className="btn btn-light text-danger"
                        >
                          hapus
                        </button>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </ul>
          )}
          {cart.length < 1 && <h1>Sorry Data Empty</h1>}
        </div>
        <Total
          onClick={() => {
            navigate("/checkout");
          }}
          totalPrice="Total Price"
          priceBag={<FormatRupiah value={totalHarga} />}
        >
          {" "}
          <Link to="/Checkout">
            <Button
              className="mt-3 w-100 btn btn-checkout"
              title=" Select payment"
            ></Button>
          </Link>
        </Total>
      </div>
    </div>
  );
};

export default Bag;
