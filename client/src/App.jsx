import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';

import LoginLanding from "./pages/loginlanding";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/attendence";
import Leave from "./pages/leave";
import Payslips from "./pages/payslips";
import Settings from "./pages/settings";
import PrintPayslips from "./pages/printpayslip";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/login" element={<LoginLanding />} />


        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin portal" subtitle="sign in to manage the organization" />} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee portal" subtitle="sign in to access your employee dashboard" />} />



        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route
          path="/print/payslip/:id"
          element={<PrintPayslips />}
        />

        <Route
          path="*"
          element={
            <h1 style={{ color: "red", fontSize: "40px" }}>
              404 - Route Not Found
            </h1>
          }
        />
      </Routes>
    </>
  );
};

export default App;