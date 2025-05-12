import { useState } from 'react';
import { FaPencilAlt, FaTrash, FaUser, FaPhone, FaMapMarkerAlt, FaBuilding, FaSignal, FaTools } from 'react-icons/fa';
import usersData from '../data/users';

export default function UserTable() {
  const [users, setUsers] = useState(usersData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = editedUser;
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  return (
    <div className="bg-[#14133c] mr-8 ml-4 rounded-lg border border-gray-600">
      <div className="text-white text-lg font-bold mb-4 ml-4 mt-4">All Users</div>
      <hr className="border-t border-gray-600 mb-4" />
      <table className="w-full text-sm ml-4">
        <thead>
          <tr className="text-left text-md bg-[#14133c] text-white">
           <th className="p-3 pl-10">
  <span className="flex items-center gap-1">
    <FaUser />
    Name
  </span>
</th>
<th className="p-3">
  <span className="flex items-center gap-1">
    <FaPhone />
    Phone
  </span>
</th>
<th className="p-3">
  <span className="flex items-center gap-1">
    <FaMapMarkerAlt />
    Location
  </span>
</th>
<th className="p-3">
  <span className="flex items-center gap-1">
    <FaBuilding />
    Company
  </span>
</th>
<th className="p-3">
  <span className="flex items-center gap-1">
    <FaSignal />
    Status
  </span>
</th>
<th className="p-3">
  <span className="flex items-center gap-1">
    <FaTools />
    Actions
  </span>
</th>

          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className={
                i % 2 === 0
                  ? "bg-[#0c2040] hover:bg-[#475569]"
                  : "bg-[#14133c] hover:bg-[#475569]"
              }
            >
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600 mr-3" />
                  <img
                    src={u.profileImage || 'default-profile.png'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    {editingIndex === i ? (
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                        className="bg-[#1e293b] text-white p-2 rounded"
                      />
                    ) : (
                      <span>{u.name}</span>
                    )}
                    <span className="text-sm text-gray-400">{u.email}</span>
                  </div>
                </div>
              </td>
              <td className="p-3">
                {editingIndex === i ? (
                  <input
                    type="text"
                    value={editedUser.phone}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, phone: e.target.value })
                    }
                    className="bg-[#1e293b] text-white p-2 rounded"
                  />
                ) : (
                  u.phone
                )}
              </td>
              <td className="p-3">
                {editingIndex === i ? (
                  <input
                    type="text"
                    value={editedUser.location}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, location: e.target.value })
                    }
                    className="bg-[#1e293b] text-white p-2 rounded"
                  />
                ) : (
                  u.location
                )}
              </td>
              <td className="p-3">
                {editingIndex === i ? (
                  <input
                    type="text"
                    value={editedUser.company}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, company: e.target.value })
                    }
                    className="bg-[#1e293b] text-white p-2 rounded"
                  />
                ) : (
                  u.company
                )}
              </td>
              <td className="p-3">
                {editingIndex === i ? (
                  <select
                    value={editedUser.status}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, status: e.target.value })
                    }
                    className="bg-[#1e293b] text-white p-2 rounded"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                ) : (
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      u.status === 'Online' ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                  >
                    {u.status}
                  </span>
                )}
              </td>
              <td className="p-3 space-x-2">
                {editingIndex === i ? (
                  <button
                    onClick={handleSave}
                    className="text-green-400 hover:text-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(i)}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaPencilAlt />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(i)}
                  className="text-red-400 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-white ml-5 text-sm flex justify-between items-center">
        <span>1-10 of 460 pages</span>
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <select
            className="bg-[#1e293b] text-white p-1 mr-13 rounded"
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            {[10, 20, 30, 50].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button className="text-gray-400 hover:text-white text-xl mr-3 font-bold">←</button>
          <button className="text-gray-400 hover:text-white text-xl mr-10 font-bold">→</button>
        </div>
      </div>
      
      <div className="mt-6 ml-5">
        <button
          onClick={() => setShowAddUserModal(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {showAddUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#1e293b] p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold text-white mb-4">Add New User</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-2 mb-4 bg-[#334155] text-white rounded border border-gray-600"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddUserModal(false)}
                className="text-gray-300 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Add user logic here
                  setShowAddUserModal(false);
                }}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
