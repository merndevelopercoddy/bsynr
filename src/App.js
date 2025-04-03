import './App.css';
import Navbar from './components/Navbar';
import Homecomponent from './components/Homecomponent';
import Footer from './components/Footer';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Secondclass from './components/Secondclass';
import Haqimizda from './components/Haqimizda';
import Boglanish from './components/Boglanish';
import Thirdclass from './components/Thirdclass';
import Fourthclass from './components/Fourthclass';
import Kategoriya2111 from './pages/Kategoriya2111';
import Kategoriya2112 from './pages/Kategoriya2112';
import Kategoriya2113 from './pages/Kategoriya2113';
import Kategoriya2121 from './pages/Kategoriya2121';
import Kategoriya2122 from './pages/Kategoriya2122';
import Kategoriya2123 from './pages/Kategoriya2123';
import Kategoriya2211 from './pages/Kategoriya2211';
import Kategoriya2212 from './pages/Kategoriya2212';
import Kategoriya2213 from './pages/Kategoriya2213';
import Kategoriya2221 from './pages/Kategoriya2221';
import Kategoriya2222 from './pages/Kategoriya2222';
import Kategoriya2223 from './pages/Kategoriya2223';
import Kategoriya2231 from './pages/Kategoriya2231';
import Kategoriya2232 from './pages/Kategoriya2232';
import Kategoriya2233 from './pages/Kategoriya2233';
import Kategoriya2311 from './pages/Kategoriya2311';
import Kategoriya2312 from './pages/Kategoriya2312';
import Kategoriya2313 from './pages/Kategoriya2313';
import Kategoriya2321 from './pages/Kategoriya2321';
import Kategoriya2322 from './pages/Kategoriya2322';
import Kategoriya2323 from './pages/Kategoriya2323';
import Kategoriya2411 from './pages/Kategoriya2411';
import Kategoriya2412 from './pages/Kategoriya2412';
import Kategoriya2413 from './pages/Kategoriya2413';
function App() {
  return (    
      <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path='/' element={<Homecomponent />} />
            <Route path='/2-sinf' element={<Secondclass />} />
            <Route path='/3-sinf' element={<Thirdclass />} />
            <Route path='/4-sinf' element={<Fourthclass />} />
            <Route path='/haqida' element={<Haqimizda />} />
            <Route path='/boglanish' element={<Boglanish />} />

            <Route path='/2-sinf/1-chorak/unli-va-undosh-tovushlar/eng-oson' element={<Kategoriya2111 />} />
            <Route path='/2-sinf/1-chorak/unli-va-undosh-tovushlar/oson' element={<Kategoriya2112 />} />
            <Route path='/2-sinf/1-chorak/unli-va-undosh-tovushlar/sal-murakkab' element={<Kategoriya2113 />} />

            <Route path='/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/eng-oson' element={<Kategoriya2121 />} />
            <Route path='/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/oson' element={<Kategoriya2122 />} />
            <Route path='/2-sinf/1-chorak/harf-birikmasi-bilan-ifodalangan-undoshlar/sal-murakkab' element={<Kategoriya2123 />} />

            <Route path='/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/eng-oson' element={<Kategoriya2211 />} />
            <Route path='/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/oson' element={<Kategoriya2212 />} />
            <Route path='/2-sinf/2-chorak/tutuq-belgisi-haqida-bilib-olamiz/sal-murakkab' element={<Kategoriya2213 />} />
            
            <Route path='/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/eng-oson' element={<Kategoriya2221 />} />
            <Route path='/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/oson' element={<Kategoriya2222 />} />
            <Route path='/2-sinf/2-chorak/soz-ichida-yonma-yon-kelgan-bir-xil-undoshlar-talaffuzi-va-imlosini-organamiz/sal-murakkab' element={<Kategoriya2223 />} />

            <Route path='/2-sinf/2-chorak/sozning-manolarini-organamiz/eng-oson' element={<Kategoriya2231 />} />
            <Route path='/2-sinf/2-chorak/sozning-manolarini-organamiz/oson' element={<Kategoriya2232 />} />
            <Route path='/2-sinf/2-chorak/sozning-manolarini-organamiz/sal-murakkab' element={<Kategoriya2233 />} />

            <Route path='/2-sinf/3-chorak/gap/eng-oson' element={<Kategoriya2311 />} />
            <Route path='/2-sinf/3-chorak/gap/oson' element={<Kategoriya2312 />} />
            <Route path='/2-sinf/3-chorak/gap/sal-murakkab' element={<Kategoriya2313 />} />

            <Route path='/2-sinf/3-chorak/gapning-asosi/eng-oson' element={<Kategoriya2321 />} />
            <Route path='/2-sinf/3-chorak/gapning-asosi/oson' element={<Kategoriya2322 />} />
            <Route path='/2-sinf/3-chorak/gapning-asosi/sal-murakkab' element={<Kategoriya2323 />} />

            <Route path='/2-sinf/4-chorak/eng-yaxshi-ixtirolar/eng-oson' element={<Kategoriya2411 />} />
            <Route path='/2-sinf/4-chorak/eng-yaxshi-ixtirolar/oson' element={<Kategoriya2412 />} />
            <Route path='/2-sinf/4-chorak/eng-yaxshi-ixtirolar/sal-murakkab' element={<Kategoriya2413 />} />
        </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;