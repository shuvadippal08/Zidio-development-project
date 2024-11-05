import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Verification from  './Components/Verification/Verification.jsx'
import Courses from './Components/Courses/Courses.jsx'
import Instructor from './Components/Instructor/Instructor.jsx'
import AboutUs from './Components/Aboutus/AboutUs.jsx'
import Assessment from "./Components/Assessment/Assessment.jsx"
import ContactUs from "./Components/ContactUs/ContactUs.jsx"
import JoinUs from "./Components/JoinUs/JoinUs.jsx"
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsCondition from "./Components/TermsCondition/TermsCondition.jsx"
import HelpSupport from "./Components/HelpSupport/HelpSupport.jsx"
import CertificateVerification from "./Components/CertificateVerification/CertificateVerification.jsx"
import SiteMap from './Components/SiteMap/SiteMap.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/assessment' element={< Assessment/>}/>
      <Route path='/instructors' element={<Instructor />}/>
      <Route path='/verifications' element={<Verification />}/>
      <Route path='/aboutus'  element={<AboutUs />}/>
      <Route path='/contactus'  element={<ContactUs />}/>
      <Route path='/joinus' element={< JoinUs />}/>
      <Route path='/privacypolicy' element={<PrivacyPolicy />}/>
      <Route path='/terms-condition' element={<TermsCondition />}/>
      <Route path='/help-support' element={<HelpSupport />}/>
      <Route path='/certificate-verification' element={<CertificateVerification />}/>
      <Route path='/site-map' element={<SiteMap />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>
  </StrictMode>,
)
