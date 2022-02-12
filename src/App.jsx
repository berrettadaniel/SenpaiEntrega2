import { Route, Routes, Link } from 'react-router-dom';
import { IndexPage } from './components/pages/IndexPage';
import { OfrecemosPage } from './components/pages/OfrecemosPage';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="ofrecemos" element={<OfrecemosPage />} />   
        </Routes>
    );
}