import { QRCodeCanvas as QRCode } from "qrcode.react";

function ResultCard({ data }) {
  const paymentString = `mpesa://pay?till=${data.till}`;

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-2xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-black font-bold text-lg">
          {data.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-white font-bold text-lg">{data.name}</h2>
          <p className="text-gray-400 text-sm">{data.type}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gray-900 rounded-xl p-3">
          <p className="text-gray-500 text-xs mb-1">Till Number</p>
          <p className="text-white font-bold">{data.till}</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-3">
          <p className="text-gray-500 text-xs mb-1">Category</p>
          <p className="text-white font-bold">{data.category}</p>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white rounded-xl p-4 mb-4">
        <QRCode value={paymentString} size={140} />
        <p className="text-gray-500 text-xs mt-2">Scan to pay</p>
      </div>

      <button
        onClick={() => navigator.clipboard.writeText(data.till)}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl text-sm font-medium transition-colors"
      >
        Copy Till Number
      </button>
    </div>
  );
}

export default ResultCard;
