import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex mt-[70px]">
      <Sidebar />

      {children}
    </main>
  );
}
