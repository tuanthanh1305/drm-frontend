import React from 'react';
import Header from '../components/training-office/header';
import Sidebar from '../components/training-office/Sidebar';
import Main from '../components/training-office/Main';
import Pagination from '../components/training-office/Pagination';

const TrainingOfficePage = () => {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <div className='flex-1 flex flex-col'>
            <Header />
            <Main/>
            <Pagination />
        </div>
    </div>
  );
};

export default TrainingOfficePage;