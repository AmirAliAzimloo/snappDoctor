import Searchbar from "../Searchbar";


const Header: React.FC = () => {
  return (
    <>
      <header
        className={
          "w-full py-5 px-5  bg-white sticky top-0 left-0 shadow-md z-50 "
        }
      >
        <nav className="flex justify-between items-center container" >
          <span className="">Store App</span>
          <div className="md:min-w-[300px]">
            <Searchbar />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
