import React, { useState } from "react";

function UserAddress() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Kathiravan", address: "Chennai, Tamil Nadu" },
  ]);

  const [add, setAdd] = useState("");

  const handleAdd = () => {
    setAddresses([...addresses, { id: Date.now(), name: "User", address: add }]);
    setAdd("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Address</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          className="border p-2 w-full mb-3"
          placeholder="Add New Address"
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add Address
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {addresses.map((a) => (
          <div key={a.id} className="border-b py-3">
            <p>{a.name}</p>
            <p>{a.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserAddress;
