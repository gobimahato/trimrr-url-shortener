import { Outlet } from "react-router-dom";

import Header from "@/components/home/header";
import Footer from "@/components/home/footer";

const AppLayout = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Header />

      <main className="min-h-screen ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
