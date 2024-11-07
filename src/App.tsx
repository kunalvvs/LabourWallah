import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryDetails from './pages/CategoryDetails';
// import WorkerDashboard from './pages/WorkerDashboard';
// import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BookingPage from './pages/BookingPage';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryDetails />} />
        {/* <Route path="/worker-dashboard/*" element={<WorkerDashboard />} /> */}
        {/* <Route path="/user-dashboard/*" element={<UserDashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book/:workerId" element={<BookingPage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;