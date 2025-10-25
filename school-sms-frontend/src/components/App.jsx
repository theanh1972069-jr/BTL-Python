// App.jsx
import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Dashboard from './components/Dashboard';
import '../styles/Dashboard.css'; // Import CSS

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <TopBar userName="Admin" /> 
        <Dashboard />
      </main>
    </div>
  );
};

export default App;