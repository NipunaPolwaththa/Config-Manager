/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ConfigSelection from './page/configSelection/ConfigSelection';
import IOTCConfig from './page/iotcConfig/IOTCConfig';
import CoreScannerConfig from './page/coreScannerConfig/CoreScannerConfig';

function App() {
  return (
    <div className="App select-none">
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose="3000"
      />
      <Router>
        <Routes>
          <Route path="/" element={<ConfigSelection />} />
          <Route path="/page/configSelection" element={<ConfigSelection />} />
          <Route path="/page/iotcConfig" element={<IOTCConfig />} />
          <Route
            path="/page/coreScannerConfig"
            element={<CoreScannerConfig />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
