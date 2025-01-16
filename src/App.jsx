import './App.css'
import About from './components/About.jsx';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Skills from './components/Skills.jsx';
import Project from './components/Project.jsx';
import MainLayout from './components/MainLayout.jsx';
import Hero from './components/Hero.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Hero /><Project /></MainLayout>,
  },
  {
    path: "/about",
    element: <MainLayout><About /></MainLayout>,
   
  },
  {
    path: "/skills",
    element: <MainLayout><Skills /></MainLayout>,
  },
  {
    path: "/projects",
    element: <MainLayout><Project /></MainLayout>,
  },
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
