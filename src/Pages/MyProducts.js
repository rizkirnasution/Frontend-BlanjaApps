import React,{useEffect,useState} from 'react'
import Footer from '../components/module/home/footer/Footer'
import Navbar from '../components/module/home/navbar/Navbar'
import Card from "../components/base/Card";
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import { FormatRupiah } from "@arismun/format-rupiah";
import axios from "axios"
import './style.css'

const MyProducts = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const cari =
    searchParams.get("search") === null ? "" : searchParams.get("search");
    axios
      .get(
        // `http://localhost:8080/products/pagination?sortby=name&sort=${sort}&page=1&limit=10&${search}`
        `${process.env.REACT_APP_API_BACKEND}/products/pagination?search=${cari}&sort=${sort}`
      )
      .then((response) => {
        console.log(response.data.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // const handleSort = (e) => {
  //   setSort(e.currentTarget.value);
  // // getProducts();
  // };

  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
  console.log(search);
  const handleSearch = (e) => {
    e.preventDefault();
    getProducts();
    setSearchParams({
      search,
      sort,
    });
  };
  console.log(search)
  console.log(sort)
useEffect(() => {
  getProducts();
  setSearch(searchParams.get("search"));
  searchParams.get("search");
  searchParams.get("sort");
}, [searchParams]);
// }, [searchParams]);

  
    // useEffect(() => {
    //   getProducts();
    //   search.get("search");
    // }, [ search]);



return (
  <div className="h-100">
    <Navbar sort={sort}/>
    <div className="container">
      <div className="row">
        <div className="products">
          <h3 className="title">New</h3>
          <p className="mt-5">My Products List</p>

          <form onSubmit={handleSearch}>
          <select className="form-select form-sort mt-3" aria-label="Default select example" onChange={handleSort}>
            <option value="">Pilih Option</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
          <button type="submit" className='btn btn-info mt-3'>Sort</button>


          </form>

              {/* <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <button className="btn me-3" value="ASC" onClick={handleSort}>
                  Name A-Z
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn" value="DESC" onClick={handleSort}>
                  Name Z-A
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
         
        </div>

        {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">

          </div> */}


        {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5">
        </div> */}

        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
          {products.length > 0 ? (
            products.map(item => (
              < div className="col" key={item.id}>
                <Card 
                  src={item.photo}
                  to={`/detail/${item.id}`}
                  titleName={item.name}
                  merk={item.merk}
                  // price={item.price}
                  price={<FormatRupiah value={item.price} />}
                />
                
              </div>
            ))
          ) : (
            <div className=" text-center m-auto mb-5">
              <h2>Product Not Found : </h2>
              
            </div>
          )
        }
        </div>
        {/* <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 mt-5 justify-content-evenly">
        </div> */}
        
      </div>
    </div>
    <Footer />
  </div>
);
}

export default MyProducts