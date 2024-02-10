import React from "react";
import SideBar from "./SideBar";
import "../styles/home.css";
import img from "../asset/img2.jpeg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Header from "./Header";
import { auth } from "../config/firebase";

const ComplentBox = () => {
  const current = auth?.currentUser?.email;
  return (
    <>
      <Header />
      <SideBar />

      <div className="post">
        <h1>Complaint Box</h1>
        <br />
        {/* Cerate Notice */}
        <a href="/createcomplaint ">
          <button className="button">Create Complaint</button>
        </a>
        <div className="allPosts">
          <div className="postbox">
            <h3>Complaint Title </h3>
            <p>Complaint Des</p>
            
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Complaint Title2 </h3>
            <p>Complaint Des</p>
            
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Complaint Title 3</h3>
            <p>Complaint Des</p>
            
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Complaint Title 4</h3>
            <p>Complaint Des</p>
            
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ComplentBox;
