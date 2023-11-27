import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full ">
      <Sidebar />

      {children}
    </div>
  );
}
