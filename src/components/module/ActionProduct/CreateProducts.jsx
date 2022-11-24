import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import createProduct from "../../../configs/redux/actions/createProductAction";

const ModalCreate = ({children}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [saveImage, setSaveImage]  = useState(null);
  function handleUpload(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }
  const [data, setData] = useState({
    name:"",
    stock:"",
    price:"",
    descriptions:"",
    category_id:"",
    transactions_id:"",
    merk:"",
    condition:"",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(data,saveImage,setShow))
    
    window.location.reload(false);
  };

  return (
    <Fragment>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Create
        {children}
      </button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
                      <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="condition"
                        name="condition"
                        value={data.condition}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="merk"
                        name="merk"
                        value={data.merk}
                        onChange={handleChange}
                    />
                    <input 
                        className="form-control mt-3"
                        type="text"
                        placeholder="stock"
                        name="stock"
                        value={data.stock}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="tex"
                        placeholder="price"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="file"
                        placeholder="photo"
                        name="photo"
                        onChange={handleUpload}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="descriptions"
                        name="descriptions"
                        value={data.descriptions}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="category_id"
                        name="category_id"
                        value={data.category_id}
                        onChange={handleChange}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="transactions_id"
                        name="transactions_id"
                        value={data.transactions_id}
                        onChange={handleChange}
                    />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" id="button-addon2" title="Register">
            Create
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalCreate;
