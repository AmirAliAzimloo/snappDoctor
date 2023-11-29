const MobileCategories = () => {
    return (
        <aside className="w-full px-5 py-2 md:hidden flex justify-start items-center gap-4 ">
        <div className="inline">filter</div>
        <div className="flex-1 overflow-x-scroll w-full">
          <div className="w-fit flex justify-start items-center gap-3">
            {[1, 2, 3, 4, 5].map((it) => (
              <div
                className="bg-neutral-400/60 h-6 rounded-lg animate-pulse w-[85px]"
                key={it}
              ></div>
            ))}
          </div>
        </div>
      </aside>
    );
  };
  
  export default MobileCategories;
  