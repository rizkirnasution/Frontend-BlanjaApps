import React, { useEffect} from "react";
import "../StyleHome.css";
import axios from "axios";
import Card from "../../../base/Card";
// import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../../configs/redux/actions/productsActions";

import { useState } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";


const Product = ({ title, subtitle }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
    .get(`http://localhost:8080/products`) 
    // ${process.env.REACT_APP_API_BACKEND}/products/AllProduct
    .then((response)=>{
      setProducts(response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
    // fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // fetchProducts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  
  return (
    <div>
      <div className="container mx-9">
        <div className="row ms-1">
          <div className="products">
            <h3 className="title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
                  src={item.photo}
                  to={`/detail/${item.id}`}
                  titleName={item.name}
                  price={<FormatRupiah value={item.price} />}
                  merk={item.merk}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product