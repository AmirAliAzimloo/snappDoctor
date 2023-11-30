import Footer from "../components/Footer";
import Header from "../components/Header/Index";
import Categories from "./components/Categories/Categories";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <Header />
      <main className="container">
           
    <section className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-5 py-5 ">
      
      <Categories/>
        {children}
   
     </section>
      </main>
      <Footer />
    </>
  );
}
