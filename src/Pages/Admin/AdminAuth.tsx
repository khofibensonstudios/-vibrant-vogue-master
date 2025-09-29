import { useState } from "react";
import { useNavigate } from "react-router";

export const AdminAuth = () => {
  const [secretCode, setSecretCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validSecretCode = "vvvogue@25";//Will come back for this

    if (secretCode === validSecretCode) {
      navigate("manage");
    } else {
      setError("Invalid secret code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center py-20  bg-white dark:bg-black">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Enter Secret Code
          </label>
          <input
            type="password"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Enter code..."
          />

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 cursor-pointer w-full bg-appOrange hover:bg-appOrange text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
