import CategoryList from "../category/CategoryList";

const Sidebar = () => {
  return (
    <div
      className=" 
      hidden 
      md:block
      md:w-96 
      max-h-screen
      w-screen 
      transition-all
      duration-75 
      overflow-x-hidden
      overflow-y-scroll
      scrollbar-thin 
    scrollbar-thumb-gray-300
      scrollbar-thumb-rounded-xl
        "
    >
      <CategoryList
        categorys={[
          { id: "1", name: "a" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
          { id: "2", name: "b" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
