import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const friendsName = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>

          {success ? (
            <div className="p-6 text-center text-green-600 font-semibold text-lg">
              ✅ Payment of ₹{amount} to {friendsName} is done!
            </div>
          ) : (
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">
                    {friendsName[0].toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{friendsName}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="amount"
                  >
                    Amount (in Rs)
                  </label>
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    id="amount"
                    placeholder="Enter amount"
                  />
                </div>
                <button
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                  onClick={() => {
                    // Simulate success
                    setTimeout(() => {
                      setSuccess(true);
                    }, 500); // optional delay for realism
                  }}
                >
                  Initiate Transfer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
