import React, { useState } from "react";

export default function Info({ allProjects = [], selectedProject = null, onProjectClick }) {
  const [activeTab, setActiveTab] = useState("all");
  const [modalProject, setModalProject] = useState(null);

  const projectsToShow = activeTab === "all" ? allProjects : selectedProject ? [selectedProject] : [];

  const handleCardClick = (project) => {
    if (activeTab === 'my') {
      if (typeof onProjectClick === 'function') {
        onProjectClick(project);
      }
    } else {
      setModalProject(project);
    }
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-xl p-6 shadow-md">
        <div className="text-right text-blue-500 font-bold mb-4">TRANG INFO</div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 min-h-[100px] rounded-lg border border-blue-100 flex flex-col items-center justify-center bg-linear-to-b from-white to-blue-50">
            <div className="text-2xl font-bold text-slate-900">75%</div>
            <div className="text-xs text-slate-500 uppercase mt-1">TIẾN BỘ</div>
          </div>

          <div className="flex-1 min-h-[100px] rounded-lg border border-blue-100 flex flex-col items-center justify-center bg-linear-to-b from-white to-blue-50">
            <div className="text-2xl font-bold text-slate-900">12/20</div>
            <div className="text-xs text-slate-500 uppercase mt-1">SỐ TASK</div>
          </div>

          <div className="flex-1 min-h-[100px] rounded-lg border border-blue-100 flex flex-col items-center justify-center bg-linear-to-b from-white to-blue-50">
            <div className="text-2xl font-bold text-slate-900">45 NGÀY</div>
            <div className="text-xs text-slate-500 uppercase mt-1">THỜI GIAN THỰC TẬP CÒN LẠI</div>
          </div>
        </div>


        <div>
          <div className="flex gap-6 mb-3">
            <button
              onClick={() => setActiveTab("all")}
              className={`font-semibold ${activeTab === "all" ? "text-blue-500 border-b-4 border-blue-100 pb-1" : "text-slate-500"}`}>
              ALL PROJECTS
            </button>
            <button
              onClick={() => setActiveTab("my")}
              className={`font-semibold ${activeTab === "my" ? "text-blue-500 border-b-4 border-blue-100 pb-1" : "text-slate-500"}`}>
              MY PROJECTS
            </button>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg grid grid-cols-3 gap-3">
            {projectsToShow.length === 0 && (
              <div className="col-span-3 text-center text-slate-500 py-6">Không có dự án để hiển thị</div>
            )}

            {projectsToShow.map((p) => (
              <div key={p.id} className="bg-white rounded-md p-3 flex items-center justify-between border cursor-pointer" onClick={() => handleCardClick(p)}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-md bg-linear-to-b from-blue-100 to-blue-200" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                    {p.description && <div className="text-xs text-slate-400 line-clamp-2">{p.description}</div>}
                  </div>
                </div>

                <div className="w-32 text-right">
                  {typeof p.percent !== 'undefined' && (
                    <>
                      <div className="text-sm font-bold text-slate-900">{p.percent}%</div>
                      <div className="h-2 bg-blue-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-linear-to-r from-blue-500 to-sky-400" style={{ width: `${p.percent}%` }} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {modalProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-900">{modalProject.name}</h3>
              <button className="text-slate-400 hover:text-slate-600 text-2xl" onClick={() => setModalProject(null)}>×</button>
            </div>
            
            <div>
              {modalProject.description && <p className="text-sm text-slate-600 mb-4">{modalProject.description}</p>}
              {modalProject.technologies && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {modalProject.technologies.map((t, i) => (
                    <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              )}
              
              <div className="flex gap-3 justify-end">
                <button 
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  onClick={() => setModalProject(null)}>
                  Đóng
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => {
                    setModalProject(null);
                    if (typeof onProjectClick === 'function') {
                      onProjectClick(modalProject);
                    }
                  }}>
                  Bắt đầu dự án này
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


