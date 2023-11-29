const DesktopCategories = () => {
  return (
    <aside className="hidden md:block w-1/4 py-5 px-3 bg-white rounded-lg shadow-lg sticky top-[calc(80px+1rem)] bottom-0 ">
      <div className="flex flex-col items-start justify-start ">
        <h1 className="text-2xl">filter</h1>
        <h3 className="text-lg">categories:</h3>
        <ul className="w-1/2 gap-2 pl-4 flex flex-col mt-4 ">
          {/* {categories.map((cate) => (
              <li key={cate.id} className="w-full rounded-lg  ">
                {cate.label}
              </li>
            ))} */}

          <li className="w-full rounded-lg  ">aaaa</li>

          <li className="w-full rounded-lg  ">aaaa</li>
        </ul>
      </div>
    </aside>
  );
};

export default DesktopCategories;
