import React, { useState } from 'react';

const TASK_ROLES = [
  { id: 'frontend', label: 'Frontend Developer' },
  { id: 'backend', label: 'Backend Developer' },
  { id: 'data', label: 'Data/QA Analyst' },
];

function Homepage({ onStartInternship }) { 
    const [name, setName] = useState('');
    const [selectedRole, setSelectedRole] = useState(TASK_ROLES[0].id);

    const handleStart = () => {
        if (name.trim() === '') {
            alert('Vui lòng nhập tên của bạn!');
            return;
        }
        // Dùng onStartInternship để chuyển sang Dashboard chính thức
        // if (onStartInternship) onStartInternship({ name, role: selectedRole }); 
        alert(`Bắt đầu thực tập: ${name} (${selectedRole}).`);
    };

    return (
        <div 
            className="min-h-screen w-full relative flex items-center justify-center p-4 sm:p-8"
            style={{
                background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
                backgroundAttachment: "fixed", 
            }}
        >
            {/* CARD */}
            <div className="w-full max-w-xl bg-gray-900/90 border border-gray-700 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                
                {/* Header (Title) */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400">
                        Chào mừng Intern!
                    </h1>
                </div>

                {/* Content Area */}
                <div className="space-y-6">
                    <p className="text-center text-gray-300 text-lg">
                        Mentor AI đã sẵn sàng. Hãy chọn vai trò của bạn để bắt đầu chương trình.
                    </p>

                    {/* 1. Nhập Tên (Input) */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-gray-300 font-semibold">
                            Tên của bạn:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 outline-none placeholder-gray-400"
                            placeholder="Nguyen Van A"
                        />
                    </div>

                    {/* 2. Chọn Vị trí/Role (SELECT DROPDOWN) */}
                    <div className="space-y-2">
                        <label htmlFor="role-select" className="block text-gray-300 font-semibold">
                            Vị trí thực tập:
                        </label>
                        <div className="relative">
                            <select
                                id="role-select"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="w-full appearance-none p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 transition duration-300 outline-none pr-10 cursor-pointer"
                            >
                                {TASK_ROLES.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.label}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={handleStart} 
                        className="w-full py-4 bg-green-900 hover:bg-green-700 text-lg font-bold text-white rounded-lg transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 mt-6"
                        disabled={name.trim() === ''}
                    >
                        Bắt đầu Kỳ thực tập
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;