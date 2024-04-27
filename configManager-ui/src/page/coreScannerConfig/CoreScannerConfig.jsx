/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Select from 'react-select';
import uniqueId from 'lodash/uniqueId';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '../../layouts/MainLayout';
import './CoreScannerConfig.css';
import Tooltip from '../../components/Tooltip';

function CoreScannerConfig() {
  const [ipDevicePort, setIpDevicePort] = useState(0);
  const [simulatedLocale, setSimulatedLocale] = useState(0);
  const [simulatedEnable, setSimulatedEnable] = useState(0);
  const [simulatedFunctionKey, setSimulatedFunctionKey] = useState(0);
  const [simulatedInterKeyDelay, setSimulatedInterKeyDelay] = useState(0);
  const [simulatedADFPath, setSimulatedADFPath] = useState('');
  const [simulatedKeyCode, setSimulatedKeyCode] = useState(0);
  const [ddfSelect, setDdfSelect] = useState(0);
  const navigate = useNavigate();
  const [serialModes, setSerialModes] = useState();
  const [currentSerialMode, setCurrentSerialMode] = useState();
  const [portIds, setPortIds] = useState();
  const [currentPortIds, setCurrentPortIds] = useState();
  const [baudRates, setBaudRates] = useState();
  const [currentBaudRate, SetCurrentBaudRate] = useState();
  const [ASCIICodes, setASCIICodes] = useState([]);
  const [multiSuffix1Selections, setMultiSuffix1Selections] = useState([]);
  const [multiSuffix2Selections, setMultiSuffix2Selections] = useState([]);
  const [multiPrefix1Selections, setMultiPrefix1Selections] = useState([]);
  const [multiALT1Selections, setMultiALT1Selections] = useState([]);
  const [ddfCodes, setDdfCodes] = useState([]);
  const [multiDDFTagDefSelections, setMultiDDFTagDefSelections] = useState([]);
  const [multiDDFFormat0Selections, setMultiDDFFormat0Selections] = useState(
    []
  );
  const [multiDDFFormat1Selections, setMultiDDFFormat1Selections] = useState(
    []
  );
  const [multiDDFFormat2Selections, setMultiDDFFormat2Selections] = useState(
    []
  );
  const [multiDDFFormat3Selections, setMultiDDFFormat3Selections] = useState(
    []
  );
  const [multiDDFFormat4Selections, setMultiDDFFormat4Selections] = useState(
    []
  );
  const [multiDDFFormat5Selections, setMultiDDFFormat5Selections] = useState(
    []
  );
  const [multiDDFFormat6Selections, setMultiDDFFormat6Selections] = useState(
    []
  );
  const [multiDDFFormat7Selections, setMultiDDFFormat7Selections] = useState(
    []
  );

  const onInputIPPortChange = (e) => {
    setIpDevicePort(e.target.value);
  };

  const onInputSimulatedHidChange = (e, simulatedType) => {
    switch (simulatedType) {
      case 'LOCALE':
        setSimulatedLocale(e.target.value);
        break;
      case 'ENABLE':
        setSimulatedEnable(e.target.value);
        break;
      case 'FUNCTION_KEY_MAPPING':
        setSimulatedFunctionKey(e.target.value);
        break;
      case 'INTER_KEY_DELAY':
        setSimulatedInterKeyDelay(e.target.value);
        break;
      case 'ADF_PATH':
        setSimulatedADFPath(e.target.value);
        break;
      case 'KEY_CODE_SETTING':
        setSimulatedKeyCode(e.target.value);
        break;
      default:
      // nothing
    }
  };

  const onInputDDFSelectChange = (e) => {
    setDdfSelect(e.target.value);
  };

  const getConfigSerialModeAttributesCoreScanner = (serialMode) => {
    serialModes.forEach((serial) => {
      if (serial.value === serialMode.attributes.name) {
        setCurrentSerialMode(serial);
      }
    });

    baudRates.forEach((baud) => {
      if (baud.value === serialMode.attributes.baud) {
        SetCurrentBaudRate(baud);
      }
    });

    portIds.forEach((port) => {
      if (port.value === serialMode.attributes.id) {
        setCurrentPortIds(port);
      }
    });
  };

  const getConfigAttributesCoreScanner = (configData) => {
    configData.elements.forEach((config) => {
      if (config.name === 'CONFIG') {
        config.elements.forEach((configChild) => {
          switch (configChild.name) {
            case 'SERIAL_MODE_SETTINGS':
              configChild.elements.forEach((serialType) => {
                if (serialType.name === 'PORT') {
                  getConfigSerialModeAttributesCoreScanner(serialType);
                }
              });
              break;
            case 'IP_DEVICE_SETTINGS':
              configChild.elements.forEach((devices) => {
                if (devices.name === 'PORT') {
                  devices.elements.forEach((ports) => {
                    if (ports.type === 'text') {
                      setIpDevicePort(ports.text);
                    }
                  });
                }
              });
              break;
            case 'SIMULATED_HID_KB_SETTINGS':
              configChild.elements.forEach((simulatedChild) => {
                if (simulatedChild.elements !== undefined) {
                  switch (simulatedChild.name) {
                    case 'LOCALE':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedLocale(textChild.text);
                        }
                      });
                      break;
                    case 'ENABLE':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedEnable(textChild.text);
                        }
                      });
                      break;
                    case 'FUNCTION_KEY_MAPPING':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedFunctionKey(textChild.text);
                        }
                      });
                      break;
                    case 'INTER_KEY_DELAY':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedInterKeyDelay(textChild.text);
                        }
                      });
                      break;
                    case 'ADF_PATH':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedADFPath(textChild.text);
                        }
                      });
                      break;
                    case 'KEY_CODE_SETTING':
                      simulatedChild.elements.forEach((textChild) => {
                        if (textChild.type === 'text') {
                          setSimulatedKeyCode(textChild.text);
                        }
                      });
                      break;
                    default:
                    // nothing
                  }
                }
              });
              break;
            case 'DDF':
              configChild.elements.forEach((ddfChild) => {
                switch (ddfChild.name) {
                  case 'DDFMETA':
                    ddfChild.elements.forEach((ddfMetaChild) => {
                      switch (ddfMetaChild.name) {
                        case 'DDFTAGDEF':
                          ddfMetaChild.elements.forEach((textChild) => {
                            if (textChild.type === 'text') {
                              const allddfTagDefList = [];
                              let count = 0;
                              const ddfTagDefList = textChild.text.split('.');
                              ddfCodes.forEach((asc) => {
                                ddfTagDefList.forEach((r) => {
                                  if (asc.value === r) {
                                    allddfTagDefList.push({
                                      label: asc.label,
                                      value: asc.value,
                                      id: `${++count}`,
                                    });
                                  }
                                });
                              });
                              setMultiDDFTagDefSelections(allddfTagDefList);
                            }
                          });
                          break;
                        case 'SUFFIX1':
                          ddfMetaChild.elements.forEach((textChild) => {
                            if (textChild.type === 'text') {
                              const allSuffix1List = [];
                              let count = 0;
                              const suffix1List = textChild.text.split('.');
                              ASCIICodes.forEach((asc) => {
                                suffix1List.forEach((r) => {
                                  if (asc.value === r) {
                                    allSuffix1List.push({
                                      label: asc.label,
                                      value: asc.value,
                                      id: `${++count}`,
                                    });
                                  }
                                });
                              });
                              setMultiSuffix1Selections(allSuffix1List);
                            }
                          });
                          break;
                        case 'SUFFIX2':
                          ddfMetaChild.elements.forEach((textChild) => {
                            if (textChild.type === 'text') {
                              const allSuffix2List = [];
                              let count = 0;
                              const suffix2List = textChild.text.split('.');
                              ASCIICodes.forEach((asc) => {
                                suffix2List.forEach((r) => {
                                  if (asc.value === r) {
                                    allSuffix2List.push({
                                      label: asc.label,
                                      value: asc.value,
                                      id: `${++count}`,
                                    });
                                  }
                                });
                              });
                              setMultiSuffix2Selections(allSuffix2List);
                            }
                          });
                          break;
                        case 'PREFIX1':
                          ddfMetaChild.elements.forEach((textChild) => {
                            if (textChild.type === 'text') {
                              const allPrefix1List = [];
                              let count = 0;
                              const prefix1List = textChild.text.split('.');
                              ASCIICodes.forEach((asc) => {
                                prefix1List.forEach((r) => {
                                  if (asc.value === r) {
                                    allPrefix1List.push({
                                      label: asc.label,
                                      value: asc.value,
                                      id: `${++count}`,
                                    });
                                  }
                                });
                              });
                              setMultiPrefix1Selections(allPrefix1List);
                            }
                          });
                          break;
                        case 'ALT1':
                          ddfMetaChild.elements.forEach((textChild) => {
                            if (textChild.type === 'text') {
                              const allPrefix1List = [];
                              let count = 0;
                              const alt1List = textChild.text.split('.');
                              ASCIICodes.forEach((asc) => {
                                alt1List.forEach((r) => {
                                  if (asc.value === r) {
                                    allPrefix1List.push({
                                      label: asc.label,
                                      value: asc.value,
                                      id: `${++count}`,
                                    });
                                  }
                                });
                              });
                              setMultiALT1Selections(allPrefix1List);
                            }
                          });
                          break;
                        case 'DDFDEF':
                          switch (ddfMetaChild.attributes.DdfCode) {
                            case '0':
                              {
                                const allddfCode0List = [];
                                let count = 0;
                                const ddfCode0List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode0List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode0List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat0Selections(allddfCode0List);
                              }
                              break;
                            case '1':
                              {
                                const allddfCode1List = [];
                                let count = 0;
                                const ddfCode1List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode1List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode1List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat1Selections(allddfCode1List);
                              }
                              break;
                            case '2':
                              {
                                const allddfCode2List = [];
                                let count = 0;
                                const ddfCode2List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode2List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode2List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat2Selections(allddfCode2List);
                              }
                              break;
                            case '3':
                              {
                                const allddfCode3List = [];
                                let count = 0;
                                const ddfCode3List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode3List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode3List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat3Selections(allddfCode3List);
                              }
                              break;
                            case '4':
                              {
                                const allddfCode4List = [];
                                let count = 0;
                                const ddfCode4List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode4List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode4List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat4Selections(allddfCode4List);
                              }
                              break;
                            case '5':
                              {
                                const allddfCode5List = [];
                                let count = 0;
                                const ddfCode5List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode5List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode5List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat5Selections(allddfCode5List);
                              }
                              break;
                            case '6':
                              {
                                const allddfCode6List = [];
                                let count = 0;
                                const ddfCode6List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode6List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode6List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat6Selections(allddfCode6List);
                              }
                              break;
                            case '7':
                              {
                                const allddfCode7List = [];
                                let count = 0;
                                const ddfCode7List =
                                  ddfMetaChild.attributes.DdfFormat.split('.');
                                ddfCodes.forEach((asc) => {
                                  ddfCode7List.forEach((r) => {
                                    if (asc.value === r) {
                                      allddfCode7List.push({
                                        label: asc.label,
                                        value: asc.value,
                                        id: `${++count}`,
                                      });
                                    }
                                  });
                                });
                                setMultiDDFFormat7Selections(allddfCode7List);
                              }
                              break;
                            default:
                            // nothing
                          }
                          break;
                        default:
                        // nothing
                      }
                    });
                    break;
                  case 'DDFSELECT':
                    ddfChild.elements.forEach((textChild) => {
                      if (textChild.type === 'text') {
                        setDdfSelect(textChild.text);
                      }
                    });
                    break;
                  default:
                  // nothing
                }
              });
              break;
            default:
            // nothing
          }
        });
      }
    });
  };

  const changeFileHandlerCoreScanner = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = (evt) => {
      const readerData = evt.target.result;
      const jsonData = xmlJs.xml2json(readerData, {
        compact: false,
        spaces: 4,
      });
      getConfigAttributesCoreScanner(JSON.parse(jsonData));
    };
  };

  const generateMetaData = () => {
    const metaDataTag =
      `\t<!--Config version 2 supports DDF -->\n` +
      `\t<config-version>2</config-version>\n` +
      `\t<copyright>©2023 Zebra Technologies Corp. and/or its affiliates.  All rights reserved.</copyright>`;
    return metaDataTag;
  };

  const generateSerialModeSettings = () => {
    let ssiModeSettingsTag = '';
    if (
      currentPortIds !== undefined ||
      currentPortIds !== undefined ||
      currentPortIds !== undefined
    ) {
      ssiModeSettingsTag =
        `<!-- Enable this section of configuration for Serial Scanners -->\n` +
        `\t\t<PORT id="${currentPortIds.value}" baud="${currentBaudRate.value}" name="${currentSerialMode.value}"/>`;
    } else {
      ssiModeSettingsTag =
        `<!-- Enable this section of configuration for Serial Scanners -->\n` +
        `\t\t<!--<PORT id="31" baud="115200" name="SSI"/>-->`;
    }
    return ssiModeSettingsTag;
  };

  const generateIPDeviceSettings = () => {
    const ipDeviceSettingsTag = `<PORT>${ipDevicePort}</PORT>`;
    return ipDeviceSettingsTag;
  };

  const generateSimulatedHidKBSettings = () => {
    const simulatedHidKBSettingsTag =
      `<LOCALE>${simulatedLocale}</LOCALE>\n` +
      `\t\t<!-- Default=0, French=1, English=2, Italian=3 -->\n` +
      `\t\t<ENABLE>${simulatedEnable}</ENABLE>\n` +
      `\t\t<!-- Enabled=1, Disabled=0 -->\n` +
      `\t\t<FUNCTION_KEY_MAPPING>${simulatedFunctionKey}</FUNCTION_KEY_MAPPING>\n` +
      `\t\t<INTER_KEY_DELAY>${simulatedInterKeyDelay}</INTER_KEY_DELAY>\n` +
      `\t\t<ADF_PATH>${simulatedADFPath}</ADF_PATH>\n` +
      `\t\t<KEY_CODE_SETTING>${simulatedKeyCode}</KEY_CODE_SETTING>\n` +
      `\t\t<!-- Virtual Key only =0, ScanCode only =1, Virtual Key & Scan Code =2-->`;

    return simulatedHidKBSettingsTag;
  };

  const generateDDFMeta = () => {
    let ddfMetaSuffix1 = '';
    for (let i = 0; i < multiSuffix1Selections.length; i++) {
      ddfMetaSuffix1 += multiSuffix1Selections[i].value;
      if (multiSuffix1Selections.length !== i + 1) {
        ddfMetaSuffix1 += '.';
      }
    }

    let ddfMetaSuffix2 = '';
    for (let i = 0; i < multiSuffix2Selections.length; i++) {
      ddfMetaSuffix2 += multiSuffix2Selections[i].value;
      if (multiSuffix2Selections.length !== i + 1) {
        ddfMetaSuffix2 += '.';
      }
    }

    let ddfMetaPrefix1 = '';
    for (let i = 0; i < multiPrefix1Selections.length; i++) {
      ddfMetaPrefix1 += multiPrefix1Selections[i].value;
      if (multiPrefix1Selections.length !== i + 1) {
        ddfMetaPrefix1 += '.';
      }
    }

    let ddfMetaALT1 = '';
    for (let i = 0; i < multiALT1Selections.length; i++) {
      ddfMetaALT1 += multiALT1Selections[i].value;
      if (multiALT1Selections.length !== i + 1) {
        ddfMetaALT1 += '.';
      }
    }

    let ddfMetaDdfTagDef = '';
    for (let i = 0; i < multiDDFTagDefSelections.length; i++) {
      ddfMetaDdfTagDef += multiDDFTagDefSelections[i].value;
      if (multiDDFTagDefSelections.length !== i + 1) {
        ddfMetaDdfTagDef += '.';
      }
    }

    let ddfFormatCode0 = '';
    for (let i = 0; i < multiDDFFormat0Selections.length; i++) {
      ddfFormatCode0 += multiDDFFormat0Selections[i].value;
      if (multiDDFFormat0Selections.length !== i + 1) {
        ddfFormatCode0 += '.';
      }
    }

    let ddfFormatCode1 = '';
    for (let i = 0; i < multiDDFFormat1Selections.length; i++) {
      ddfFormatCode1 += multiDDFFormat1Selections[i].value;
      if (multiDDFFormat1Selections.length !== i + 1) {
        ddfFormatCode1 += '.';
      }
    }

    let ddfFormatCode2 = '';
    for (let i = 0; i < multiDDFFormat2Selections.length; i++) {
      ddfFormatCode2 += multiDDFFormat2Selections[i].value;
      if (multiDDFFormat2Selections.length !== i + 1) {
        ddfFormatCode2 += '.';
      }
    }

    let ddfFormatCode3 = '';
    for (let i = 0; i < multiDDFFormat3Selections.length; i++) {
      ddfFormatCode3 += multiDDFFormat3Selections[i].value;
      if (multiDDFFormat3Selections.length !== i + 1) {
        ddfFormatCode3 += '.';
      }
    }

    let ddfFormatCode4 = '';
    for (let i = 0; i < multiDDFFormat4Selections.length; i++) {
      ddfFormatCode4 += multiDDFFormat4Selections[i].value;
      if (multiDDFFormat4Selections.length !== i + 1) {
        ddfFormatCode4 += '.';
      }
    }

    let ddfFormatCode5 = '';
    for (let i = 0; i < multiDDFFormat5Selections.length; i++) {
      ddfFormatCode5 += multiDDFFormat5Selections[i].value;
      if (multiDDFFormat5Selections.length !== i + 1) {
        ddfFormatCode5 += '.';
      }
    }

    let ddfFormatCode6 = '';
    for (let i = 0; i < multiDDFFormat6Selections.length; i++) {
      ddfFormatCode6 += multiDDFFormat6Selections[i].value;
      if (multiDDFFormat6Selections.length !== i + 1) {
        ddfFormatCode6 += '.';
      }
    }

    let ddfFormatCode7 = '';
    for (let i = 0; i < multiDDFFormat7Selections.length; i++) {
      ddfFormatCode7 += multiDDFFormat7Selections[i].value;
      if (multiDDFFormat7Selections.length !== i + 1) {
        ddfFormatCode7 += '.';
      }
    }

    const simulatedDDFMetaSettingsTag =
      `\t<DDFTAGDEF>${ddfMetaDdfTagDef}</DDFTAGDEF>\n` +
      `\t\t\t<SUFFIX1>${ddfMetaSuffix1}</SUFFIX1>\n` +
      `\t\t\t<SUFFIX2>${ddfMetaSuffix2}</SUFFIX2>\n` +
      `\t\t\t<PREFIX1>${ddfMetaPrefix1}</PREFIX1>\n` +
      `\t\t\t<ALT1>${ddfMetaALT1}</ALT1>\n` +
      `\t  <!-- Key value for ALT Sequence : ASCII value of Key that need to press with the ALT Key. (Support only for single key in v1)  -->\n` +
      `\t  <!-- ALT sequence only works as the first prefix. All other formats will be not supported in v1 -->\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='0' DdfFormat='${ddfFormatCode0}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='1' DdfFormat='${ddfFormatCode1}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='2' DdfFormat='${ddfFormatCode2}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='3' DdfFormat='${ddfFormatCode3}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='4' DdfFormat='${ddfFormatCode4}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='5' DdfFormat='${ddfFormatCode5}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='6' DdfFormat='${ddfFormatCode6}'/>\n` +
      `\t\t\t\t\t<DDFDEF DdfCode='7' DdfFormat='${ddfFormatCode7}'/>\n`;

    return simulatedDDFMetaSettingsTag;
  };

  const generateConfigXmlCoreScanner = () => {
    const configXml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<!-- Core-Scanner for Windows Configuration xml v2.0 -->\n\n\n` +
      `<CONFIG>\n\n` +
      `  <METADATA>\n` +
      `${generateMetaData()}\n` +
      `  </METADATA>\n\n` +
      `\t<SERIAL_MODE_SETTINGS>\n` +
      `\t\t${generateSerialModeSettings()}\n` +
      `\t</SERIAL_MODE_SETTINGS>\n\n` +
      `\t<IP_DEVICE_SETTINGS>\n` +
      `\t\t${generateIPDeviceSettings()}\n` +
      `\t</IP_DEVICE_SETTINGS>\n\n` +
      `\t<SIMULATED_HID_KB_SETTINGS>\n` +
      `\t\t${generateSimulatedHidKBSettings()}\n` +
      `\t</SIMULATED_HID_KB_SETTINGS>\n\n\n` +
      `\t<DDF>\n` +
      `\t\t<DDFMETA>\n` +
      `\t\t${generateDDFMeta()}\n` +
      `\t\t</DDFMETA>\n` +
      `\t\t<DDFSELECT>` +
      `${ddfSelect}` +
      `</DDFSELECT>\n` +
      `\t</DDF>\n` +
      `</CONFIG>`;
    return configXml;
  };

  // Create config and download it.
  const getDownloadConfigFileCoreScanner = () => {
    const textToSave = generateConfigXmlCoreScanner();
    const data = new Blob([textToSave], { type: 'text/xml' });
    const xmlURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = xmlURL;
    const fileName = `Config.xml`;
    tempLink.setAttribute('download', fileName);
    tempLink.click();
    navigate('/page/configSelection');
  };

  const onChangeSerialModesHandler = (e) => {
    setCurrentSerialMode(e);
  };

  const onChangePortIdHandler = (e) => {
    setCurrentPortIds(e);
  };

  const onChangeBaudRateHandler = (e) => {
    SetCurrentBaudRate(e);
  };

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

  useEffect(() => {
    // Set serial mode types
    setSerialModes([]);
    const serialModeTypes = [
      { label: 'SSI', value: 'SSI' },
      { label: 'NIXMODB', value: 'NIXMODB' },
    ];
    setSerialModes(serialModeTypes);

    // Set baud rate types
    setBaudRates([]);
    const baudRatesSet = [
      { label: '9600', value: '9600' },
      { label: '115200', value: '115200' },
    ];
    setBaudRates(baudRatesSet);

    // Set port ids
    setPortIds([]);
    const portIdSet = [
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '10', value: '10' },
      { label: '11', value: '11' },
      { label: '12', value: '12' },
      { label: '13', value: '13' },
      { label: '14', value: '14' },
      { label: '15', value: '15' },
      { label: '16', value: '16' },
      { label: '17', value: '17' },
      { label: '18', value: '18' },
      { label: '19', value: '19' },
      { label: '20', value: '20' },
      { label: '21', value: '21' },
      { label: '22', value: '22' },
      { label: '23', value: '23' },
      { label: '24', value: '24' },
      { label: '25', value: '25' },
      { label: '26', value: '26' },
      { label: '27', value: '27' },
      { label: '28', value: '28' },
      { label: '29', value: '29' },
      { label: '30', value: '30' },
      { label: '31', value: '31' },
      { label: '32', value: '32' },
    ];
    setPortIds(portIdSet);

    // Set ASCII codes
    setASCIICodes([]);
    const ASCIICodesSet = [
      { label: '<NUL>', value: '0' },
      { label: '<SOH>', value: '1' },
      { label: '<STX>', value: '2' },
      { label: '<ETX>', value: '3' },
      { label: '<EOT>', value: '4' },
      { label: '<ENQ>', value: '5' },
      { label: '<ACK>', value: '6' },
      { label: '<BEL>', value: '7' },
      { label: '<BS>', value: '8' },
      { label: '<TAB>', value: '9' },
      { label: '<LF>', value: '10' },
      { label: '<VT>', value: '11' },
      { label: '<FF>', value: '12' },
      { label: '<CR>', value: '13' },
      { label: '<SO>', value: '14' },
      { label: '<SI>', value: '15' },
      { label: '<DLE>', value: '16' },
      { label: '<DC1>', value: '17' },
      { label: '<DC2>', value: '18' },
      { label: '<DC3>', value: '19' },
      { label: '<DC4>', value: '20' },
      { label: '<NAK>', value: '21' },
      { label: '<SYN>', value: '22' },
      { label: '<ETB>', value: '23' },
      { label: '<CAN>', value: '24' },
      { label: '<EM>', value: '25' },
      { label: '<SUB>', value: '26' },
      { label: '<ESC>', value: '27' },
      { label: '<FS>', value: '28' },
      { label: '<GS>', value: '29' },
      { label: '<RS>', value: '30' },
      { label: '<US>', value: '31' },
      { label: '<SPACE>', value: '32' },
      { label: '<!>', value: '33' },
      { label: '<">', value: '34' },
      { label: '<#>', value: '35' },
      { label: '<$>', value: '36' },
      { label: '<%>', value: '37' },
      { label: '<&>', value: '38' },
      { label: `<'>`, value: '39' },
      { label: '<(>', value: '40' },
      { label: '<)>', value: '41' },
      { label: '<*>', value: '42' },
      { label: '<+>', value: '43' },
      { label: '<,>', value: '44' },
      { label: '<->', value: '45' },
      { label: '<.>', value: '46' },
      { label: '</>', value: '47' },
      { label: '<0>', value: '48' },
      { label: '<1>', value: '49' },
      { label: '<2>', value: '50' },
      { label: '<3>', value: '51' },
      { label: '<4>', value: '52' },
      { label: '<5>', value: '53' },
      { label: `<6>`, value: '54' },
      { label: '<7>', value: '55' },
      { label: '<8>', value: '56' },
      { label: '<9>', value: '57' },
      { label: '<:>', value: '58' },
      { label: '<;>', value: '60' },
      { label: '<<>', value: '61' },
      { label: '<=>', value: '62' },
      { label: '<>>', value: '63' },
      { label: '<?>', value: '64' },
      { label: '<@>', value: '65' },
      { label: '<A>', value: '66' },
      { label: '<B>', value: '67' },
      { label: '<C>', value: '68' },
      { label: '<D>', value: '69' },
      { label: '<E>', value: '70' },
      { label: `<F>`, value: '71' },
      { label: '<G>', value: '72' },
      { label: '<H>', value: '73' },
      { label: '<I>', value: '74' },
      { label: '<J>', value: '74' },
      { label: '<K>', value: '75' },
      { label: '<L>', value: '76' },
      { label: '<M>', value: '77' },
      { label: '<N>', value: '78' },
      { label: '<O>', value: '79' },
      { label: '<P>', value: '80' },
      { label: '<Q>', value: '81' },
      { label: '<R>', value: '82' },
      { label: '<S>', value: '83' },
      { label: '<T>', value: '84' },
      { label: `<U>`, value: '85' },
      { label: '<V>', value: '86' },
      { label: '<W>', value: '87' },
      { label: '<X>', value: '88' },
      { label: '<Y>', value: '89' },
      { label: '<Z>', value: '90' },
      { label: '<[>', value: '91' },
      { label: '<\\>', value: '92' },
      { label: '<]>', value: '93' },
      { label: '<^>', value: '94' },
      { label: '<_>', value: '95' },
      { label: '<`>', value: '96' },
      { label: '<a>', value: '97' },
      { label: '<b>', value: '98' },
      { label: '<c>', value: '99' },
      { label: '<d>', value: '100' },
      { label: '<e>', value: '101' },
      { label: '<f>', value: '102' },
      { label: '<g>', value: '103' },
      { label: '<h>', value: '104' },
      { label: '<i>', value: '105' },
      { label: '<j>', value: '106' },
      { label: '<a>', value: '97' },
      { label: '<b>', value: '98' },
      { label: '<c>', value: '99' },
      { label: '<d>', value: '100' },
      { label: '<e>', value: '101' },
      { label: '<f>', value: '102' },
      { label: '<g>', value: '103' },
      { label: '<h>', value: '104' },
      { label: '<i>', value: '105' },
      { label: '<j>', value: '106' },
      { label: '<k>', value: '107' },
      { label: '<l>', value: '108' },
      { label: '<m>', value: '109' },
      { label: '<n>', value: '110' },
      { label: '<o>', value: '111' },
      { label: '<p>', value: '112' },
      { label: '<q>', value: '113' },
      { label: '<r>', value: '114' },
      { label: '<s>', value: '115' },
      { label: '<t>', value: '116' },
      { label: '<u>', value: '117' },
      { label: '<v>', value: '118' },
      { label: '<w>', value: '119' },
      { label: '<x>', value: '120' },
      { label: '<y>', value: '121' },
      { label: '<z>', value: '122' },
      { label: '<{>', value: '123' },
      { label: '<|>', value: '124' },
      { label: '<}>', value: '125' },
      { label: '<~>', value: '126' },
      { label: '<DEL>', value: '127' },
    ];
    setASCIICodes(ASCIICodesSet);

    // Set DDF code types
    setDdfCodes([]);
    const ddfCodeSet = [
      { label: 'SUFFIX1', value: 'SUFFIX1' },
      { label: 'SUFFIX2', value: 'SUFFIX2' },
      { label: 'PREFIX1', value: 'PREFIX1' },
      { label: 'ALT1', value: 'ALT1' },
      { label: 'DATA', value: 'DATA' },
    ];
    setDdfCodes(ddfCodeSet);
  }, []);

  return (
    <MainLayout>
      <div className="mt-4">
        <h1 className="topic-corescanner">CORESCANNER CONFIG FILE GENERATOR</h1>
        <hr className="topHeadingLine-corescanner" />
        <p className="font-bold text-lg text-center mt-4">
          You can Select Config from here :
          <span className="md:ml-6 text-info underline">
            <input
              type="file"
              name="file"
              onChange={changeFileHandlerCoreScanner}
            />
          </span>
        </p>
        <hr className="FileChooserLine-corescanner" />

        <h2 className="serialText-corescanner">SERIAL MODE SETTINGS</h2>
        <div className="center-container-corescanner">
          <div className="text-xs">
            <div className="mt-4 flex space-x-24 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="id"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>COM Port</div>
                </label>
                <Select
                  name="id"
                  id="id"
                  onChange={(e) => {
                    onChangePortIdHandler(e);
                  }}
                  value={currentPortIds}
                  styles={customStyles}
                  placeholder="Select COM Port"
                  options={portIds}
                  className="block text-sm pb-1 font-medium text-gray-700 w-48"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="baudRate"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Baud Rate</div>
                </label>
                <Select
                  name="baudRate"
                  id="baudRate"
                  onChange={(e) => {
                    onChangeBaudRateHandler(e);
                  }}
                  value={currentBaudRate}
                  styles={customStyles}
                  placeholder="Select Baud Rate"
                  options={baudRates}
                  className="block text-sm pb-1 font-medium text-gray-700 w-48"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="serialModes"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Serial Mode</div>
                </label>
                <Select
                  name="serialModes"
                  id="serialModes"
                  onChange={(e) => {
                    onChangeSerialModesHandler(e);
                  }}
                  value={currentSerialMode}
                  styles={customStyles}
                  placeholder="Select Serial Mode"
                  options={serialModes}
                  className="block text-sm pb-1 font-medium text-gray-700 w-48"
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="serialText-corescanner mt-10">IP DEVICE SETTINGS</h2>
        <div className="center-container-corescanner">
          <div className="text-xs">
            <div className="mt-2 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ipDevicePort"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>PORT</div>
                </label>
                <input
                  id="ipDevicePort"
                  onChange={(d) => onInputIPPortChange(d)}
                  name="ipDevicePort"
                  type="number"
                  placeholder="Enter Port"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={ipDevicePort}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="serialText-corescanner mt-10">
          SIMULATED HID KB SETTINGS
        </h2>
        <div className="center-container-corescanner">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="simulatedLocale"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Locale</div>
                  </label>
                  <Tooltip text="Default=0, French=1, English=2, Italian=3" />
                </div>
                <input
                  id="simulatedLocale"
                  onChange={(d) => onInputSimulatedHidChange(d, 'LOCALE')}
                  name="simulatedLocale"
                  type="number"
                  placeholder="Enter Locale"
                  min={0}
                  max={3}
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedLocale}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="simulatedEnable"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Enable</div>
                </label>
                <input
                  id="simulatedEnable"
                  onChange={(d) => onInputSimulatedHidChange(d, 'ENABLE')}
                  name="simulatedEnable"
                  type="number"
                  placeholder="Enter Enable Mode"
                  min={0}
                  max={1}
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedEnable}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="simulatedFunctionKey"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Function Key Mapping</div>
                </label>
                <input
                  id="simulatedFunctionKey"
                  onChange={(d) =>
                    onInputSimulatedHidChange(d, 'FUNCTION_KEY_MAPPING')
                  }
                  name="simulatedFunctionKey"
                  type="number"
                  placeholder="Enter Function Key Mapping"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedFunctionKey}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="simulatedInterKeyDelay"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Inter Key Delay</div>
                </label>
                <input
                  id="simulatedInterKeyDelay"
                  onChange={(d) =>
                    onInputSimulatedHidChange(d, 'INTER_KEY_DELAY')
                  }
                  name="simulatedInterKeyDelay"
                  type="number"
                  placeholder="Enter Inter Key Delay"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedInterKeyDelay}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="simulatedADFPath"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>ADF Path</div>
                </label>
                <input
                  id="simulatedADFPath"
                  onChange={(d) => onInputSimulatedHidChange(d, 'ADF_PATH')}
                  name="simulatedADFPath"
                  type="text"
                  placeholder="Enter ADF Path"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedADFPath}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="simulatedKeyCode"
                    className="block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Key Code Setting</div>
                  </label>
                  <Tooltip text="Enabled=1, Disabled=0" />
                </div>
                <input
                  id="simulatedKeyCode"
                  onChange={(d) =>
                    onInputSimulatedHidChange(d, 'KEY_CODE_SETTING')
                  }
                  name="simulatedKeyCode"
                  type="number"
                  min={0}
                  max={2}
                  placeholder="Enter Inter Key Delay"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={simulatedKeyCode}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="serialText-corescanner mt-10">Driver Data Formatting</h2>
        <div className="center-container-corescanner">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfMetaDdfTagDef"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Tag Def</div>
                </label>
                <Typeahead
                  id="ddfMetaDdfTagDef"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFTagDefSelections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF tag def"
                  selected={multiDDFTagDefSelections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfMetaSuffix1"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Suffix 1</div>
                </label>
                <Typeahead
                  id="ddfMetaSuffix1"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiSuffix1Selections(newSelections);
                  }}
                  options={ASCIICodes}
                  placeholder="Choose Siffix1"
                  selected={multiSuffix1Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfMetaSuffix2"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Suffix 2</div>
                </label>
                <Typeahead
                  id="ddfMetaSuffix2"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiSuffix2Selections(newSelections);
                  }}
                  options={ASCIICodes}
                  placeholder="Choose Siffix2"
                  selected={multiSuffix2Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfMetaPrefix1"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Prefix 1</div>
                </label>
                <Typeahead
                  id="ddfMetaPrefix1"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiPrefix1Selections(newSelections);
                  }}
                  options={ASCIICodes}
                  placeholder="Choose Prefix1"
                  selected={multiPrefix1Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfMetaALT1"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>ALT1</div>
                </label>
                <Typeahead
                  id="ddfMetaALT1"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiALT1Selections(newSelections);
                  }}
                  options={ASCIICodes}
                  placeholder="Choose ALT1"
                  selected={multiALT1Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode0"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 0</div>
                </label>
                <Typeahead
                  id="ddfFormatCode0"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat0Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code0"
                  selected={multiDDFFormat0Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode1"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 1</div>
                </label>
                <Typeahead
                  id="ddfFormatCode1"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat1Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code1"
                  selected={multiDDFFormat1Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode2"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 2</div>
                </label>
                <Typeahead
                  id="ddfFormatCode2"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat2Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code2"
                  selected={multiDDFFormat2Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode3"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 3</div>
                </label>
                <Typeahead
                  id="ddfFormatCode3"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat3Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code3"
                  selected={multiDDFFormat3Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode4"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 4</div>
                </label>
                <Typeahead
                  id="ddfFormatCode4"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat4Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code4"
                  selected={multiDDFFormat4Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode5"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 5</div>
                </label>
                <Typeahead
                  id="ddfFormatCode5"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat5Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code5"
                  selected={multiDDFFormat5Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode6"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 6</div>
                </label>
                <Typeahead
                  id="ddfFormatCode6"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat6Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code6"
                  selected={multiDDFFormat6Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full mb-16">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfFormatCode7"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Code 7</div>
                </label>
                <Typeahead
                  id="ddfFormatCode7"
                  multiple
                  onChange={(selections) => {
                    const newSelections = selections.map((selection) =>
                      selection.id
                        ? selection
                        : { ...selection, id: uniqueId() }
                    );
                    setMultiDDFFormat7Selections(newSelections);
                  }}
                  options={ddfCodes}
                  placeholder="Choose DDF Code7"
                  selected={multiDDFFormat7Selections}
                  className="rounded-md shadow-sm md:w-96 typeahead-input text-lg"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="ddfSelect"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>DDF Select</div>
                </label>
                <input
                  id="ddfSelect"
                  onChange={(d) => onInputDDFSelectChange(d)}
                  name="ddfSelect"
                  type="number"
                  placeholder="Enter DDF Select"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-96"
                  value={ddfSelect}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="fixed right-40 bottom-8 md:items-center justify-center w-40"
          style={{ background: '#ADD8E6' }}
        >
          <div className="border-2">
            <Button
              onClick={getDownloadConfigFileCoreScanner}
              sx={{ mr: 1 }}
              className="w-40"
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CoreScannerConfig;
