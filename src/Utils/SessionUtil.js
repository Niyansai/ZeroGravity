
  const logout = async (his) => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user"); 

    his.push("/home");
  }

 export { logout };