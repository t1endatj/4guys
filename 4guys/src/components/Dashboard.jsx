import React, { useState } from 'react';

const SAMPLE_TASKS = [
  { id: 1, name: 'Thiết kế UI trang chủ', deadline: '15/11/2025', status: 'in-progress', priority: 'high' },
  { id: 2, name: 'Xây dựng component Button', deadline: '18/11/2025', status: 'todo', priority: 'medium' },
  { id: 3, name: 'Viết unit test cho Form', deadline: '20/11/2025', status: 'todo', priority: 'low' },
  { id: 4, name: 'Code review API integration', deadline: '14/11/2025', status: 'completed', priority: 'high' },
  { id: 5, name: 'Tối ưu performance', deadline: '22/11/2025', status: 'todo', priority: 'medium' },
];

export default function Dashboard({ project, internData }) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [tasks] = useState(SAMPLE_TASKS);

  const getStatusBadge = (status) => {
    const statusConfig = {
      'todo': { label: 'Chưa làm', className: 'bg-gray-200 text-gray-700' },
      'in-progress': { label: 'Đang làm', className: 'bg-blue-100 text-blue-700' },
      'completed': { label: 'Hoàn thành', className: 'bg-green-100 text-green-700' },
    };
    const config = statusConfig[status] || statusConfig.todo;
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      'high': { label: 'Cao', className: 'bg-red-100 text-red-700' },
      'medium': { label: 'Trung bình', className: 'bg-yellow-100 text-yellow-700' },
      'low': { label: 'Thấp', className: 'bg-gray-100 text-gray-600' },
    };
    const config = priorityConfig[priority] || priorityConfig.medium;
    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-blue-400">My Project</h2>
          {project && (
            <p className="text-sm text-gray-400 mt-1 truncate">{project.name}</p>
          )}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveMenu('task')}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              activeMenu === 'task' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span className="font-semibold">📋 Task</span>
          </button>

          <button
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              activeMenu === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span className="font-semibold">📊 Dashboard</span>
          </button>

          <button
            onClick={() => setActiveMenu('mentor')}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${
              activeMenu === 'mentor' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span className="font-semibold">🤖 Mentor AI</span>
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {internData?.name?.charAt(0).toUpperCase() || 'I'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{internData?.name || 'Intern'}</p>
              <p className="text-xs text-gray-400">{internData?.role || 'Developer'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeMenu === 'dashboard' && '📊 Dashboard'}
              {activeMenu === 'task' && '📋 Danh sách Task'}
              {activeMenu === 'mentor' && '🤖 Mentor AI'}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {project && `Dự án: ${project.name}`}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-500">Thời hạn còn lại</p>
              <p className="text-lg font-bold text-blue-600">24h 12/11/2025</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
              <span className="text-xl">👤</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden p-4">
          {activeMenu === 'dashboard' && (
            <div className="h-full flex flex-col space-y-3">
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 shrink-0">
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-500">Tổng Task</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{tasks.length}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-500">Hoàn thành</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {tasks.filter(t => t.status === 'completed').length}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-500">Đang làm</p>
                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    {tasks.filter(t => t.status === 'in-progress').length}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-500">Chưa làm</p>
                  <p className="text-3xl font-bold text-gray-600 mt-2">
                    {tasks.filter(t => t.status === 'todo').length}
                  </p>
                </div>
              </div>

              {/* Task Table */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex-1 flex flex-col min-h-0">
                <div className="p-4 border-b border-gray-200 bg-gray-50 shrink-0">
                  <h2 className="text-lg font-semibold text-gray-900">Danh sách Task</h2>
                </div>
                <div className="flex-1 overflow-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tên Task</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Thời hạn</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Độ ưu tiên</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Trạng thái</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {tasks.map((task) => (
                        <tr key={task.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{task.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{task.deadline}</td>
                          <td className="px-6 py-4 text-sm">{getPriorityBadge(task.priority)}</td>
                          <td className="px-6 py-4 text-sm">{getStatusBadge(task.status)}</td>
                          <td className="px-6 py-4 text-sm">
                            <button className="text-blue-600 hover:text-blue-800 font-medium mr-3 hover:underline">Chi tiết</button>
                            <button className="text-gray-600 hover:text-gray-800 font-medium hover:underline">Sửa</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'task' && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
              <div className="p-6 border-b border-gray-200 shrink-0">
                <h2 className="text-xl font-semibold text-gray-900">Quản lý Task</h2>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <p className="text-gray-500">Khu vực quản lý task chi tiết đang được phát triển...</p>
              </div>
            </div>
          )}

          {activeMenu === 'mentor' && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
              <div className="p-6 border-b border-gray-200 shrink-0">
                <h2 className="text-xl font-semibold text-gray-900">Mentor AI</h2>
              </div>
              <div className="flex-1 overflow-auto p-6">
                <p className="text-gray-500">Tính năng hỗ trợ AI Mentor đang được phát triển...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
