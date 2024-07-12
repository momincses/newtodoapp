import "./App.css";
import Home from "./HomeScreen/Home";
import AddTask from "./AddTaskScreen/AddTask";
import Navbar from "./Navbar/Navbar";
import Reminder from "./ReminderScreen/Reminder";
import Setting from './SettingScreen/Setting'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Bookmark from "./BookmarkScreen/Bookmark";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
