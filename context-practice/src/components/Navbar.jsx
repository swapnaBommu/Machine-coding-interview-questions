import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {user && <button onClick={logout}>Logout</button>}
    </>
  );
};