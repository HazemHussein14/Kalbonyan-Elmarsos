import { useState } from "react";
import { Navbar, Tasks, EditUserForm } from "../components";

const Home = () => {
  const [editUser, setEditUSer] = useState(false);

  const handleEditUserForm = (val) => {
    setEditUSer(val);
  };
  return (
    <main className="relative">
      <Navbar editUser={handleEditUserForm}/>
      {editUser ? <EditUserForm cancelEdit={handleEditUserForm} /> : <Tasks />}
    </main>
  );
};
export default Home;
