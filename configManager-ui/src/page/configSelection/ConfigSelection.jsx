import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import logo from '../../assets/zebra.png';

function ConfigSelection() {
  const [currentAppType, setCurrentAppType] = useState(null);

  const navigate = useNavigate();

  const changeAppTypeHandler = (e) => {
    setCurrentAppType(e);
    switch (e.value) {
      case 'IOTC':
        navigate('/page/iotcConfig');
        break;
      case 'CORESCANNER':
        navigate('/page/CoreScannerConfig');
        break;
      default:
      // nothing
    }
  };

  const appTypes = [
    {
      label: 'IoT Connector (Windows and Linux)',
      value: 'IOTC',
    },
    {
      label: 'CoreScanner Driver for Windows',
      value: 'CORESCANNER',
    },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      background: '#e5e7eb',
      width: '100%',
      fontSize: '0.8em',
      paddingLeft: '4px',
      fontWeight: 500,
    }),
    menu: (base) => ({
      ...base,
      fontSize: '0.8em',
    }),
    menuList: (base) => ({
      ...base,
    }),
  };

  useEffect(() => {}, []);

  return (
    <MainLayout>
      <div className="mt-72">
        <div className="w-full flex justify-center items-center bg-white">
          <div className="font-bold text-2xl text-black font-poppins py-1">
            Welcome to ConfigManager
          </div>
        </div>
        <div className="bg-[#ffffff] rounded flex justify-center items-center">
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="mt-4 w-full flex justify-center items-center">
          <Select
            name="appType"
            id="appType"
            onChange={(e) => {
              changeAppTypeHandler(e);
            }}
            value={currentAppType}
            styles={customStyles}
            placeholder="Choose the Application"
            options={appTypes}
            className="border-2  bg-[#E5E7EB] rounded-md shadow-sm md:w-72"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default ConfigSelection;
