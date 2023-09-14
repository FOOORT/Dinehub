import React from 'react'
import ReserveOption from '../common/reserveoption';
import ReserveDigits from '../common/reservedigits';
import ReserveAction from '../common/reserveaction';

const ReserveNow = () => {
  return (
    <div className="w-full flex flex-col p-6 bg-slate-100 rounded-lg">
      <h2 className="font-bold text-lg border-b pb-2 mb-2">Reserve now</h2>
      <div className="w-full flex justify-between mt-2 gap-4 items-center">
        <ReserveOption />
        <div className="hidden md:block">
          <ReserveDigits />
        </div>
        <ReserveAction />
      </div>
      <div className="md:hidden flex justify-center items-center w-full py-4 border rounded-lg mt-2">
        <ReserveDigits />
      </div>
    </div>
  );
};

export default ReserveNow