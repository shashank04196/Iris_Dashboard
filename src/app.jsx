import React, { useState } from 'react';
import { Search, Bell, Home, Building2, GraduationCap, Users, BookOpen, BarChart3, Globe, CreditCard, Receipt, User, Trophy, UtensilsCrossed, MessageSquare, Star, Calendar } from 'lucide-react';
import { mockData } from './data';

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [activeTab, setActiveTab] = useState('Announcement');
  const [eventFilter, setEventFilter] = useState('My Events');
  const [timeFilter, setTimeFilter] = useState('This Week');

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-2xl px-6 py-3 inline-block">
            <span className="text-white text-2xl font-light tracking-widest">iris</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-2">
            {[
              { name: 'Dashboard', icon: Home },
              { name: 'Institute', icon: Building2 },
              { name: 'Academic', icon: GraduationCap },
              { name: 'Campus', icon: Building2 },
              { name: 'Alumni', icon: Users }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeNav === item.name
                    ? 'bg-[#0ea5e9] text-white'
                    : 'text-gray-400 hover:bg-[#2a2a2a]'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-gray-500 text-sm mb-3 px-4">Quick links</h3>
            <div className="space-y-1 text-sm">
              {mockData.quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="mt-8">
            <h3 className="text-gray-500 text-sm mb-3 px-4">Support</h3>
            <a href="#" className="block px-4 py-2 text-gray-400 text-sm hover:text-white">
              officers@iris.nitk.ac.in
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#1a1a1a] px-8 py-4 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="search here"
              className="bg-transparent border-none outline-none text-white flex-1"
            />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-400 cursor-pointer hover:text-white" size={20} />
            <div className="w-10 h-10 bg-white rounded-lg"></div>
            <div className="w-12 h-12 bg-[#6366f1] rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Welcome Section */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-1">Welcome Back! Rahul Gupta</p>
            <h1 className="text-3xl font-bold">DASHBOARD | IRIS</h1>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-4 mb-6">
            <button className="flex items-center gap-2 text-sm text-gray-400">
              <MessageSquare size={16} />
              Tell IRIS
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-400">
              <Star size={16} />
              Frequently visited
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Major CGPA */}
            <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-3xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 size={20} />
                <span className="text-sm">Major CGPA :</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold">{mockData.stats.majorCGPA}</div>
                <div className="flex gap-2">
                  <div className="w-8 h-16 bg-white/20 rounded"></div>
                  <div className="w-8 h-20 bg-white/30 rounded"></div>
                  <div className="w-8 h-28 bg-white/60 rounded"></div>
                </div>
              </div>
            </div>

            {/* Major Credits */}
            <div className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Major Credits :</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold">{mockData.stats.majorCredits}</div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <BookOpen size={32} />
                </div>
              </div>
            </div>

            {/* Semester */}
            <div className="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-3xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Semester :</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold">
                  {mockData.stats.semester}<sup className="text-2xl">th</sup>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Calendar size={32} />
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - 2/3 width */}
            <div className="col-span-2 space-y-6">
              {/* Tab Navigation */}
              <div className="flex gap-3">
                {['Announcement', 'Attendance', 'Time table', 'Courses'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm transition-all ${
                      activeTab === tab
                        ? 'bg-[#0ea5e9] text-white'
                        : 'bg-[#1a1a1a] text-gray-400 border border-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Announcements */}
              <div className="space-y-4">
                {mockData.announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="w-1 h-12 bg-[#0ea5e9] rounded-full"></div>
                    <span className="flex-1">{announcement.title}</span>
                  </div>
                ))}
              </div>

              {/* Frequently Used */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-400">Frequently used</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {mockData.frequentlyUsed.map((item) => (
                    <button
                      key={item.id}
                      className="bg-[#1a1a1a] border border-gray-800 rounded-xl px-4 py-3 text-sm hover:bg-[#2a2a2a] transition-all"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - 1/3 width */}
            <div>
              {/* Upcoming Events */}
              <div className="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] rounded-3xl p-6">
                <h2 className="text-xl font-bold mb-6">Upcoming Events :</h2>

                {/* Event Filters */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setEventFilter('My Events')}
                    className={`flex-1 py-2 rounded-full text-sm transition-all ${
                      eventFilter === 'My Events'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white/10 text-white/70'
                    }`}
                  >
                    My Events
                  </button>
                  <button
                    onClick={() => setEventFilter('All Events')}
                    className={`flex-1 py-2 rounded-full text-sm transition-all ${
                      eventFilter === 'All Events'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white/10 text-white/70'
                    }`}
                  >
                    All Events
                  </button>
                </div>

                {/* Time Filters */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setTimeFilter('This Week')}
                    className={`flex-1 py-2 rounded-full text-sm transition-all ${
                      timeFilter === 'This Week'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white/10 text-white/70'
                    }`}
                  >
                    This Week
                  </button>
                  <button
                    onClick={() => setTimeFilter('Next Week')}
                    className={`flex-1 py-2 rounded-full text-sm transition-all ${
                      timeFilter === 'Next Week'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white/10 text-white/70'
                    }`}
                  >
                    Next Week
                  </button>
                </div>

                {/* Events List */}
                <div className="space-y-4">
                  {mockData.upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold">{event.title}</h3>
                        {event.isFlagship && (
                          <button className="text-xs bg-white/10 px-2 py-1 rounded-full flex items-center gap-1">
                            * Flagship event <Star size={12} fill="white" />
                          </button>
                        )}
                      </div>
                      {event.organizer && (
                        <p className="text-sm text-white/70 mb-2">{event.organizer}</p>
                      )}
                      <div className="text-xs text-white/60 space-y-1">
                        <p>Date : {event.date}</p>
                        <p>Venue : {event.venue}</p>
                        {event.description && (
                          <p className="italic mt-2">{event.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customize Layout Button */}
                <button className="w-full mt-6 bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-3 rounded-full font-medium transition-all">
                  Customize layout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}