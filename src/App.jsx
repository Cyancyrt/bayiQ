// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import Edukasi from "./pages/Edukasi.jsx";
import Konsultasi from "./pages/Konsultasi.jsx";
import Informasi from "./pages/Informasi.jsx";
import Komunitas from "./pages/Komunitas.jsx";
import HomePage from "./pages/HomePage.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import NotFound from "./pages/NotFound.jsx";
import PilihSesi from "./pages/PilihSesi.jsx";
import DetailBidan from "./components/Informasi/DetailBidan.jsx";
import DetailDokter from "./components/Informasi/DetailDokter.jsx";
import DetailTempat from "./components/Informasi/DetailTempat.jsx";
import Konfirm from "./pages/Konfirm.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Testimoni from "./pages/Testimoni.jsx";
import DetailEdu from "./pages/DetailEdu.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import AdmDashboard from "./admin/AdmDashboard.jsx";
import DrDashboard from "./dokter/DrDashboard.jsx";
import DrinLayout from "./layout/DrLayout.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import AppCommunity from "./app/AppCommunity.jsx";
import AppProfile from "./app/AppProfile.jsx";
import AppComDetail from "./app/community/AppComDetail.jsx";
import AppLayoutD from "./layout/AppLayoutD.jsx";
import AppMessageDoctor from "./app/Message/examplechat/AppMessageDoctor.jsx";

import AppHome from "./app/AppHome.jsx";
import AppProfileEdit from "./app/Profile/AppProfileEdit.jsx";
import AppNotif from "./app/AppNotif.jsx";
import AppMessage from "./app/AppMessage.jsx";
//refreshToken hit
import PersLog from "./middleware/userAuth.jsx";

//cek authentikasi
import CekAuth from "./middleware/CheckAuth.jsx";

function App() {
  return (
    <Routes>
      {/* multi route */}
      <Route element={<PersLog />}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/edukasi" element={<Edukasi />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/pilihsesi" element={<PilihSesi />} />
          <Route element={<CekAuth />}>
            <Route path="pilihsesi/konfirmasi/:id" element={<Konfirm />} />
          </Route>
          <Route path="/pilihsesi/konfirmasi" element={<Konfirm />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/detailbidan" element={<DetailBidan />} />
          <Route path="/detaildokter" element={<DetailDokter />} />
          <Route path="/detailtempat" element={<DetailTempat />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/article/:id" element={<DetailEdu />} />{" "}
          <Route path="dashboard/:id" element={<Dashboard />} />{" "}
          <Route path="*" element={<NotFound />} />{" "}
        </Route>
      </Route>

      {/* user route */}
      <Route path="/" element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* admin route */}
      <Route path="/admin/" element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdmDashboard />} />
      </Route>
      <Route path="/dokter/" element={<DrinLayout />}>
        <Route path="/dokter/dashboard" element={<DrDashboard />} />
      </Route>
      <Route path="/hospital/" element={<DrinLayout />}>
        <Route path="/hospital/dashboard" element={<DrDashboard />} />
      </Route>

      {/* mobile */}
      <Route element={<PersLog />}>
        <Route path="/app/" element={<AppLayout />}>
          <Route path="/app/" element={<AppHome />} />
          <Route path="/app/notification" element={<AppNotif />} />
          <Route path="/app/community" element={<AppCommunity />} />
          <Route path="/app/community/kariadi" element={<AppComDetail />} />
          <Route path="/app/profile" element={<AppProfile />} />
          <Route path="/app/profile/edit" element={<AppProfileEdit />} />
        </Route>
        <Route path="/app/" element={<AppLayoutD />}>
          <Route path="/app/message" element={<AppMessage />}>
            <Route path="/app/message/michie" element={<AppMessageDoctor />} />
            <Route path="/app/message/kariadi" element={<AppMessageDoctor />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
