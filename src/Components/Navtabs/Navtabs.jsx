import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navtabs() {
  const [tabs, setTabs] = useState(null);
  const navigate = useNavigate();

  async function getData() {
    let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setTabs(data.categories);
  }

  useEffect(() => {
    getData();
  }, []);

  function handleSelect(e) {
    const value = e.target.value;
    if (value === "All") {
      navigate("/categories");
    } else {
      navigate(`/categories/${value}`);
    }
  }

  return (
    <>
      {/* Small screens */}
      <div className="sm:hidden mt-8">
        <label htmlFor="tabs" className="sr-only">Select Category</label>
        <select
          id="tabs"
          onChange={handleSelect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="All">All</option>
          {tabs?.map(tab => (
            <option key={tab.idCategory} value={tab.strCategory}>
              {tab.strCategory}
            </option>
          ))}
        </select>
      </div>

      {/* Big screens */}
      <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className='me-2'>
          <NavLink
            className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50"
            to={"/categories"}
            end
          >
            All
          </NavLink>
        </li>
        {tabs?.map(tab => (
          <li className='me-2' key={tab.idCategory}>
            <NavLink
              className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              to={`/categories/${tab.strCategory}`}
            >
              {tab.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
