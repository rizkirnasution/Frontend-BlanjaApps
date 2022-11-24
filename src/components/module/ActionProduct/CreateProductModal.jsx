import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function ModalCreate(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        name:"",
        stock:"",
        price:"",
        descriptions:"",
        category_id:"",
        transactions_id:"",
        merk:"",
        condition:"",
    })

    const [photo, setPhoto] =useState(null)

    const handleUpload = (e)=>{
        setPhoto(e.target.files[0]);
    }
    
    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value,
        });
        console.log(data);
    };

    const handleCreate = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('stock', data.stock)
        formData.append('price', data.price)
        formData.append('photo', photo)
        formData.append('descriptions', data.descriptions)
        formData.append('category_id', data.category_id)
        formData.append('transactions_id', data.transactions_id)
        formData.append('merk', data.merk)
        formData.append('condition', data.condition)
        axios
        .post(`${process.env.REACT_APP_API_BACKEND}/products`, formData,{
            headers: {
                "Content-Type":"multipart/form-data",
            },
        })
        .then((res)=>{
            console.log(res);
            Swal.fire("Created!", "Product Created Success!", "success");
            setShow(false)
        })
        .catch((err)=>{
            console.log(err)
            Swal.fire("Failed!", "Product Create Failed!", "error");
            setShow(false)
        })
    }

    return(
        <>
        <button className="btn btn-success" onClick={handleShow}>
            Create
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Product</Modal.Title>
            </Modal.Header>
            <form onSubmit={handleCreate}>
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
                    <button type="submit" className="btn btn-primary">Create</button>
                </Modal.Footer>
            </form>
        </Modal>
        </>
    );
}

export default ModalCreate;