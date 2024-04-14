import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

function ConfigSelection() {
  const [currentAppType, setCurrentAppType] = useState(null);

  const navigate = useNavigate();

  const changeAppTypeHandler = (e) => {
    setCurrentAppType(e);
  };

  const selectConfig = () => {
    switch (currentAppType.value) {
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
      label: 'IOTC',
      value: 'IOTC',
    },
    {
      label: 'AFM',
      value: 'AFM',
    },
    {
      label: 'CORESCANNER',
      value: 'CORESCANNER',
    },
    {
      label: 'JPOS',
      value: 'JPOS',
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
            Select the Application Type
          </div>
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
            placeholder="Choose App Type Here"
            options={appTypes}
            className="border-2  bg-[#E5E7EB] rounded-md shadow-sm md:w-60"
          />
        </div>
        <div className="mt-4 w-full flex justify-center items-center">
          <button
            type="button"
            className="w-40 hover:bg-blue-400 rounded h-8 bg-blue-100"
            onClick={() => {
              selectConfig();
            }}
          >
            Create Config
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ConfigSelection;
