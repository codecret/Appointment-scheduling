import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useGetAuth } from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

const Layout = () => {
  console.log("layout");
  const {
    data: user,
    isLoading,
    isFetching,
  } = useGetAuth({ state: "protected" });
  console.log("user");
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <main className="dashboard-container">
      <div className="sidebar-left-column">
        <Sidebar />
      </div>

      <div className="dashboard-right-column">
        <NavBar user={user} />
        <Outlet context={user} />
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </div>
    </main>
  );
};

export default Layout;
