import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Home = () => {
  const info = useContext(AuthContext);
  return (
    <div>
      <h2>My Name : {info.name}</h2>
    </div>
  );
};

export default Home;
