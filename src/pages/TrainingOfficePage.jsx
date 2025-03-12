import React from 'react';
import Header from '../components/training-office/header';
import Sidebar from '../components/training-office/Sidebar';
import Main from '../components/training-office/Main';

import Slidebar from '../components/common/SLidebar';
import Headers from '../components/common/Header';

const TrainingOfficePage = () => {
  return (
    <div className='flex h-screen'>
        <Slidebar/>
        <div className='flex-1 flex flex-col'>
            <Headers/>
            <Main/>
            
        </div>
    </div>
  );
};

export default TrainingOfficePage;