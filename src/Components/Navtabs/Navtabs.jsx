import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navtabs() {
    const [tabs,setTabs] =  useState(null)
     async function getData(){
        let {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setTabs(data.categories);
    }
    useEffect(()=>
        {
            getData()
    },[])
  return (
        <ul className="sm:flex hidden mt-8 flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className='me-2'><NavLink className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50" data-discover="true"  to={"/categories"} end>All</NavLink></li>
          {tabs?.map((tab)=>{return (<li className='me-2' key={tab.idCategory}><NavLink className="inline-block catLink px-4 py-2 border transition-all hover:shadow-xl shadow duration-300 rounded-full hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300" data-discover="true"  to={"/categories/"+tab.strCategory}>{tab.strCategory}</NavLink></li>)})}
        </ul>
  )
}
