import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import About from './components/BloggPages/About';
import NotFound from './components/BloggPages/NotFound';
import Settings from './components/BloggPages/Settings';
import Root from "./components/BloggPages/Root";
import SignIn from "./components/BloggPages/SignIn";
import SignUp from "./components/BloggPages/SignUp";
import NewArticleDescription from "./components/BloggPages/NewArticleDescription";
import ReadArticle from "./components/BloggPages/ReadArticle";
import EditArticle from "./components/BloggPages/EditArticle";
import Articles from "./components/BloggPages/Articles";
import MyArticles from "./components/BloggPages/MyArticles";
import ModifyArticleDescription from "./components/BloggPages/ModifyArticleDescription";
import ModArticle from "./components/BloggPages/ModArticle";
import Home from "./components/BloggPages/Home";

import { getArticleById,getAllDescriptions,getMyArticlesDescriptions } from "./components/witsRouterLoaders";
import ProtectedRoute from "./components/ElementalComponents/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<NotFound/>,
    children:[
      {
        index:true,
        element: <Home/>,        
      },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "articles",
        element: <Articles/>,
        loader:getAllDescriptions
      },
      {
        path: "articles/:idArticle",        
        element: <ReadArticle/>,
        loader: getArticleById
      },      
      {
        path: "about",
        element: <About/>
      },
      {
        element:<ProtectedRoute/>,
        children:[
          {
            path: "settings",
            element: <Settings/>,      
          },
          {
            path: "rediger",
            element: <NewArticleDescription/>,        
          },
          {
            path: "modifier_description",
            element: <ModifyArticleDescription/>,        
          },
          {
            path: "modifier_article/:idArticle",        
            element: <ModArticle/>,
            loader: getArticleById
          },
          {
            path: "mes_articles",
            element: <MyArticles/>,
            loader: getMyArticlesDescriptions
          },
          {
            path: "editteur/:idArticle",
            element: <EditArticle/>,
          },
        ]
      }
    ]
  },
  {
    path: "signin",
    element:<SignIn/>,
    errorElement:<NotFound/>,
  },
  {
    path: "signup",
    element:<SignUp/>,
    errorElement:<NotFound/>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;