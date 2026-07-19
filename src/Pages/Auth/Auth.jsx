import React, { useContext, useState } from "react";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import LayOut from "../../Components/LayOut/LayOut";
import LogoImage from "../../assets/Amazon_signIn_Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Type } from "../../Utility/actions.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name == "signIn") {
      // firestore auth crediantial
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setLoading({ ...loading, signIn: false });
          setError(err.message);
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        //fireStore auth create account
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <div className="flex items-center flex-col h-[100vh]">
      <Link to="/">
        <img
          className=" my-8 mx-auto object-contain w-[200px]"
          src={LogoImage}
          alt=""
        />
      </Link>
      <div className="w-[350px] flex flex-col rounded-[5px] p-5 border-2 border-gray-300">
        <h2 className="text-[25px] my-5 mx-0 font-bold">Sign In</h2>
        {navStateData?.state?.msg && (
          <small className="p-[5px] font-bold text-center text-red-600">
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="" className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-2.5">
            <label htmlFor="">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name=""
              id=""
              className="border border-[#d3d3d3] mb-2.5 py-2 px-4 bg-white rounded-[3px] focus:outline-sky-300"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name=""
              id=""
              className="border border-[#d3d3d3] mb-2.5 py-2 px-4 bg-white rounded-[3px] focus:outline-sky-300"
            />
          </div>
          <button
            onClick={authHandler}
            name="signIn"
            type="submit"
            className="bg-[#f0c14b] hover:bg-[#d49644] border-none rounded-[5px] w-full mt-2.5 h-[30px] cursor-pointer"
          >
            {loading.signIn ? <ClipLoader size={15} /> : "Sign In"}
          </button>
        </form>
        <p className="py-2.5 text-[14px]">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          onClick={authHandler}
          name="signUp"
          type="submit"
          className="border-none rounded-[5px] w-full h-[30px] mt-2.5 cursor-pointer hover:bg-[#d3d3d3]"
        >
          {" "}
          {loading.signUp ? (
            <ClipLoader size={15} />
          ) : (
            "Create your Amazon Acount"
          )}
        </button>
        {error && (
          <small className="text-red-500 pt-[5px] font-bold">{error}</small>
        )}
      </div>
    </div>
  );
}

export default Auth;
