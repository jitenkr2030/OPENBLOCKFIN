import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChevronFirst, ChevronLast, LayoutDashboard, Wallet2, UserCircle, Settings, Boxes, HelpCircle, LogOut } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import WalletPage from './pages/Wallet';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DeFi from './pages/DeFi';
import Help from './pages/Help';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Wallet', path: '/wallet', icon: <Wallet2 size={20} /> },
    { name: 'Profile', path: '/profile', icon: <UserCircle size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    { name: 'DeFi', path: '/defi', icon: <Boxes size={20} /> },
    { name: 'Help', path: '/help', icon: <HelpCircle size={20} /> },
  ];

  return (
    <aside className={`h-screen ${collapsed ? 'w-16' : 'w-64'} border-r bg-white transition-all duration-300 ease-in-out`}>
      <nav className="h-full flex flex-col">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="/api/placeholder/32/32"
            className={`overflow-hidden transition-all ${collapsed ? 'w-8' : 'w-32'}`}
            alt="Logo"
          />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {collapsed ? <ChevronLast size={20} /> : <ChevronFirst size={20} />}
          </button>
        </div>

        <div className="flex-1 px-3">
          {navigation.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {item.icon}
              <span className={`overflow-hidden transition-all ${collapsed ? 'w-0' : 'w-52'}`}>
                {item.name}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t flex p-3">
          <img
            src="/api/placeholder/32/32"
            className="w-8 h-8 rounded-md"
            alt="User avatar"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${collapsed ? 'w-0' : 'w-52 ml-3'}`}>
            <div className="leading-none">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">john@example.com</span>
            </div>
            <LogOut size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </nav>
    </aside>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Router>
      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/defi" element={<DeFi />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center h-[80vh]">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600">Page not found</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
