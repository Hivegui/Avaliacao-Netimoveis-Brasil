import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import React from 'react'
import Footer from '../components/Footer'

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}
          <main>
            <div className="mx-auto w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
