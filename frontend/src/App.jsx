import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WellsPage from './pages/WellsPage';


const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/wells' element={<WellsPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;



