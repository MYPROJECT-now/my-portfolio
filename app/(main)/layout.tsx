  "use client";

  import Loading_screen from "@/components/load/loading_screen";
  import Header from "@/components/main_components/Header";
  import { useEffect, useState } from "react";

  type props = {
    children: React.ReactNode;
  };

  const MainLayout = ({ children }: props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Loading_screen />;
    }

    return (
      <div className="flex  justify-center bg-linear-to-b from-[#091325] to-[#0e2f56]">
        {/* <Loading_screen /> */}
          <main className="min-h-screen flex flex-col w-full  ">
            <Header />
            <div className="flex-1 mt-20">
              {children}
              </div>
          </main>
      </div>
    );
  };

  export default MainLayout;
