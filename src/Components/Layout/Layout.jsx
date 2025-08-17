import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Navtabs from './../Navtabs/Navtabs';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Layout() {
  const location = useLocation();

  // check if current route is a meal details page
  const isDetailsPage = location.pathname.startsWith("/mealdetails");

  return (
    <>
      <Sidebar/>
      <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
        <div className="container py-8 px-4">
          {/* show only if NOT details page */}
          {!isDetailsPage && (
            <>
              <h1 className="text-4xl font-bold text-hero text-transparent bg-clip-text">
                Learn, Cook, Eat Your Food
              </h1>
              <Navtabs/>
            </>
          )}

          <Outlet />  
        </div>
      </div>
      <Footer/>
    </>
  )
}

