import React from 'react'
import Sidebar from '../components/department-head/Sidebar'
import Header from '../components/department-head/Header'
import FilterTable from '../components/department-head/FilterTable'
import Pagination from '../components/department-head/Pagination'

const DepartmentHeadPage = () => {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
            <Header />
            <FilterTable/>
            <Pagination />
        </div>
    </div>
  )
}

export default DepartmentHeadPage