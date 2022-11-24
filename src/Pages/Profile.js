import React from 'react'
import Footer from '../components/module/home/footer/Footer'
import Navbar from "../components/module/home/navbar/Navbar";
import EditProfil from '../components/module/profile/EditProfil'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <EditProfil />
      <Footer />
    </div>
  );
}

export default Profile