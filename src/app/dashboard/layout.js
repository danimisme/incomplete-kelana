import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/BootstrapClient";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import { StoreProvider } from "@/redux/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dhashboard of Kelana",
};

export default function DashboardLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <Sidebar />
          <BootstrapClient />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
