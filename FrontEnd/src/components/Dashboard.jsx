// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const users = [
    { username: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { username: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { username: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Editor' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">User Management</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Username
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
