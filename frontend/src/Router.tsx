import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./app/pages/Home'));
const LazyUsers = lazy(() => import('./app/pages/Users'));

const HomeRoute = () => (
    <Suspense fallback="Loading...">
        <LazyHome />
    </Suspense>
);
const UsersRoute = () => (
    <Suspense fallback="Loading...">
        <LazyUsers />
    </Suspense>
);

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/users" element={<UsersRoute />} />
        </Routes>
    );
}