import Footer from "../components/Footer";
import Header from "../components/Header/Index";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <Header />
      <main className="container">
        {children}
      </main>
      <Footer />
    </>
  );
}
