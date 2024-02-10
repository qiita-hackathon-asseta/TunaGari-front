import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Top } from "../pages/Top";
import Template from "../components/Template";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";
const auth = getAuth(app);

const Secret = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user){
        navigate("/login")
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path="/home" element={<Top />} />
      </Route>
    </Routes>
  );
};

export default Secret;