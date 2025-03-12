import React from 'react';
import Main from '../components/training-office/Main';
import Headers from '../components/common/Headers';
import Slidebar from '../components/common/Slidebar';





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