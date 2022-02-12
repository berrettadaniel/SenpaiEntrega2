import { Route, Routes } from 'react-router-dom';
import { IndexPage } from './components/pages/IndexPage';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
        </Routes>
    );
}