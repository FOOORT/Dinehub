import React from "react";

const HistoryTable = () => {
  return (
    <div className="w-full mt-4 border rounded-2xl">
      <table class="table-auto w-full">
        <thead className="text-slate-600 w-full rounded-2xl">
          <tr className="grid grid-cols-7 bg-slate-100 rounded-t-2xl">
            <th className="p-2 px-6 text-left">#</th>
            <th className="p-2 px-6 border text-left">Date & Time</th>
            <th className="p-2 px-6 border text-left">Amount</th>
            <th className="p-2 px-6 border text-left">Items</th>
            <th className="p-2 px-6 border text-left">Order number</th>
            <th className="p-2 px-6 border text-left">Items cost</th>
            <th className="p-2 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="grid grid-cols-7">
            <td className="border p-2 px-6">1</td>
            <td className="border p-2 px-6">
              28 May 2023 .<p className="text-sm">18:26am</p>
            </td>
            <td className="border p-2 px-6">
              <button className="bg-black text-white rounded-lg px-6 py-2 text-xs">
                90 rwf
              </button>
            </td>
            <td className="border p-2 px-6">Premium</td>
            <td className="border p-2 px-6">#9861</td>
            <td className="border p-2 px-6">64,000 rwf</td>
            <td className="border p-2 px-6">
              <button className="bg-green-200 rounded-lg px-6 py-2 text-xs">
                Paid
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-7">
            <td className="border p-2 px-6">2</td>
            <td className="border p-2 px-6">28 May 2023 . 18:26am</td>
            <td className="border p-2 px-6">
              <button className="bg-black text-white rounded-lg px-6 py-2 text-xs">
                90 rwf
              </button>
            </td>
            <td className="border p-2 px-6">Premium</td>
            <td className="border p-2 px-6">#9861</td>
            <td className="border p-2 px-6">64,000 rwf</td>
            <td className="border p-2 px-6">
              <button className="bg-green-200 rounded-lg px-6 py-2 text-xs">
                Paid
              </button>
            </td>
          </tr>
          <tr className="grid grid-cols-7 bg-blue-50 rounded-b-2xl">
            <td className="p-2 px-6">3</td>
            <td className="p-2 border px-6">28 May 2023 . 18:26am</td>
            <td className="p-2 border px-6">
              <button className="bg-black text-white rounded-lg px-6 py-2 text-xs">
                90 rwf
              </button>
            </td>
            <td className="p-2 border px-6">Normal</td>
            <td className="p-2 border px-6">#9861</td>
            <td className="p-2 border px-6">64,000 rwf</td>
            <td className="p-2 px-6">
              <button className="bg-red-200 rounded-lg px-6 py-2 text-xs">
                Paid
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
