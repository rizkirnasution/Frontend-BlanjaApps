/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./edit.css";
import avatar from "../../../assets/image/profil-avatar.png";
import Profil from "./Profile";
import home from "../../../assets/image/user-profil.png";
import pekage from "../../../assets/image/map-pin (3) 1.png";
import shoping from "../../../assets/image/clipboard 1 (1).png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../configs/redux/actions/userAction";

const EditProfil = () => {
  // const { user } = useSelector((state) => state.auth);
 const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(image);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_brith, setDate_of_brith] = useState("");
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data = new FormData();
    data.append("phonenumber", phonenumber);
    data.append("name", name);
    data.append("gender", gender);
    data.append("email", email);
    data.append("date_of_brith", date_of_brith);
    data.append("image", image);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_BACKEND}/users/updateProfil`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        "Content-Type": "multipart/form-data",
      })
      .then((res) => {
        console.log(res);
        dispatch(updateUser(res));
        navigate("/profil");
        Swal.fire({
          icon: "success",
          title: "Berhasil mengupdate users",
          text: `username : ${name}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "data yang anda inputkan salah",
        });
        console.log(err);
      });
  };
  useEffect(() => {
    datas();
  }, []);
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
    console.log(response.data.data[0]);
    setName(response.data.data[0].name);
    setImagePreview(response.data.data[0].date_of_brith || avatar);
    setImage(response.data.data[0].date_of_brith || avatar);
    setDate_of_brith(response.data.data[0].image);
    setPhonenumber(response.data.data[0].phonenumber || null);
    setGender(response.data.data[0].gender);
    setEmail(response.data.data[0].email);
  };
  console.log(gender);
  return (
    <div className="my-bag">
      <div className="row">
        <Profil
          titleOne="My Account"
          titleTwo="My product"
          titleThere="My order"
          imgOne={home}
          imgTwo={pekage}
          imgTheree={shoping}
        />
        {/* <div className="col-lg-7 profil-form">
          <div className="card mt-3">
            <div className="card-body">
              <h3 className="title-profil">My Profile</h3>
              <p className="sub-profil text-secondary">
                Manage your profile information
              </p>
              <hr />
              <form action="" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-sm-9">
                    <div className="mb-3 mt-1 row">
                      <label
                        htmlFor="Name"
                        className="col-sm-3 col-form-label text-end text-form"
                      >
                        Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-4 row">
                      <label
                        htmlFor="email"
                        className="col-sm-3 col-form-label text-end text-form"
                      >
                        Email
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          disabled
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-4 row">
                      <label
                        htmlFor="phoneNumber"
                        className="col-sm-3 col-form-label text-end text-form"
                      >
                        Phone number
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="number"
                          value={phonenumber}
                          onChange={(e) => setPhonenumber(e.target.value)}
                          name="phone_number"
                          className="form-control"
                          id="inputPassword"
                        />
                      </div>
                    </div>
                    <div className="mb-4 row">
                      <label
                        htmlFor="gender"
                        className="col-sm-3 col-form-label text-end text-form"
                      >
                        Gender
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-check-input active"
                          type="radio"
                          name="laki-laki"
                          value="laki-laki"
                          checked={gender === "laki-laki"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          className="form-check-label text-secondary ms-2"
                          htmlFor="flexRadioDefault1"
                        >
                          laki-laki
                        </label>
                        <input
                          className="form-check-input ms-4"
                          type="radio"
                          name="perempuan"
                          value="perempuan"
                          checked={gender === "perempuan"}
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          className="form-check-label text-secondary ms-2"
                          htmlFor="flexRadioDefault1 "
                        />
                        perempuan
                      </div>
                    </div>
                    <div className="mb-4 row">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-3 col-form-label text-end text-form"
                      >
                        Date of birth
                      </label>
                      <div className="col-sm-6">
                        <input
                          value={date_of_brith}
                          onChange={(e) => setDate_of_brith(e.target.value)}
                          id="startDate"
                          className="form-control"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <div className="col-sm-9">
                        <button type="submit" className="btn btn-submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 image-profil text-center">
                    <img
                      src={imagePreview}
                      className="rounded-circle imagas-profile"
                      alt=""
                    />
                    <div className="select-avatar mt-3">
                      <div className="fileUpload btn btn-light btn-select-profil">
                        <span>Choase File</span>
                        <input
                          onChange={(e) => onImageUpload(e)}
                          names="photo"
                          type="file"
                          className="upload"
                        />
                      </div>
                      <button >Select image</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> 
        </div> */}

      </div>
    </div>
  );
};

export default EditProfil;
