import React, { useState } from "react";
import users from "./student_filter_card";

const FilterCards = () => {
  const [userId, setUserId] = useState(users.filter((item) => item.id === 1));
  const [isActive, setIsActive] = useState(1);

  const [searchInput, setSearchInput] = useState("");

  //dark mode 
const [isDark, setIsDark] = useState(false);

  //handle active student option
  const handleActive = (idNm) => {
    // setIsActive(!isActive)
    setIsActive(idNm);
  };

  //filter studen info
  const handleFilter = (idNm) => {
    const filteredUser = users.filter((item) => item.id === idNm);
    setUserId(filteredUser);
    handleActive(idNm);
  };

  //search user using find, Search input being in any case but not suffled
  const searchUser = users.find(
    (item) =>
      item.name === searchInput ||
      item.name === searchInput[0]?.toUpperCase() + searchInput.slice(1) ||
      item.name ===
        searchInput[0]?.toUpperCase() + searchInput.slice(1).toLowerCase()
  );

  // opens profile of found user on pressing Enter key
  const handleSearchEnter = (e) => {
    try{
        if (e.key === "Enter" ) {
            handleFilter(searchUser.id);
            setSearchInput("")
    }

    }
    
    catch{
         alert(`We did not find ' ${searchInput} '.`);
         setSearchInput("")
    }
    
  };

  //handle DarkMode

  const handleDarkMode = ()=>{
    setIsDark(!isDark)
  }


  return (
    <div className="center  h-screen">
      <div className=" mt-12  h-[350px] md:h-[400px] w-[350px] md:w-[450px] text-sm md:text-base font-semibold flex  rounded-lg shadow-[1px_5px_46px_41px_#90cdf4] ">
        <div className={`filters border-r-2 border-red-500 w-[100px] md:min-w-[120px] p-2    rounded-l-lg text-xs md:text-base ${isDark ? "bg-slate-700" : "bg-blue-400"} relative`}>
          {/* search box */}
          <div className="h-fit font-normal absolute top-2">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              onKeyDown={handleSearchEnter}
              className="w-[80%] rounded-md px-1"
            />

            {searchUser && (
              <div
                onClick={() => handleFilter(searchUser.id)}
                className="bg-green-500 text-white p-2 rounded-md text-center ">
                {searchInput} found!
                <div className="">ID : {searchUser.id}</div>
              </div>
            )}

            {/* profile buttons */}
          </div>
          <div className="mt-7  flex h-[90%] p-2  flex-col gap-3 overflow-y-auto ">
            {users.map((item) => {
              return (
                <div
                  onClick={() => handleFilter(item.id)}
                  className={` border-2 border-black px-1 md:px-2 py-1 text-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 rounded-sm  ${
                    isActive === item.id ? "bg-green-300" : "bg-blue-200"
                  }`}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        {/* mapped out profile */}
        <div className={` p-2 pl-10  w-[80%]  rounded-r-lg relative ${isDark ? "bg-slate-800 text-white " : "bg-blue-400"} `}>
          <div onClick={handleDarkMode} className="absolute top-1 right-5">{isDark ? <i class="fa-regular fa-sun fa-fade"></i>:<i class="fa-regular fa-moon fa-fade"></i>}</div>
          <div className="">
            {userId.map((item) => {
              return (
                <div key={item.id}>
                  <div className="img ">
                    <img
                      src={item.img}
                      alt=""
                      className="h-36 hover:scale-105 transition-all ease-in-out duration-500"
                    />
                  </div>
                  <div className="id hover:text-blue-600 hover:bg-blue-200 px-1 rounded-md">ID : {item.id}</div>
                  <div className=" hover:text-blue-600 hover:bg-blue-200 px-1 mt-1 rounded-md">Name : {item.name}</div>
                  <div className="age hover:text-blue-600 hover:bg-blue-200 px-1 mt-1 rounded-md">Age : {item.age}</div>
                  <div className="sem hover:text-blue-600 hover:bg-blue-200 px-1 mt-1 rounded-md">Sem : {item.sem}</div>
                  <div className="college hover:text-blue-600 hover:bg-blue-200 px-1 mt-1 rounded-md">College : {item.college}</div>
                  <div className="email hover:text-blue-600 hover:bg-blue-200 px-1 mt-1 rounded-md">Email : {item.email}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCards;
