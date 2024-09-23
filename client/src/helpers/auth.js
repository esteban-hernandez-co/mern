const authHeader = () => {
    // return authorization header with jwt token
    const user = JSON.parse(localStorage.getItem("klezmer_user"));
    if (user && user.token) {
      // console.log(`Bearer ${user.token}`);
      return { Authorization: `Bearer ${user.token}` };
    }
    return {};
  };
  
  export default authHeader;
  