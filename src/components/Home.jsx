import React from "react";
import SideBar from "./SideBar";
import "../styles/home.css";
import img from "../asset/img.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Header from "./Header";
import { auth } from "../config/firebase";

const Home = () => {
  // if (auth?.currentUser?.email == null)
  // return window.location.replace("/login");
  return (
    <>
      <Header />
      <SideBar />

      <div className="post">
        <h1>See All Feeds</h1>
        <div className="allPosts">
          <div className="postbox">
            <h3>Post Title</h3>
            <p>Post Des</p>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
              @sumedh Joshi
            </h5>
            <img src={img} alt="" />
            <div className="btns">
              <button>
                <AiFillLike />
              </button>
              <button>
                <FaCommentDots />
              </button>
            </div>
          </div>
          <div className="postbox">
            <h3>Post Title</h3>
            <p>Post Des</p>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
              @sumedh Joshi
            </h5>
            <img src={img} alt="" />
            <div className="btns">
              <button>
                <AiFillLike />
              </button>
              <button>
                <FaCommentDots />
              </button>
            </div>
          </div>
          <div className="postbox">
            <h3>Post Title</h3>
            <p>Post Des</p>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
              @sumedh Joshi
            </h5>
            <img src={img} alt="" />
            <div className="btns">
              <button>
                <AiFillLike />
              </button>
              <button>
                <FaCommentDots />
              </button>
            </div>
          </div>
          <div className="postbox">
            <h3>Post Title</h3>
            <p>Post Des</p>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
              @sumedh Joshi
            </h5>
            <img src={img} alt="" />
            <div className="btns">
              <button>
                <AiFillLike />
              </button>
              <button>
                <FaCommentDots />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
