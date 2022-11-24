/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./StyleDetail.css";
import axios from "axios";
import { useParams, Link,useNavigate } from "react-router-dom";
import retanggle from "../../../../assets/image/detail products/Rectangle 21.png";
import shape from "../../../../assets/image/detail products/Shape (1).png";
import { addMycart } from "../../../../configs/redux/actions/bagAction";
import {FormatRupiah} from "@arismun/format-rupiah"
import photo1 from "../../../../assets/image/detail products/secondary1.png"



const Content = () => {
  const { id } = useParams();
  const [product,setProduct] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BACKEND}/products/${id}`)
      .then( (response)=> {
        setProduct(response.data.data[0]);
        console.log(product);
      })
      .catch( (error)=> {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  
  const handleAddBag = async (detailProductId, navigate) => {
    const data = {
      productId: detailProductId,
      qty: 1,
    };
    addMycart(data, navigate);
  };
   const [count, setCount] = useState(1);
   const handleSum = () => {
     setCount(count + 1);
   };
   const handleMin = () => {
     setCount(count - 1);
   };
   const [countSize, setCounts] = useState(1);
   const handleSums = () => {
     setCounts(countSize + 1);
   };
   const handleMins = () => {
     setCounts(countSize - 1);
   };
  return (
    <div>
      {/* {Object.keys(data).length === 0 ? (
        <div class="text-center">
          <FontAwesomeIcon icon={faSpinner} spin />
          &nbsp;Loading
        </div>
      ) : ( */}
        <div className="container child-page py-5">
          <div className="row mt-3">
            <div className="col-lg-5">
              <div className="galleries">
                <div className="galleries-container">
                  <img src={product.photo} className="w-100" alt="" />
                </div>
                <div className="thumb mt-3 text-center">
                  <a
                    href="../image/detail products/secondary1.png"
                    className=""
                  >
                    <img src={product.photo} alt="" />
                  </a>
                  <a
                    href="../image/detail products//secondary2.png"
                    className="ms-2"
                  >
                    <img src={product.photo} alt="" />
                  </a>
                  <a
                    href="../image/detail products/image2 (1).png"
                    className="ms-2"
                  >
                    <img src={product.photo} alt="" />
                  </a>
                  <a
                    href="../image/detail products/image2 (2).png"
                    className="ms-2"
                  >
                    <img src={product.photo} alt="" />
                  </a>
                  <a
                    href="../image/detail products/image2 (3).png"
                    className="ms-2"
                  >
                    <img src={product.photo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ms-2 mt-3 mx-1">
              <div className="title-product">
                <h3 className="product-title mt-3">{product.name}</h3>
                <p className="text-secondary sub-title mt-3">{product.merk}</p>
                <div className="d-flex justify-content-start text-warning start mt-3">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <p className="rating  mt-2 ms-1 text-dark">(10)</p>
                </div>
              </div>
              <div className="price-products mt-3">
                <p className="mb-3 title-price">Price</p>
                <h3 className="price-detail mt-3">
                  <FormatRupiah value={product.price} />
                </h3>
              </div>
              <div className="color-products mt-3 mb-2">
                <p className="title-color">Color</p>
                <div className="d-flex justify-content-start start mt-4">
                  <div className="d-flex  align-items-center btn-border">
                    <button className="btn btn-black"></button>
                  </div>
                  <button className="btn btn-red"></button>
                  <button className="btn btn-blue"></button>
                  <button className="btn btn-green"></button>
                </div>
              </div>
              <div className="size mt-5">
                <div className="d-flex justify-content-start ms-1 text-black">
                  <p className="title-size">Size</p>
                  <p className="title-jumlah ms-5 text-black">Jumlah</p>
                </div>
                <div className="d-flex justify-content-start mt-1 ms-2">
                  <div className="d-flex btn-min btn" onClick={handleMins}>
                    <img src={retanggle} className="m-auto icon" alt="" />
                  </div>
                    <p className="ms-2 me-2 mt-1 size">{ countSize}</p>
                  <div className="d-flex btn-max btn" onClick={handleSums}>
                    <img src={shape} className="m-auto icon" alt="" />
                  </div>
                  <div className="d-flex btn-min btn ms-5" onClick={handleMin}>
                    <img src={retanggle} className="m-auto icon" alt="" />
                  </div>
                  <p className="ms-2 me-2 mt-1 size">{count}</p>
                  <div className="d-flex btn-max btn" onClick={handleSum}>
                    <img src={shape} className="m-auto icon" alt="" />
                  </div>
                </div>
              </div>
              <div className="submit mt-5 mb-5">
                <div className="d-flex justify-content-start  ms-1">
                  <div className="col-lg-3 ">
                    <button className="btn btn-chat">Chat</button>
                  </div>
                  <div className="col-lg-4 ms-1">
                    <Link to="/Bag">
                      <button
                        className="btn btn-bag"
                        onClick={() => {
                          console.log(product.id);
                          handleAddBag(product.id, navigate);
                        }}
                      >
                        Add bag
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-5 ms-1">
                    <Link to="/Checkout">
                      <button className="btn btn-buy">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-1">
            <div className="col-lg-12 ms-1">
              <h3 className="title-info">Informasi Produk</h3>
              <h3 className="mt-4 text-sub">Condition</h3>
              <p className="text-danger">{product.condition}</p>
              <h3 className="text-sub">Description</h3>
              <div className="text ms-1 text-secondary">
                <p>{product.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      {/* )}  */}
    </div>
  );
};

export default Content;
