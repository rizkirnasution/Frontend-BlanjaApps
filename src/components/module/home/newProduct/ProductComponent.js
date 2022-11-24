import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../../base/Card";
import "../StyleHome.css";
const ProductComponent = ({ title, subtitle }) => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, name, photo, price, merk } = product;
      return (
    <div>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
                <div className="col" key={id}>
                  <Card
                    src={photo}
                    to={`/detail/${id}`}
                    titleName={name}
                    price={price}
                    merk={merk}
                  />
                </div>
          </div>
        </div>
      </div>
    </div>
          
      );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
