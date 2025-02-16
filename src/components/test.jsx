import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';

const AllLinks = () => {

  const { user, setUser } = useContext(UserContext);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const getAllLinks = async () => {
    try{
      console.log(user);
      const response = await axios.post(`${BACKEND_URL}/links`, { username: user.username });
      console.log(response.data);

    }catch(err){
      console.log(err);
    }
  };

  useEffect(() => {
    getAllLinks();
  },[]);

  const token = sessionStorage.getItem("token");
  if (!token) {
    return <div>Please log in to view this page</div>;
  }

  return (
    <div>allLinks</div>
  );
};

export default AllLinks;
