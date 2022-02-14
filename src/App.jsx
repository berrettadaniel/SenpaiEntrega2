import { Route, Routes, Link } from 'react-router-dom';
import { IndexPage } from './components/pages/IndexPage';
import { OfrecemosPage } from './components/pages/OfrecemosPage';
import { LoginPage } from './components/pages/LoginPage';
import { ContactoPage } from './components/pages/ContactoPage';
import { ServicioPage } from './components/pages/ServicioPage';

export function App() {
    return (
//        <IndexPage />
//        <OfrecemosPage />
//        <LoginPage />
//        <ContactoPage />
//        <ServicioPage />

        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="ofrecemos" element={<OfrecemosPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacto" element={<ContactoPage />} /> 
            <Route path="servicio" element={<ServicioPage />} />
        </Routes>
    );
}