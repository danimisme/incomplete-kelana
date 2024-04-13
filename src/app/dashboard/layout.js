import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Dhashboard of Kelana",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}
