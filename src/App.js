import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth/index";
import {ExpenseTracker} from "./pages/expense-tracker/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//cd my-project
// git status
// git add .
// git commit -m "Implement user login functionality"
// git pull origin main
// git push origin main
