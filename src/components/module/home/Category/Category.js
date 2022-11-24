import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hiclipart1 from "../../../../assets/image/hiclipart 15.png";
import hiclipart2 from "../../../../assets/image/hiclipart 21.png";
import hiclipart3 from "../../../../assets/image/hiclipart 22.png";
import hiclipart4 from "../../../../assets/image/hiclipart 26.png";
import hiclipart5 from "../../../../assets/image/hiclipart 34.png";
import '../StyleHome.css'
import { getCategory} from "../../../../configs/redux/actions/categoryAction"


const Category = () => {
  const {category}  = useSelector((state) => state.getCategory);
  console.log(category);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCategory());
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  return (
    <div>
      <div className="container">
        <div className=" py-5" id="custom-cards">
          <h2 className="title mt-2">Category</h2>
          <p className="sub-category">What are you currently looking for</p>
          <div className="row row-cols-2 row-cols-lg-5 align-items-center g-5">
            <div className="col categories">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={hiclipart1} alt="Bootstrap" className="img-fluid" />
                  <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <a href="/category/{category[0].id}" >
                    <p className="font-category"></p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col categories">
              <div className="card card-2 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={hiclipart2} alt="Bootstrap" className="img-fluid" />
                  <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <p className="font-category"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col categories">
              <div className="card card-3 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={hiclipart3} alt="Bootstrap" className="img-fluid" />
                  <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <p className="font-category"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col categories">
              <div className="card card-4 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={hiclipart4} alt="Bootstrap" className="img-fluid" />
                  <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <p className="font-category"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col categories">
              <div className="card card-5 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={hiclipart5} alt="Bootstrap" className="img-fluid" />
                  <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
                    <p className="font-category"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category