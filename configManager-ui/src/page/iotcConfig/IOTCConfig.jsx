import React, { useState, useEffect } from 'react';
import xmlJs from 'xml-js';
import { Button } from '@mui/material';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import './IOTCConfig.css';
import Tooltip from '../../components/Tooltip';

function IOTCConfig() {
  const [enableRotatingFileSink, setEnableRotatingFileSink] = useState(false);
  const [rotatingSinkLogFileName, setRotatingSinkLogFileName] = useState('');
  const [rotatingSinkLogFilePath, setRotatingSinkLogFilePath] = useState('');
  const [rotatingSinkMaxFileSize, setRotatingSinkMaxFileSize] = useState(0);
  const [rotatingSinkMaxFileCount, setRotatingSinkMaxFileCount] = useState(0);
  const [rotatingSinkLogPattern, setRotatingSinkLogPattern] = useState('');
  const [rotatingSinkLogLevel, setRotatingSinkLogLevel] = useState(0);
  const [enableStdoutColorSink, setEnableStdoutColorSink] = useState(false);
  const [stdoutColorSinkLogPattern, setStdoutColorSinkLogPattern] =
    useState('');
  const [stdoutColorSinkLogLevel, setStdoutColorSinkLogLevel] = useState(0);
  const [enableHttpSink, setEnableHttpSink] = useState(false);
  const [httpSinkUrl, setHttpSinkUrl] = useState('');
  const [httpSinkRequestHeader, setHttpSinkRequestHeader] = useState('');
  const [httpSinkBatchMode, setHttpSinkBatchMode] = useState('');
  const [httpSinkBatchSize, setHttpSinkBatchSize] = useState(0);
  const [httpSinkLoggingInterval, setHttpSinkLoggingInterval] = useState(0);
  const [httpSinkRealTimeLogFilter, setHttpSinkRealTimeLogFilter] =
    useState('');
  const [httpSinkVerboseMode, setHttpSinkVerboseMode] = useState('');
  const [httpSinkLogPattern, setHttpSinkLogPattern] = useState('');
  const [httpSinkLogLevel, setHttpSinkLogLevel] = useState(0);
  const [enableSavannaSink, setEnableSavannaSink] = useState(false);
  const [savannaSinkUrl, setSavannaSinkUrl] = useState('');
  const [savannaSinkRequestHeader, setSavannaSinkRequestHeader] = useState('');
  const [savannaSinkBatchMode, setSavannaSinkBatchMode] = useState('');
  const [savannaSinkBatchSize, setSavannaSinkBatchSize] = useState(0);
  const [savannaSinkLoggingInterval, setSavannaSinkLoggingInterval] =
    useState(0);
  const [savannaSinkRealTimeLogFilter, setSavannaSinkRealTimeLogFilter] =
    useState('');
  const [savannaSinkVerboseMode, setSavannaSinkVerboseMode] = useState('');
  const [enableWinEventSink, setEnableWinEventSink] = useState(false);
  const [winEventSinkLogPattern, setWinEventSinkLogPattern] = useState('');
  const [winEventSinkLogLevel, setWinEventSinkLogLevel] = useState(0);
  const [enableStatistics, setEnableStatistics] = useState(false);
  const [statisticsModel, setStatisticsModel] = useState('');
  const [statisticsSerial, setStatisticsSerial] = useState('');
  const [statisticsSchedule, setStatisticsSchedule] = useState('');
  const [statisticsScannerAttributes, setStatisticsScannerAttributes] =
    useState('');
  const [enableCheckHealth, setEnableCheckHealth] = useState(false);
  const [checkHealthModel, setCheckHealthModel] = useState('');
  const [checkHealthSerial, setCheckHealthSerial] = useState('');
  const [checkHealthSchedule, setCheckHealthSchedule] = useState('');
  const [checkHealthScannerAttributes, setCheckHealthScannerAttributes] =
    useState('');
  const [configChangeEnable, setConfigChangeEnable] = useState('');
  const [configChangeTimeout, setConfigChangeTimeout] = useState(0);
  const [enableBatteryStatistics, setEnableBatteryStatistics] = useState(false);
  const [batteryStatisticsSchedule, setBatteryStatisticsSchedule] =
    useState('');
  const [enableAgentStartUp, setEnableAgentStartUp] = useState(false);
  const [agentStartUpModel, setAgentStartUpModel] = useState('');
  const [agentStartUpSerial, setAgentStartUpSerial] = useState('');
  const [agentStartUpScannerAttributes, setAgentStartUpScannerAttributes] =
    useState('');
  const [enableSystemShutdown, setEnableSystemShutdown] = useState(false);
  const [enableOnAttach, setEnableOnAttach] = useState(false);
  const [onAttachModel, setOnAttachModel] = useState('');
  const [onAttachSerial, setOnAttachSerial] = useState('');
  const [onAttachScannerAttributes, setOnAttachScannerAttributes] =
    useState('');
  const [enableOnDetach, setEnableOnDetach] = useState(false);
  const [enableOnBarcode, setEnableOnBarcode] = useState(false);
  const [enableOnFirmwearDownloadStart, setEnableOnFirmwearDownloadStart] =
    useState(false);
  const [
    enableOnFirmwearDownloadProgress,
    setEnableOnFirmwearDownloadProgress,
  ] = useState(false);
  const [enableOnFirmwearDownloadEnd, setEnableOnFirmwearDownloadEnd] =
    useState(false);
  const [enableOnFirmwearDownloadError, setEnableOnFirmwearDownloadError] =
    useState(false);
  const [enableOnNonDecodeEvent, setEnableOnNonDecodeEvent] = useState(false);
  const [booleanTypeList, setBooleanTypeList] = useState([]);
  const navigate = useNavigate();

  const getConfigSinksAttributesIotc = (spdLogChild, ignore) => {
    switch (spdLogChild.attributes.name) {
      case 'rotating_file_sink_mt':
        setEnableRotatingFileSink(!ignore);
        spdLogChild.elements.forEach((rotatingFileChild) => {
          if (rotatingFileChild.name === 'property') {
            switch (rotatingFileChild.attributes.key) {
              case 'log_file_name':
                setRotatingSinkLogFileName(rotatingFileChild.attributes.value);
                break;
              case 'log_file_path':
                setRotatingSinkLogFilePath(rotatingFileChild.attributes.value);
                break;
              case 'max_file_size':
                setRotatingSinkMaxFileSize(rotatingFileChild.attributes.value);
                break;
              case 'max_file_count':
                setRotatingSinkMaxFileCount(rotatingFileChild.attributes.value);
                break;
              case 'log_pattern':
                setRotatingSinkLogPattern(rotatingFileChild.attributes.value);
                break;
              case 'log_level':
                setRotatingSinkLogLevel(rotatingFileChild.attributes.value);
                break;
              default:
              // nothing
            }
          }
        });
        break;
      case 'stdout_color_sink_mt':
        setEnableStdoutColorSink(!ignore);
        spdLogChild.elements.forEach((stdoutColorChild) => {
          if (stdoutColorChild.name === 'property') {
            switch (stdoutColorChild.attributes.key) {
              case 'log_pattern':
                setStdoutColorSinkLogPattern(stdoutColorChild.attributes.value);
                break;
              case 'log_level':
                setStdoutColorSinkLogLevel(stdoutColorChild.attributes.value);
                break;
              default:
              // nothing
            }
          }
        });
        break;
      case 'http_sink_mt':
        setEnableHttpSink(!ignore);
        spdLogChild.elements.forEach((httpChild) => {
          if (httpChild.name === 'property') {
            switch (httpChild.attributes.key) {
              case 'url':
                setHttpSinkUrl(httpChild.attributes.value);
                break;
              case 'request_header':
                setHttpSinkRequestHeader(httpChild.attributes.value);
                break;
              case 'batch_mode':
                setHttpSinkBatchMode(httpChild.attributes.value);
                break;
              case 'batch_size':
                setHttpSinkBatchSize(httpChild.attributes.value);
                break;
              case 'logging_interval':
                setHttpSinkLoggingInterval(httpChild.attributes.value);
                break;
              case 'real_time_log_filter':
                setHttpSinkRealTimeLogFilter(httpChild.attributes.value);
                break;
              case 'verbose_mode':
                setHttpSinkVerboseMode(httpChild.attributes.value);
                break;
              case 'log_pattern':
                setHttpSinkLogPattern(httpChild.attributes.value);
                break;
              case 'log_level':
                setHttpSinkLogLevel(httpChild.attributes.value);
                break;
              default:
              // nothing
            }
          }
        });
        break;
      case 'savanna_sink_mt':
        setEnableSavannaSink(!ignore);
        spdLogChild.elements.forEach((savannaChild) => {
          if (savannaChild.name === 'property') {
            switch (savannaChild.attributes.key) {
              case 'url':
                setSavannaSinkUrl(savannaChild.attributes.value);
                break;
              case 'request_header':
                setSavannaSinkRequestHeader(savannaChild.attributes.value);
                break;
              case 'batch_mode':
                setSavannaSinkBatchMode(savannaChild.attributes.value);
                break;
              case 'batch_size':
                setSavannaSinkBatchSize(savannaChild.attributes.value);
                break;
              case 'logging_interval':
                setSavannaSinkLoggingInterval(savannaChild.attributes.value);
                break;
              case 'real_time_log_filter':
                setSavannaSinkRealTimeLogFilter(savannaChild.attributes.value);
                break;
              case 'verbose_mode':
                setSavannaSinkVerboseMode(savannaChild.attributes.value);
                break;
              default:
              // nothing
            }
          }
        });
        break;
      case 'win_eventlog_sink_mt':
        setEnableWinEventSink(!ignore);
        spdLogChild.elements.forEach((winEventChild) => {
          if (winEventChild.name === 'property') {
            switch (winEventChild.attributes.key) {
              case 'log_pattern':
                setWinEventSinkLogPattern(winEventChild.attributes.value);
                break;
              case 'log_level':
                setWinEventSinkLogLevel(winEventChild.attributes.value);
                break;
              default:
              // nothing
            }
          }
        });
        break;
      default:
      // nothing
    }
  };

  const getConfigAttributesIotc = (configData) => {
    configData.elements.forEach((config) => {
      if (config.name === 'config') {
        config.elements.forEach((configChild) => {
          if (configChild.name === 'settings') {
            configChild.elements.forEach((settings) => {
              if (settings.name === 'spd_log') {
                settings.elements.forEach((spdLog) => {
                  if (spdLog.name === 'sinks') {
                    spdLog.elements.forEach((spdLogChild) => {
                      if (spdLogChild.name === 'sink') {
                        getConfigSinksAttributesIotc(spdLogChild, false);
                      } else if (
                        spdLogChild.name === 'ignore' &&
                        spdLogChild.type === 'instruction'
                      ) {
                        const jsonData = xmlJs.xml2json(
                          spdLogChild.instruction,
                          {
                            compact: false,
                            spaces: 4,
                          }
                        );
                        JSON.parse(jsonData).elements.forEach(
                          (ignoreSpdLogChild) => {
                            if (ignoreSpdLogChild.name === 'sink') {
                              getConfigSinksAttributesIotc(
                                ignoreSpdLogChild,
                                true
                              );
                            }
                          }
                        );
                      }
                    });
                  }
                });
              } else if (settings.name === 'log-elements') {
                settings.elements.forEach((settingsChild) => {
                  if (settingsChild.type === 'element') {
                    switch (settingsChild.name) {
                      case 'get-statistics':
                        setEnableStatistics(
                          settingsChild.attributes.enabled === 'true'
                        );
                        settingsChild.elements.forEach(
                          (statisticsElementChild) => {
                            if (statisticsElementChild.name === 'group') {
                              setStatisticsModel(
                                statisticsElementChild.attributes.model
                              );
                              setStatisticsSerial(
                                statisticsElementChild.attributes.serial
                              );
                              setStatisticsSchedule(
                                statisticsElementChild.attributes.schedule
                              );
                              statisticsElementChild.elements.forEach(
                                (statisticsGroupChild) => {
                                  if (
                                    statisticsGroupChild.name ===
                                    'scanner-attribute-ids'
                                  ) {
                                    const logElementAttributesForStatistics =
                                      [];
                                    statisticsGroupChild.elements.forEach(
                                      (statisticsElementAttributes) => {
                                        if (
                                          statisticsElementAttributes.type ==
                                          'text'
                                        ) {
                                          logElementAttributesForStatistics.push(
                                            statisticsElementAttributes.text
                                          );
                                        }
                                      }
                                    );
                                    setStatisticsScannerAttributes(
                                      logElementAttributesForStatistics.toString()
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                        break;
                      case 'check-health':
                        setEnableCheckHealth(
                          settingsChild.attributes.enabled === 'true'
                        );
                        settingsChild.elements.forEach(
                          (checkHealthElementChild) => {
                            if (checkHealthElementChild.name === 'group') {
                              setCheckHealthModel(
                                checkHealthElementChild.attributes.model
                              );
                              setCheckHealthSerial(
                                checkHealthElementChild.attributes.serial
                              );
                              setCheckHealthSchedule(
                                checkHealthElementChild.attributes.schedule
                              );
                              checkHealthElementChild.elements.forEach(
                                (checkHealthGroupChild) => {
                                  if (
                                    checkHealthGroupChild.name ===
                                    'scanner-attribute-ids'
                                  ) {
                                    const logElementAttributesForCheckHealth =
                                      [];
                                    checkHealthGroupChild.elements.forEach(
                                      (checkHealthElementAttributes) => {
                                        if (
                                          checkHealthElementAttributes.type ==
                                          'text'
                                        ) {
                                          logElementAttributesForCheckHealth.push(
                                            checkHealthElementAttributes.text
                                          );
                                        }
                                      }
                                    );
                                    setCheckHealthScannerAttributes(
                                      logElementAttributesForCheckHealth.toString()
                                    );
                                  } else if (
                                    checkHealthGroupChild.name ===
                                    'on-config-name-change'
                                  ) {
                                    setConfigChangeEnable(
                                      checkHealthGroupChild.attributes
                                        .enabled === 'true'
                                    );
                                    setConfigChangeTimeout(
                                      checkHealthGroupChild.attributes.timeout
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                        break;
                      case 'get-battery-statistics':
                        setEnableBatteryStatistics(
                          settingsChild.attributes.enabled === 'true'
                        );
                        setBatteryStatisticsSchedule(
                          settingsChild.attributes.schedule
                        );
                        break;
                      case 'on-agent-start-up':
                        setEnableAgentStartUp(
                          settingsChild.attributes.enabled === 'true'
                        );
                        settingsChild.elements.forEach(
                          (agentStartUpElementChild) => {
                            if (agentStartUpElementChild.name === 'group') {
                              setAgentStartUpModel(
                                agentStartUpElementChild.attributes.model
                              );
                              setAgentStartUpSerial(
                                agentStartUpElementChild.attributes.serial
                              );
                              agentStartUpElementChild.elements.forEach(
                                (agentStartUpGroupChild) => {
                                  if (
                                    agentStartUpGroupChild.name ===
                                    'scanner-attribute-ids'
                                  ) {
                                    const logElementAttributesForAgentStartUp =
                                      [];
                                    agentStartUpGroupChild.elements.forEach(
                                      (agentStartUpElementAttributes) => {
                                        if (
                                          agentStartUpElementAttributes.type ==
                                          'text'
                                        ) {
                                          logElementAttributesForAgentStartUp.push(
                                            agentStartUpElementAttributes.text
                                          );
                                        }
                                      }
                                    );
                                    setAgentStartUpScannerAttributes(
                                      logElementAttributesForAgentStartUp.toString()
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                        break;
                      case 'on-system-shutdown':
                        setEnableSystemShutdown(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-attach':
                        setEnableOnAttach(
                          settingsChild.attributes.enabled === 'true'
                        );
                        settingsChild.elements.forEach(
                          (onAttachElementChild) => {
                            if (onAttachElementChild.name === 'group') {
                              setOnAttachModel(
                                onAttachElementChild.attributes.model
                              );
                              setOnAttachSerial(
                                onAttachElementChild.attributes.serial
                              );
                              onAttachElementChild.elements.forEach(
                                (onAttachGroupChild) => {
                                  if (
                                    onAttachGroupChild.name ===
                                    'scanner-attribute-ids'
                                  ) {
                                    const logElementAttributesForOnAttach = [];
                                    onAttachGroupChild.elements.forEach(
                                      (onAttachElementAttributes) => {
                                        if (
                                          onAttachElementAttributes.type ==
                                          'text'
                                        ) {
                                          logElementAttributesForOnAttach.push(
                                            onAttachElementAttributes.text
                                          );
                                        }
                                      }
                                    );
                                    setOnAttachScannerAttributes(
                                      logElementAttributesForOnAttach.toString()
                                    );
                                  }
                                }
                              );
                            }
                          }
                        );
                        break;
                      case 'on-detach':
                        setEnableOnDetach(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-barcode':
                        setEnableOnBarcode(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-firmware-download-start':
                        setEnableOnFirmwearDownloadStart(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-firmware-download-progress':
                        setEnableOnFirmwearDownloadProgress(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-firmware-download-end':
                        setEnableOnFirmwearDownloadEnd(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-firmware-download-error':
                        setEnableOnFirmwearDownloadError(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      case 'on-non-decode-event':
                        setEnableOnNonDecodeEvent(
                          settingsChild.attributes.enabled === 'true'
                        );
                        break;
                      default:
                      // nothing;
                    }
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  const changeFileHandlerIotc = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = (evt) => {
      const readerData = evt.target.result;
      const jsonData = xmlJs.xml2json(readerData, {
        compact: false,
        spaces: 4,
      });
      getConfigAttributesIotc(JSON.parse(jsonData));
    };
  };

  const enableSinkHandler = (e, sinkType) => {
    switch (sinkType) {
      case 'rotating_file_sink_mt':
        setEnableRotatingFileSink(e.target.checked);
        break;
      case 'stdout_color_sink_mt':
        setEnableStdoutColorSink(e.target.checked);
        break;
      case 'http_sink_mt':
        setEnableHttpSink(e.target.checked);
        break;
      case 'savanna_sink_mt':
        setEnableSavannaSink(e.target.checked);
        break;
      case 'win_eventlog_sink_mt':
        setEnableWinEventSink(e.target.checked);
        break;
      default:
      // nothing
    }
  };

  const onInputSinksChange = (e, menu) => {
    switch (menu) {
      case 'rotatingSinkLogFileName':
        setRotatingSinkLogFileName(e.target.value);
        break;
      case 'rotatingSinkLogFilePath':
        setRotatingSinkLogFilePath(e.target.value);
        break;
      case 'rotatingSinkMaxFileSize':
        setRotatingSinkMaxFileSize(e.target.value);
        break;
      case 'rotatingSinkMaxFileCount':
        setRotatingSinkMaxFileCount(e.target.value);
        break;
      case 'rotatingSinkLogPattern':
        setRotatingSinkLogPattern(e.target.value);
        break;
      case 'rotatingSinkLogLevel':
        setRotatingSinkLogLevel(e.target.value);
        break;
      case 'stdoutColorSinkLogPattern':
        setStdoutColorSinkLogPattern(e.target.value);
        break;
      case 'stdoutColorSinkLogLevel':
        setStdoutColorSinkLogLevel(e.target.value);
        break;
      case 'httpSinkUrl':
        setHttpSinkUrl(e.target.value);
        break;
      case 'httpSinkRequestHeader':
        setHttpSinkRequestHeader(e.target.value);
        break;
      case 'httpSinkBatchSize':
        setHttpSinkBatchSize(e.target.value);
        break;
      case 'httpSinkLoggingInterval':
        setHttpSinkLoggingInterval(e.target.value);
        break;
      case 'httpSinkRealTimeLogFilter':
        setHttpSinkRealTimeLogFilter(e.target.value);
        break;
      case 'log_pattern':
        setHttpSinkLogPattern(e.target.value);
        break;
      case 'httpSinkLogLevel':
        setHttpSinkLogLevel(e.target.value);
        break;
      case 'savannaSinkUrl':
        setSavannaSinkUrl(e.target.value);
        break;
      case 'savannaSinkRequestHeader':
        setSavannaSinkRequestHeader(e.target.value);
        break;
      case 'savannaSinkBatchSize':
        setSavannaSinkBatchSize(e.target.value);
        break;
      case 'savannaSinkLoggingInterval':
        setSavannaSinkLoggingInterval(e.target.value);
        break;
      case 'savannaSinkRealTimeLogFilter':
        setSavannaSinkRealTimeLogFilter(e.target.value);
        break;
      case 'winEventSinkLogPattern':
        setWinEventSinkLogPattern(e.target.value);
        break;
      case 'winEventSinkLogLevel':
        setWinEventSinkLogLevel(e.target.value);
        break;
      default:
      // nothing
    }
  };

  const enableLogElementsHandler = (e, elementType) => {
    switch (elementType) {
      case 'get-statistics':
        setEnableStatistics(e.target.checked);
        break;
      case 'check-health':
        setEnableCheckHealth(e.target.checked);
        break;
      case 'get-battery-statistics':
        setEnableBatteryStatistics(e.target.checked);
        break;
      case 'on-agent-start-up':
        setEnableAgentStartUp(e.target.checked);
        break;
      case 'on-attach':
        setEnableOnAttach(e.target.checked);
        break;
      case 'on-system-shutdown':
        setEnableSystemShutdown(e.target.checked);
        break;
      case 'on-detach':
        setEnableOnDetach(e.target.checked);
        break;
      case 'on-barcode':
        setEnableOnBarcode(e.target.checked);
        break;
      case 'on-firmware-download-start':
        setEnableOnFirmwearDownloadStart(e.target.checked);
        break;
      case 'on-firmware-download-progress':
        setEnableOnFirmwearDownloadProgress(e.target.checked);
        break;
      case 'on-firmware-download-end':
        setEnableOnFirmwearDownloadEnd(e.target.checked);
        break;
      case 'on-firmware-download-error':
        setEnableOnFirmwearDownloadError(e.target.checked);
        break;
      case 'on-non-decode-event':
        setEnableOnNonDecodeEvent(e.target.checked);
        break;
      default:
      // nothing
    }
  };

  const onInputLogElementChange = (e, element) => {
    switch (element) {
      case 'statisticsModel':
        setStatisticsModel(e.target.value);
        break;
      case 'statisticsSerial':
        setStatisticsSerial(e.target.value);
        break;
      case 'statisticsSchedule':
        setStatisticsSchedule(e.target.value);
        break;
      case 'statisticsScannerAttributes':
        setStatisticsScannerAttributes(e.target.value);
        break;
      case 'checkHealthModel':
        setCheckHealthModel(e.target.value);
        break;
      case 'checkHealthSerial':
        setCheckHealthSerial(e.target.value);
        break;
      case 'checkHealthSchedule':
        setCheckHealthSchedule(e.target.value);
        break;
      case 'checkHealthScannerAttributes':
        setCheckHealthScannerAttributes(e.target.value);
        break;
      case 'configChangeEnable':
        setConfigChangeEnable(e.target.value);
        break;
      case 'configChangeTimeout':
        setConfigChangeTimeout(e.target.value);
        break;
      case 'batteryStatisticsSchedule':
        setBatteryStatisticsSchedule(e.target.value);
        break;
      case 'agentStartUpModel':
        setAgentStartUpModel(e.target.value);
        break;
      case 'agentStartUpSerial':
        setAgentStartUpSerial(e.target.value);
        break;
      case 'agentStartUpScannerAttributes':
        setAgentStartUpScannerAttributes(e.target.value);
        break;
      case 'onAttachModel':
        setOnAttachModel(e.target.value);
        break;
      case 'onAttachSerial':
        setOnAttachSerial(e.target.value);
        break;
      case 'onAttachScannerAttributes':
        setOnAttachScannerAttributes(e.target.value);
        break;
      default:
      // nothing
    }
  };

  const generateRotatingFileSink = () => {
    const sinkRotatingFileSinkTag =
      `\t\t\t\t<sink type="rotating_file_sink_mt" name="rotating_file_sink_mt">\n` +
      `\t\t\t\t\t<!-- Name of the Log file. %h - Host name , %H - Host ID (Physical address of the first MAC), %u - User name without domain (Ex. AAA), %U - User name with domain (Ex. AAA@zebra.com. Domain in @ format) and %Q-<VariableName>% - VariableName is any system/user environmental variable -->\n` +
      `\t\t\t\t\t<property key="log_file_name" value="${rotatingSinkLogFileName}" />\n` +
      `\t\t\t\t\t<!-- Path where the log files will be saved. The path must be accessible for the IoT Connector to create the logs. -->\n` +
      `\t\t\t\t\t<!-- log_file_path can be a network location as well. Eg for Windows systems: value="\\\\10.100.100.10\\Temp\\iotConnector-logs" . For Linux systems, first mount the shared folder to current system. Then give the path of that location on the current system -->\n` +
      `\t\t\t\t\t<property key="log_file_path" value="${rotatingSinkLogFilePath}" />\n` +
      `\t\t\t\t\t<!-- Max file size in Kilo Bytes (considering 1KB = 1024B). Minimum size is 5KB and if any value less is defined, will be defaulted to the minimum value. -->\n` +
      `\t\t\t\t\t<property key="max_file_size" value="${rotatingSinkMaxFileSize}" />\n` +
      `\t\t\t\t\t<!-- Max file count. The minimum is 1 and anything less or invalid value will be defaulted to 1. -->\n` +
      `\t\t\t\t\t<property key="max_file_count" value="${rotatingSinkMaxFileCount}" />\n` +
      `\t\t\t\t\t<!-- Pattern of a single log entry. Please refer to https://github.com/gabime/spdlog/wiki/3.-Custom-formatting for more information. -->\n` +
      `\t\t\t\t\t<!-- To add host info into a log entry. %J - Host name , %K - Host ID (Physical address of the first MAC), %U - User name without domain, %V - User name with domain. and %Q-<VariableName>% - VariableName is any system/user environmental variable -->\n` +
      `\t\t\t\t\t<property key="log_pattern" value="${rotatingSinkLogPattern}" />\n` +
      `\t\t\t\t\t<!-- Log level to be recorded.  2 = INFO, 3 = WARNING, 4 = ERROR, 5 = CRITICAL 6 = LOG_OFF, 0,1 = TRACE,DEBUG (Works only with debug build) -->\n` +
      `\t\t\t\t\t<property key="log_level" value="${rotatingSinkLogLevel}" />\n` +
      `\t\t\t\t</sink>`;

    if (!enableRotatingFileSink) {
      const ignoreSinkRotatingFileSinkTag = `\t\t\t\t<?ignore \n${sinkRotatingFileSinkTag}\n\t\t\t\t?>`;
      return ignoreSinkRotatingFileSinkTag;
    }
    return sinkRotatingFileSinkTag;
  };

  const generateStdOutColorFileSink = () => {
    const sinkStdOutColorSinkTag =
      `\t\t\t\t<sink type="stdout_color_sink_mt" name="stdout_color_sink_mt">\n` +
      `\t\t\t\t\t<property key="log_pattern" value="${stdoutColorSinkLogPattern}" />\n` +
      `\t\t\t\t\t<property key="log_level" value="${stdoutColorSinkLogLevel}" />\n` +
      `\t\t\t\t</sink>`;

    if (!enableRotatingFileSink) {
      const ignoreSinkStdOutColorSinkTag = `\t\t\t\t<?ignore \n${sinkStdOutColorSinkTag}\n\t\t\t\t?>`;
      return ignoreSinkStdOutColorSinkTag;
    }
    return sinkStdOutColorSinkTag;
  };

  const generateHttpSink = () => {
    const httpSinkTag =
      `\t\t\t\t<sink type="http_sink_mt" name="http_sink_mt">\n` +
      `\t\t\t\t\t<!-- URL of the server instance. This can be saved as a environment variale and be used in the format shown.%Q-SERVER_URL% -->\n` +
      `\t\t\t\t\t<property key="url" value="${httpSinkUrl}" />\n` +
      `\t\t\t\t\t<!-- HTTP headers for the request. Use semicolon(;) to separate multiple headers. Eg : header1;header2. This can be saved as a environment variale and be used in the format shown.%Q-SERVER_REQUEST_HEADER% -->\n` +
      `\t\t\t\t\t<property key="request_header" value="${httpSinkRequestHeader}" />\n` +
      `\t\t\t\t\t<!-- Set the value to "true" to enable the batch mode. You can set the logging time interval and/or number of log entries(batch size) per batch -->\n` +
      `\t\t\t\t\t<property key="batch_mode" value="${httpSinkBatchMode}" />\n` +
      `\t\t\t\t\t<!-- Number of logs per batch -->\n` +
      `\t\t\t\t\t<property key="batch_size" value="${httpSinkBatchSize}" />\n` +
      `\t\t\t\t\t<!-- Time interval in seconds. Eg: 20.0 -->\n` +
      `\t\t\t\t\t<property key="logging_interval" value="${httpSinkLoggingInterval}" />\n` +
      `\t\t\t\t\t<!-- Add strings that contain in logs to be send as soon as they happen. Use comma(,) to separate multiple entries. Eg : "EVENT:DEVICE ATTACHED,EVENT:DEVICE DETACHED" -->\n` +
      `\t\t\t\t\t<property key="real_time_log_filter" value="${httpSinkRealTimeLogFilter}" />\n` +
      `\t\t\t\t\t<!-- Set the value to true to get HTTP request/response information in a file named "logs/iotConnector-verbose.log"-->\n` +
      `\t\t\t\t\t<property key="verbose_mode" value="${httpSinkVerboseMode}" />\n` +
      `\t\t\t\t\t<property key="log_pattern" value='${httpSinkLogPattern}' />\n` +
      `\t\t\t\t\t<property key="log_level" value="${httpSinkLogLevel}" />\n` +
      `\t\t\t\t</sink>`;

    if (!enableHttpSink) {
      const ignoreHttpSinkTag = `\t\t\t\t<?ignore \n${httpSinkTag}\n\t\t\t\t?>`;
      return ignoreHttpSinkTag;
    }
    return httpSinkTag;
  };

  const generateSavannaSink = () => {
    const savannaSinkTag =
      `\t\t\t\t<sink type="savanna_sink_mt" name="savanna_sink_mt">\n` +
      `\t\t\t\t  <!-- URL of the server instance -->\n` +
      `\t\t\t\t  <property key="url" value="${savannaSinkUrl}" />\n` +
      `\t\t\t\t  <!-- HTTP headers for the request. Use semicolon(;) to separate multiple headers. Eg : header1;header2 -->\n` +
      `\t\t\t\t  <property key="request_header" value="${savannaSinkRequestHeader}" />\n` +
      `\t\t\t\t\t<!-- Set the value to "true" to enable the batch mode. You can set the logging time interval and/or number of log entries(batch size) per batch -->\n` +
      `\t\t\t\t\t<property key="batch_mode" value="${savannaSinkBatchMode}" />\n` +
      `\t\t\t\t\t<!-- Number of logs per batch -->\n` +
      `\t\t\t\t\t<property key="batch_size" value="${savannaSinkBatchSize}" />\n` +
      `\t\t\t\t\t<!-- Time interval in seconds. Eg: 20.0 -->\n` +
      `\t\t\t\t\t<property key="logging_interval" value="${savannaSinkLoggingInterval}" />\n` +
      `\t\t\t\t\t<!-- Add strings that contain in logs to be send as soon as they happen. Use comma(,) to separate multiple entries. Eg : "EVENT:DEVICE ATTACHED,EVENT:DEVICE DETACHED" -->\n` +
      `\t\t\t\t\t<property key="real_time_log_filter" value="${savannaSinkRealTimeLogFilter}" />\n` +
      `\t\t\t\t\t<!-- Set the value to true to get HTTP request/response information in a file named "logs/iotConnector-verbose.log"-->\n` +
      `\t\t\t\t\t<property key="verbose_mode" value="${savannaSinkVerboseMode}" />\n` +
      `\t\t\t\t</sink>`;

    if (!enableSavannaSink) {
      const ignoreSavannaSinkTag = `\t\t\t  <?ignore \n${savannaSinkTag}\n\t\t\t\t?>`;
      return ignoreSavannaSinkTag;
    }
    return savannaSinkTag;
  };

  const generateWinEventLogSink = () => {
    const winEventLogSinkTag =
      `\t\t\t\t<sink type="win_eventlog_sink_mt" name="win_eventlog_sink_mt">\n` +
      `\t\t\t\t\t<property key="log_pattern" value="${winEventSinkLogPattern}" />\n` +
      `\t\t\t\t\t<property key="log_level" value="${winEventSinkLogLevel}" />\n` +
      `\t\t\t\t</sink>`;

    if (!enableWinEventSink) {
      const ignoreWinEventLogSinkTag = `\t\t\t\t<?ignore \n${winEventLogSinkTag}\n\t\t\t\t?>`;
      return ignoreWinEventLogSinkTag;
    }
    return winEventLogSinkTag;
  };

  const generateGetStatistics = () => {
    const getStatisticsTag =
      `\t\t\t<get-statistics enabled="${enableStatistics}">\n` +
      `\t\t\t\t<!-- Regular expression wildcards for model and serial may be defined -->\n` +
      `\t\t\t\t<!-- Refer to https://github.com/mariusbancila/croncpp for the schedule pattern -->\n` +
      `\t\t\t\t<!-- The schedule on the following line gets statistics daily at 2am -->\n` +
      `\t\t\t\t<group model="${statisticsModel}" serial="${statisticsSerial}" schedule="${statisticsSchedule}">\n` +
      `\t\t\t\t\t<!-- Scanner-attribute-ids will be queried from the scanner and their values will be logged. Multiple attributes separated by commas may be listed -->\n` +
      `\t\t\t\t\t<scanner-attribute-ids>${statisticsScannerAttributes}</scanner-attribute-ids>\n` +
      `\t\t\t\t</group>\n` +
      `\t\t\t</get-statistics>`;

    return getStatisticsTag;
  };

  const generateCheckHealth = () => {
    const getCheckHealthTag =
      `\t\t\t<check-health enabled="${enableCheckHealth}">\n` +
      `\t\t\t\t<group model="${checkHealthModel}" serial="${checkHealthSerial}" schedule="${checkHealthSchedule}">\n` +
      `\t\t\t\t\t<scanner-attribute-ids>${checkHealthScannerAttributes}</scanner-attribute-ids>\n` +
      `\t\t\t\t\t<!-- on-config-name-change is used to enable/disable log entries when a config name change occurs. This will be logged using the same schedule as check-health -->\n` +
      `\t\t\t\t\t<!-- The timeout value specifies the time to wait before logging a config change -->\n` +
      `\t\t\t\t\t<!-- The max timeout value is 60000 milliseconds (60 seconds). -->\n` +
      `\t\t\t\t\t<on-config-name-change enabled="${configChangeEnable}" timeout="${configChangeTimeout}" />\n` +
      `\t\t\t\t</group>\n` +
      `\t\t\t</check-health>`;

    return getCheckHealthTag;
  };

  const generateOnAgentStartUp = () => {
    const getOnAgentStartUpTag =
      `\t\t\t<on-agent-start-up enabled="${enableAgentStartUp}">\n` +
      `\t\t\t\t<group model="${agentStartUpModel}" serial="${agentStartUpSerial}">\n` +
      `\t\t\t\t\t<scanner-attribute-ids>${agentStartUpScannerAttributes}</scanner-attribute-ids>\n` +
      `\t\t\t\t</group>\n` +
      `\t\t\t</on-agent-start-up>`;

    return getOnAgentStartUpTag;
  };

  const generateOnAttach = () => {
    const getOnAttachTag =
      `\t\t\t<on-attach enabled="${enableOnAttach}">\n` +
      `\t\t\t\t<group model="${onAttachModel}" serial="${onAttachSerial}">\n` +
      `\t\t\t\t\t<scanner-attribute-ids>${onAttachScannerAttributes}</scanner-attribute-ids>\n` +
      `\t\t\t\t</group>\n` +
      `\t\t\t</on-attach>`;

    return getOnAttachTag;
  };

  const generateConfigXmlIotc = () => {
    const configXml =
      `<!-- Filename: IoTConnector-Config.xml  -->\n` +
      `<!-- Refer to https://techdocs.zebra.com/dcs/scanners/iot-connector/about/ for IoT Connector info -->\n` +
      `<config name="IoT Connector" version="1">\n` +
      `\t<settings>\n` +
      `\t\t<spd_log>\n` +
      `\t\t\t<!-- Sinks section - define output target(s) of IoT Connector  -->\n` +
      `\t\t\t<!-- Multiple sink types are supported. Refer to https://github.com/gabime/spdlog/wiki/4.-Sinks -->\n` +
      `\t\t\t<sinks>\n` +
      `\t\t\t\t<!-- rotating_file_sink_mt: When the max file size is reached, close the file, rename it and create a new file. Both max file size and max number of files are configurable. -->\n` +
      `${generateRotatingFileSink()}\n` +
      `\t\t\t\t<!-- Sink defined to produce screen output with -s command line switch -->\n` +
      `${generateStdOutColorFileSink()}\n` +
      `\t\t\t\t<!-- http_sink_mt: Sink will log everything to a defined HTTP/HTTPS end point -->\n` +
      `${generateHttpSink()}\n` +
      `\t\t\t\t<!-- savanna_sink_mt: Sink will log certain events to Savanna servers -->\n` +
      `${generateSavannaSink()}\n` +
      `\t\t\t\t<!-- win_eventlog_sink_mt: Sink will log everything to Windows Event Viewer -->\n` +
      `\t\t\t\t<!-- Run windows-event-log.bat file with administrator rights once before enabling this sink -->\n` +
      `${generateWinEventLogSink()}\n` +
      `\t\t\t</sinks>\n` +
      `\t\t</spd_log>\n` +
      `\t\t<!-- Log Elements section - enable/disable and configure data content to be logged -->\n` +
      `\t\t<!-- Multiple log-elements for sinks may be defined below. Eg: get-statistics, check-health, on-agent-startup, etc -->\n` +
      `\t\t<log-elements>\n` +
      `\t\t\t<!-- Configure get-statistics entries - intended for collection of scanner data -->\n` +
      `${generateGetStatistics()}\n` +
      `\t\t\t<!-- Configure check-health entries - intended to periodically confirm scanner availability -->\n` +
      `\t\t\t<!-- The schedule below checks health every 30 minutes -->\n` +
      `${generateCheckHealth()}\n` +
      `\t\t\t<!-- Configure get-battery-statistics entries - intended for collection of scanner battery data -->\n` +
      `\t\t\t<!-- The schedule below get battery statistics in every 30 minutes -->\n` +
      `\t\t\t<get-battery-statistics enabled="${enableBatteryStatistics}" schedule="${batteryStatisticsSchedule}"/>\n` +
      `\t\t\t<!-- Configure an on-agent-startup entry -->\n` +
      `${generateOnAgentStartUp()}\n` +
      `\t\t\t<!-- Enable/disable on-system-shutdown entry -->\n` +
      `\t\t\t<on-system-shutdown enabled="${enableSystemShutdown}" />\n` +
      `\t\t\t<!-- Configure entries for scanner device attach -->\n` +
      `${generateOnAttach()}\n` +
      `\t\t\t<!-- Enable/disable entry for scanner device detach -->\n` +
      `\t\t\t<on-detach enabled="${enableOnDetach}" />\n` +
      `\t\t\t<!-- Used to enable/disable log entries on barcode events -->\n` +
      `\t\t\t<!-- Non printable characters in the barcode will be replaced by "_"(ASCII 0x5F) -->\n` +
      `\t\t\t<on-barcode enabled="${enableOnBarcode}" />\n` +
      `\t\t\t<!-- Used to enable/disable log entries on firmware download events -->\n` +
      `\t\t\t<on-firmware-download-start enabled="${enableOnFirmwearDownloadStart}" />\n` +
      `\t\t\t<on-firmware-download-progress enabled="${enableOnFirmwearDownloadProgress}" />\n` +
      `\t\t\t<on-firmware-download-end enabled="${enableOnFirmwearDownloadEnd}" />\n` +
      `\t\t\t<on-firmware-download-error enabled="${enableOnFirmwearDownloadError}" />\n` +
      `\t\t\t<!-- on-non-decode-event is used to enable/disable log entries if MP7xxx is enabled for non decode events -->\n` +
      `\t\t\t<on-non-decode-event enabled="${enableOnNonDecodeEvent}"/>\n` +
      `\t\t</log-elements>\n` +
      `\t</settings>\n` +
      `</config>`;

    return configXml;
  };

  // Create config and download it.
  const getDownloadConfigFileIotc = () => {
    const textToSave = generateConfigXmlIotc();
    const data = new Blob([textToSave], { type: 'text/xml' });
    const xmlURL = window.URL.createObjectURL(data);
    const tempLink = document.createElement('a');
    tempLink.href = xmlURL;
    const fileName = `IoTConnector-Config.xml`;
    tempLink.setAttribute('download', fileName);
    tempLink.click();

    navigate('/page/configSelection');
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

  const onChangeBooleanTypesHandler = (e, option) => {
    switch (option) {
      case 'httpSinkBatchMode':
        setHttpSinkBatchMode(e.value);
        break;
      case 'httpSinkVerboseMode':
        setHttpSinkVerboseMode(e.value);
        break;
      case 'savannaSinkBatchMode':
        setSavannaSinkBatchMode(e.value);
        break;
      case 'savannaSinkVerboseMode':
        setSavannaSinkVerboseMode(e.value);
        break;
      default:
      // nothing
    }
  };

  useEffect(() => {
    // Set boolean types
    setBooleanTypeList([]);
    const booleanTypes = [
      { label: 'true', value: 'true' },
      { label: 'false', value: 'false' },
    ];
    setBooleanTypeList(booleanTypes);
  }, []);

  return (
    <MainLayout>
      <div className="mt-4">
        <h1 className="topic-iotc">IOT CONNECTOR CONFIG FILE GENERATOR</h1>
        <hr className="topHeadingLine-iotc" />
        <p className="font-bold text-lg text-center mt-4">
          You can select Config from here :
          <span className="md:ml-6 text-info underline">
            <input type="file" name="file" onChange={changeFileHandlerIotc} />
          </span>
        </p>
        <hr className="FileChooserLine-iotc" />

        <h2 className="syncsText-iotc">Sinks</h2>
        <div className="left-container-iotc mt-5">
          <input
            type="checkbox"
            checked={enableRotatingFileSink}
            onChange={(e) => enableSinkHandler(e, 'rotating_file_sink_mt')}
            className="rounded-md shadow-sm md:w-4 h-4 mr-3"
            name="rotateFIleSinkEnable"
          />
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc"
          >
            Enable Rotating File Sink
          </label>
        </div>
        <div className="left-container-iotc-rotatingSink-text">
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc-sink-note"
          >
            Note: rotating_file_sink_mt: When the max file size is reached,
            close the file, rename it and create a new file. Both max file size
            and max number of files are configurable.
          </label>
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkLogFileName"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Log file name</div>
                  </label>
                  <Tooltip text="Name of the Log file. %h - Host name , %H - Host ID (Physical address of the first MAC), %u - User name without domain (Ex. AAA), %U - User name with domain (Ex. AAA@zebra.com. Domain in @ format) and %Q-<VariableName>% - VariableName is any system/user environmental variable" />
                </div>
                <input
                  id="rotatingSinkLogFileName"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkLogFileName')
                  }
                  name="rotatingSinkLogFileName"
                  type="text"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Log File Name"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkLogFileName}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkLogFilePath"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Log file path</div>
                  </label>
                  <Tooltip
                    text="Path where the log files will be saved.
                 The path must be accessible for the Logging Agent to create the logs. log_file_path can be a network location as well. 
                 Eg for Windows systems: value='\\10.100.100.10\Temp\logging-agent-logs' . For Linux systems, first mount the shared folder to current system. Then give the path of that location on the current system"
                  />
                </div>
                <input
                  id="rotatingSinkLogFilePath"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkLogFilePath')
                  }
                  name="rotatingSinkLogFilePath"
                  type="text"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Log File Path"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkLogFilePath}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkMaxFileSize"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Max file size</div>
                  </label>
                  <Tooltip
                    text="Max file size in Kilo Bytes (considering 1KB = 1024B). 
                    Minimum size is 5KB and if any value less is defined, will be defaulted to the minimum value"
                  />
                </div>
                <input
                  id="rotatingSinkMaxFileSize"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkMaxFileSize')
                  }
                  name="rotatingSinkMaxFileSize"
                  type="number"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Max File Size"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkMaxFileSize}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkMaxFileCount"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Max file count</div>
                  </label>
                  <Tooltip text="Max file count. The minimum is 1 and anything less or invalid value will be defaulted to 1." />
                </div>
                <input
                  id="rotatingSinkMaxFileCount"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkMaxFileCount')
                  }
                  name="rotatingSinkMaxFileCount"
                  type="number"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Max File Count"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkMaxFileCount}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkLogPattern"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Log pattern</div>
                  </label>
                  <Tooltip
                    text="Pattern of a single log entry. Please refer to https://github.com/gabime/spdlog/wiki/3.-Custom-formatting for more information. 
                To add host info into a log entry. %J - Host name , %K - Host ID (Physical address of the first MAC), %U - User name without domain, %V - User name with domain. 
                 and %Q-<VariableName>% - VariableName is any system/user environmental variable"
                  />
                </div>
                <input
                  id="rotatingSinkLogPattern"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkLogPattern')
                  }
                  name="rotatingSinkLogPattern"
                  type="text"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Log Pattern"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkLogPattern}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="rotatingSinkLogLevel"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Log level</div>
                  </label>
                  <Tooltip text="Log level to be recorded.  2 = INFO, 3 = WARNING, 4 = ERROR, 5 = CRITICAL 6 = LOG_OFF, 0,1 = TRACE,DEBUG (Works only with debug build)" />
                </div>
                <input
                  id="rotatingSinkLogLevel"
                  onChange={(d) =>
                    onInputSinksChange(d, 'rotatingSinkLogLevel')
                  }
                  name="rotatingSinkLogLevel"
                  type="number"
                  disabled={!enableRotatingFileSink}
                  placeholder="Enter Rotating Sink Log Level"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={rotatingSinkLogLevel}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-container-iotc mt-10">
          <input
            type="checkbox"
            checked={enableStdoutColorSink}
            onChange={(e) => enableSinkHandler(e, 'stdout_color_sink_mt')}
            className="rounded-md shadow-sm md:w-4 h-4 mr-3"
            name="stdoutColorSinkEnable"
          />
          <label
            htmlFor="stdoutColorSinkEnable"
            className="block pb-1 sink-heading-iotc"
          >
            Enable Stdout Color Sink
          </label>
        </div>
        <div className="left-container-iotc-stdoutColor-sink-text">
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc-sink-note"
          >
            Note: Sink defined to produce screen output with -s command line
            switch.
          </label>
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="stdoutColorSinkLogPattern"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Pattern</div>
                </label>
                <input
                  id="stdoutColorSinkLogPattern"
                  onChange={(d) =>
                    onInputSinksChange(d, 'stdoutColorSinkLogPattern')
                  }
                  name="stdoutColorSinkLogPattern"
                  type="text"
                  disabled={!enableStdoutColorSink}
                  placeholder="Enter Stdout Color Sink Log Pattern"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={stdoutColorSinkLogPattern}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="stdoutColorSinkLogLevel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Level</div>
                </label>
                <input
                  id="stdoutColorSinkLogLevel"
                  onChange={(d) =>
                    onInputSinksChange(d, 'stdoutColorSinkLogLevel')
                  }
                  name="stdoutColorSinkLogLevel"
                  type="number"
                  disabled={!enableStdoutColorSink}
                  placeholder="Enter Stdout color sink Log Level"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={stdoutColorSinkLogLevel}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-container-iotc-httpSink mt-10">
          <input
            type="checkbox"
            checked={enableHttpSink}
            onChange={(e) => enableSinkHandler(e, 'http_sink_mt')}
            className="rounded-md shadow-sm md:w-4 h-4 mr-3"
            name="httpSinkEnable"
          />
          <label
            htmlFor="httpSinkEnable"
            className="block pb-1 sink-heading-iotc"
          >
            Enable Http Sink
          </label>
        </div>
        <div className="left-container-iotc-http-sink-text">
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc-sink-note"
          >
            Note: http_sink_mt: Sink will log everything to a defined HTTP/HTTPS
            end point.
          </label>
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkUrl"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Url</div>
                  </label>
                  <Tooltip text="URL of the server instance. This can be saved as a environment variale and be used in the format shown.%Q-SERVER_URL%" />
                </div>
                <input
                  id="httpSinkUrl"
                  onChange={(d) => onInputSinksChange(d, 'httpSinkUrl')}
                  name="httpSinkUrl"
                  type="text"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http Sink Url"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkUrl}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkRequestHeader"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Request Header</div>
                  </label>
                  <Tooltip
                    text="HTTP headers for the request. Use semicolon(;) to separate multiple headers. 
                  Eg : header1;header2. This can be saved as a environment variale and be used in the format shown.%Q-SERVER_REQUEST_HEADER%"
                  />
                </div>
                <input
                  id="httpSinkRequestHeader"
                  onChange={(d) =>
                    onInputSinksChange(d, 'httpSinkRequestHeader')
                  }
                  name="httpSinkRequestHeader"
                  type="text"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http sink Request Header"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkRequestHeader}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkBatchMode"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Batch Mode</div>
                  </label>
                  <Tooltip text="Set the value to 'true' to enable the batch mode. You can set the logging time interval and/or number of log entries(batch size) per batch" />
                </div>
                <Select
                  name="httpSinkBatchMode"
                  id="httpSinkBatchMode"
                  onChange={(e) => {
                    onChangeBooleanTypesHandler(e, 'httpSinkBatchMode');
                  }}
                  // eslint-disable-next-line array-callback-return, consistent-return
                  value={booleanTypeList.map((type) => {
                    if (type.value === httpSinkBatchMode) return type;
                  })}
                  styles={customStyles}
                  placeholder="Select Http Sink Batch Mode"
                  isDisabled={!enableHttpSink}
                  options={booleanTypeList}
                  className="block text-sm pb-1 font-medium text-gray-700"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkBatchSize"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Batch Size</div>
                  </label>
                  <Tooltip text="Number of logs per batch" />
                </div>
                <input
                  id="httpSinkBatchSize"
                  onChange={(d) => onInputSinksChange(d, 'httpSinkBatchSize')}
                  name="httpSinkBatchSize"
                  type="number"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http sink Batch Size"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkBatchSize}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkLoggingInterval"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Logging Interval</div>
                  </label>
                  <Tooltip text="Time interval in seconds. Eg: 20.0" />
                </div>
                <input
                  id="httpSinkLoggingInterval"
                  onChange={(d) =>
                    onInputSinksChange(d, 'httpSinkLoggingInterval')
                  }
                  name="httpSinkLoggingInterval"
                  type="number"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http Sink Logging Interval"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkLoggingInterval}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkRealTimeLogFilter"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Real Time Log Filer</div>
                  </label>
                  <Tooltip text="Add strings that contain in logs to be send as soon as they happen. Use comma(,) to separate multiple entries. Eg : 'EVENT:DEVICE ATTACHED,EVENT:DEVICE DETACHED'" />
                </div>
                <input
                  id="httpSinkRealTimeLogFilter"
                  onChange={(d) =>
                    onInputSinksChange(d, 'httpSinkRealTimeLogFilter')
                  }
                  name="httpSinkRealTimeLogFilter"
                  type="text"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http sink Real TIme Log Filter"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkRealTimeLogFilter}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="httpSinkVerboseMode"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Verbose Mode</div>
                  </label>
                  <Tooltip text="Set the value to true to get HTTP request/response information in a file named 'logs/iotConnector-verbose.log'" />
                </div>
                <Select
                  name="httpSinkVerboseMode"
                  id="httpSinkVerboseMode"
                  onChange={(e) => {
                    onChangeBooleanTypesHandler(e, 'httpSinkVerboseMode');
                  }}
                  // eslint-disable-next-line array-callback-return, consistent-return
                  value={booleanTypeList.map((type) => {
                    if (type.value === httpSinkVerboseMode) return type;
                  })}
                  styles={customStyles}
                  isDisabled={!enableHttpSink}
                  placeholder="Select Http Sink Verbose Mode"
                  options={booleanTypeList}
                  className="block text-sm pb-1 font-medium text-gray-700"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="httpSinkLogPattern"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Pattern</div>
                </label>
                <input
                  id="httpSinkLogPattern"
                  onChange={(d) => onInputSinksChange(d, 'httpSinkLogPattern')}
                  name="httpSinkLogPattern"
                  type="text"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http sink Log Pattern"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkLogPattern}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="httpSinkLogLevel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Level</div>
                </label>
                <input
                  id="httpSinkLogLevel"
                  onChange={(d) => onInputSinksChange(d, 'httpSinkLogLevel')}
                  name="httpSinkLogLevel"
                  type="number"
                  disabled={!enableHttpSink}
                  placeholder="Enter Http Sink Log Level"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={httpSinkLogLevel}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-container-iotc-savannaSink mt-10">
          <input
            type="checkbox"
            checked={enableSavannaSink}
            onChange={(e) => enableSinkHandler(e, 'savanna_sink_mt')}
            className="rounded-md shadow-sm md:w-4 h-4 mr-3"
            name="savannaSinkEnable"
          />
          <label
            htmlFor="savannaSinkEnable"
            className="block pb-1 sink-heading-iotc"
          >
            Enable Savanna Sink
          </label>
        </div>
        <div className="left-container-iotc-savanna-sink-text">
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc-sink-note"
          >
            Note: savanna_sink_mt: Sink will log certain events to Savanna
            servers.
          </label>
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkUrl"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Url</div>
                  </label>
                  <Tooltip text="URL of the server instance" />
                </div>
                <input
                  id="savannaSinkUrl"
                  onChange={(d) => onInputSinksChange(d, 'savannaSinkUrl')}
                  name="savannaSinkUrl"
                  type="text"
                  disabled={!enableSavannaSink}
                  placeholder="Enter Savanna Sink Url"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={savannaSinkUrl}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkRequestHeader"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Request Header</div>
                  </label>
                  <Tooltip text="HTTP headers for the request. Use semicolon(;) to separate multiple headers. Eg : header1;header2" />
                </div>
                <input
                  id="savannaSinkRequestHeader"
                  onChange={(d) =>
                    onInputSinksChange(d, 'savannaSinkRequestHeader')
                  }
                  name="savannaSinkRequestHeader"
                  type="text"
                  disabled={!enableSavannaSink}
                  placeholder="Enter Savanna sink Request Header"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={savannaSinkRequestHeader}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkBatchMode"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Batch Mode</div>
                  </label>
                  <Tooltip text="Set the value to 'true' to enable the batch mode. You can set the logging time interval and/or number of log entries(batch size) per batch" />
                </div>
                <Select
                  name="savannaSinkBatchMode"
                  id="savannaSinkBatchMode"
                  onChange={(e) => {
                    onChangeBooleanTypesHandler(e, 'savannaSinkBatchMode');
                  }}
                  // eslint-disable-next-line array-callback-return, consistent-return
                  value={booleanTypeList.map((type) => {
                    if (type.value === savannaSinkBatchMode) return type;
                  })}
                  styles={customStyles}
                  isDisabled={!enableSavannaSink}
                  placeholder="Select savanna Sink Batch Mode"
                  options={booleanTypeList}
                  className="block text-sm pb-1 font-medium text-gray-700"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkBatchSize"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Batch Size</div>
                  </label>
                  <Tooltip text="Number of logs per batch" />
                </div>
                <input
                  id="savannaSinkBatchSize"
                  onChange={(d) =>
                    onInputSinksChange(d, 'savannaSinkBatchSize')
                  }
                  name="savannaSinkBatchSize"
                  type="number"
                  disabled={!enableSavannaSink}
                  placeholder="Enter Savanna sink Batch Size"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={savannaSinkBatchSize}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkLoggingInterval"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Logging Interval</div>
                  </label>
                  <Tooltip text="Time interval in seconds. Eg: 20.0" />
                </div>
                <input
                  id="savannaSinkLoggingInterval"
                  onChange={(d) =>
                    onInputSinksChange(d, 'savannaSinkLoggingInterval')
                  }
                  name="savannaSinkLoggingInterval"
                  type="number"
                  disabled={!enableSavannaSink}
                  placeholder="Enter Savanna Sink Logging Interval"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={savannaSinkLoggingInterval}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkRealTimeLogFilter"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Real Time Log Filer</div>
                  </label>
                  <Tooltip text="Add strings that contain in logs to be send as soon as they happen. Use comma(,) to separate multiple entries. Eg : 'EVENT:DEVICE ATTACHED,EVENT:DEVICE DETACHED'" />
                </div>
                <input
                  id="savannaSinkRealTimeLogFilter"
                  onChange={(d) =>
                    onInputSinksChange(d, 'savannaSinkRealTimeLogFilter')
                  }
                  name="savannaSinkRealTimeLogFilter"
                  type="text"
                  disabled={!enableSavannaSink}
                  placeholder="Enter Savanna sink Real TIme Log Filter"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={savannaSinkRealTimeLogFilter}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="savannaSinkVerboseMode"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Verbose Mode</div>
                  </label>
                  <Tooltip text="Set the value to true to get HTTP request/response information in a file named 'logs/iotConnector-verbose.log'" />
                </div>
                <Select
                  name="savannaSinkVerboseMode"
                  id="savannaSinkVerboseMode"
                  onChange={(e) => {
                    onChangeBooleanTypesHandler(e, 'savannaSinkVerboseMode');
                  }}
                  // eslint-disable-next-line array-callback-return, consistent-return
                  value={booleanTypeList.map((type) => {
                    if (type.value === savannaSinkVerboseMode) return type;
                  })}
                  styles={customStyles}
                  isDisabled={!enableSavannaSink}
                  placeholder="Select savanna Sink Verbose Mode"
                  options={booleanTypeList}
                  className="block text-sm pb-1 font-medium text-gray-700 md:w-80"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="left-container-iotc mt-10">
          <input
            type="checkbox"
            checked={enableWinEventSink}
            onChange={(e) => enableSinkHandler(e, 'win_eventlog_sink_mt')}
            className="rounded-md shadow-sm md:w-4 h-4 mr-3"
            name="winEventLogSinkEnable"
          />
          <label
            htmlFor="winEventLogSinkEnable"
            className="block pb-1 sink-heading-iotc"
          >
            Enable Win Event Log Sink
          </label>
        </div>
        <div className="left-container-iotc-win-sink-text">
          <label
            htmlFor="rotateFIleSinkEnable"
            className="block pb-1 sink-heading-iotc-sink-note"
          >
            Note: win_eventlog_sink_mt: Sink will log everything to Windows
            Event Viewer. Run windows-event-log.bat file with administrator
            rights once before enabling this sink
          </label>
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="winEventSinkLogPattern"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Pattern</div>
                </label>
                <input
                  id="winEventSinkLogPattern"
                  onChange={(d) =>
                    onInputSinksChange(d, 'winEventSinkLogPattern')
                  }
                  name="winEventSinkLogPattern"
                  type="text"
                  disabled={!enableWinEventSink}
                  placeholder="Enter Win Event Log Sink Log Pattern"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={winEventSinkLogPattern}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="winEventSinkLogLevel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Log Level</div>
                </label>
                <input
                  id="winEventSinkLogLevel"
                  onChange={(d) =>
                    onInputSinksChange(d, 'winEventSinkLogLevel')
                  }
                  name="winEventSinkLogLevel"
                  type="number"
                  disabled={!enableWinEventSink}
                  placeholder="Enter Win Event Log sink Log Level"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={winEventSinkLogLevel}
                />
              </div>
            </div>
          </div>
        </div>

        <h2 className="LogElementText-iotc">Log Elements</h2>
        <div className="center-container-iotc mt-5">
          <label
            htmlFor="statisticsEnable"
            className="block text-sm pb-1 font-medium"
          >
            Enable Statistics
          </label>
          <input
            type="checkbox"
            checked={enableStatistics}
            onChange={(e) => enableLogElementsHandler(e, 'get-statistics')}
            className="rounded-md shadow-sm md:w-4 h-4 ml-3"
            name="statisticsEnable"
          />
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="statisticsModel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Model</div>
                </label>
                <input
                  id="statisticsModel"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'statisticsModel')
                  }
                  name="statisticsModel"
                  type="text"
                  disabled={!enableStatistics}
                  placeholder="Enter Model"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={statisticsModel}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="statisticsSerial"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Serial</div>
                </label>
                <input
                  id="statisticsSerial"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'statisticsSerial')
                  }
                  name="statisticsSerial"
                  type="text"
                  disabled={!enableStatistics}
                  placeholder="Enter Serial"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={statisticsSerial}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="statisticsSchedule"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Schedule</div>
                  </label>
                  <Tooltip text="The schedule on the following line gets statistics daily at 2am" />
                </div>
                <input
                  id="statisticsSchedule"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'statisticsSchedule')
                  }
                  name="statisticsSchedule"
                  type="text"
                  disabled={!enableStatistics}
                  placeholder="Enter Schedule"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={statisticsSchedule}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="statisticsScannerAttributes"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Scanner Attributes</div>
                  </label>
                  <Tooltip text="Scanner-attribute-ids will be queried from the scanner and their values will be logged. Multiple attributes separated by commas may be listed" />
                </div>
                <input
                  id="statisticsScannerAttributes"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'statisticsScannerAttributes')
                  }
                  name="statisticsScannerAttributes"
                  type="text"
                  disabled={!enableStatistics}
                  placeholder="Enter Scanner Attributes"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={statisticsScannerAttributes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center-container-iotc mt-10">
          <label
            htmlFor="checkHealthEnable"
            className="block text-sm pb-1 font-medium"
          >
            Enable Check Health
          </label>
          <input
            type="checkbox"
            checked={enableCheckHealth}
            onChange={(e) => enableLogElementsHandler(e, 'check-health')}
            className="rounded-md shadow-sm md:w-4 h-4 ml-3"
            name="checkHealthEnable"
          />
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="checkHealthModel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Model</div>
                </label>
                <input
                  id="checkHealthModel"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'checkHealthModel')
                  }
                  name="checkHealthModel"
                  type="text"
                  disabled={!enableCheckHealth}
                  placeholder="Enter Model"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={checkHealthModel}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="checkHealthSerial"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Serial</div>
                </label>
                <input
                  id="checkHealthSerial"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'checkHealthSerial')
                  }
                  name="checkHealthSerial"
                  type="text"
                  disabled={!enableCheckHealth}
                  placeholder="Enter Serial"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={checkHealthSerial}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="checkHealthSchedule"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Schedule</div>
                  </label>
                  <Tooltip text="The schedule below checks health every 30 minutes" />
                </div>
                <input
                  id="checkHealthSchedule"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'checkHealthSchedule')
                  }
                  name="checkHealthSchedule"
                  type="text"
                  disabled={!enableCheckHealth}
                  placeholder="Enter Schedule"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={checkHealthSchedule}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="checkHealthScannerAttributes"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Scanner Attributes</div>
                  </label>
                  <Tooltip text="Scanner-attribute-ids will be queried from the scanner and their values will be logged. Multiple attributes separated by commas may be listed" />
                </div>
                <input
                  id="checkHealthScannerAttributes"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'checkHealthScannerAttributes')
                  }
                  name="checkHealthScannerAttributes"
                  type="text"
                  disabled={!enableCheckHealth}
                  placeholder="Enter Scanner Attributes"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={checkHealthScannerAttributes}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="configChangeEnable"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Config Name Change</div>
                  </label>
                  <Tooltip text="Use to enable/disable log entries when a config name change occurs. This will be logged using the same schedule as check-health" />
                </div>
                <input
                  id="configChangeEnable"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'configChangeEnable')
                  }
                  name="configChangeEnable"
                  type="text"
                  placeholder="Enter Check Health Enable Mode"
                  disabled={!enableCheckHealth}
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={configChangeEnable}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="configChangeTimeout"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Config Name Change Timeout</div>
                  </label>
                  <Tooltip text="The timeout value specifies the time to wait before logging a config change. The max timeout value is 60000 milliseconds (60 seconds)." />
                </div>
                <input
                  id="configChangeTimeout"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'configChangeTimeout')
                  }
                  name="configChangeTimeout"
                  type="number"
                  disabled={!enableCheckHealth}
                  placeholder="Enter Timeout"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={configChangeTimeout}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center-container-iotc mt-10">
          <label
            htmlFor="batteryStatisticsEnable"
            className="block text-sm pb-1 font-medium"
          >
            Enable Battery Statistics
          </label>
          <input
            type="checkbox"
            checked={enableBatteryStatistics}
            onChange={(e) =>
              enableLogElementsHandler(e, 'get-battery-statistics')
            }
            className="rounded-md shadow-sm md:w-4 h-4 ml-3"
            name="batteryStatisticsEnable"
          />
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <div className="flex">
                  <label
                    htmlFor="batteryStatisticsSchedule"
                    className=" block text-sm pb-1 font-medium text-gray-700"
                  >
                    <div>Schedule</div>
                  </label>
                  <Tooltip text="The schedule below get battery statistics in every 30 minutes" />
                </div>
                <input
                  id="batteryStatisticsSchedule"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'batteryStatisticsSchedule')
                  }
                  name="batteryStatisticsSchedule"
                  type="text"
                  placeholder="Enter Schedule battery statistics"
                  disabled={!enableBatteryStatistics}
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={batteryStatisticsSchedule}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center-container-iotc mt-10">
          <label
            htmlFor="onAgentStartUpEnable"
            className="block text-sm pb-1 font-medium"
          >
            Enable On Agent StartUp
          </label>
          <input
            type="checkbox"
            checked={enableAgentStartUp}
            onChange={(e) => enableLogElementsHandler(e, 'on-agent-start-up')}
            className="rounded-md shadow-sm md:w-4 h-4 ml-3"
            name="onAgentStartUpEnable"
          />
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="agentStartUpModel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Model</div>
                </label>
                <input
                  id="agentStartUpModel"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'agentStartUpModel')
                  }
                  name="agentStartUpModel"
                  type="text"
                  disabled={!enableAgentStartUp}
                  placeholder="Enter Model"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={agentStartUpModel}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="agentStartUpSerial"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Serial</div>
                </label>
                <input
                  id="agentStartUpSerial"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'agentStartUpSerial')
                  }
                  name="agentStartUpSerial"
                  type="text"
                  disabled={!enableAgentStartUp}
                  placeholder="Enter Serial"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={agentStartUpSerial}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="agentStartUpScannerAttributes"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Scanner Attributes</div>
                </label>
                <input
                  id="agentStartUpScannerAttributes"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'agentStartUpScannerAttributes')
                  }
                  name="agentStartUpScannerAttributes"
                  type="text"
                  disabled={!enableAgentStartUp}
                  placeholder="Enter Scanner Attributes"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={agentStartUpScannerAttributes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center-container-iotc mt-10">
          <label
            htmlFor="onAttachEnable"
            className="block text-sm pb-1 font-medium"
          >
            Enable On Attach
          </label>
          <input
            type="checkbox"
            checked={enableOnAttach}
            onChange={(e) => enableLogElementsHandler(e, 'on-attach')}
            className="rounded-md shadow-sm md:w-4 h-4 ml-3"
            name="onAttachEnable"
          />
        </div>
        <div className="center-container-iotc">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="onAttachModel"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Model</div>
                </label>
                <input
                  id="onAttachModel"
                  onChange={(d) => onInputLogElementChange(d, 'onAttachModel')}
                  name="onAttachModel"
                  type="text"
                  disabled={!enableOnAttach}
                  placeholder="Enter Model"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={onAttachModel}
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor="onAttachSerial"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Serial</div>
                </label>
                <input
                  id="onAttachSerial"
                  onChange={(d) => onInputLogElementChange(d, 'onAttachSerial')}
                  name="onAttachSerial"
                  type="text"
                  disabled={!enableOnAttach}
                  placeholder="Enter Serial"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={onAttachSerial}
                />
              </div>
            </div>
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex flex-col w-full">
                <label
                  htmlFor="onAttachScannerAttributes"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  <div>Scanner Attributes</div>
                </label>
                <input
                  id="onAttachScannerAttributes"
                  onChange={(d) =>
                    onInputLogElementChange(d, 'onAttachScannerAttributes')
                  }
                  name="onAttachScannerAttributes"
                  type="text"
                  disabled={!enableOnAttach}
                  placeholder="Enter Scanner Attributes"
                  className="border-2 p-2 pt-3 bg-[#E5E7EB] rounded-md shadow-sm md:w-80"
                  value={onAttachScannerAttributes}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="center-container-iotc mt-10">
          <div className="text-xs">
            <div className="mt-4 flex space-x-4 w-full">
              <div className="flex w-56 pl-2">
                <label
                  htmlFor="onSystemShutDownEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable System ShutDown
                </label>
                <input
                  type="checkbox"
                  checked={enableSystemShutdown}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-system-shutdown')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onSystemShutDownEnable"
                />
              </div>
              <div className="flex w-60">
                <label
                  htmlFor="onDetachEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable OnDetach
                </label>
                <input
                  type="checkbox"
                  checked={enableOnDetach}
                  onChange={(e) => enableLogElementsHandler(e, 'on-detach')}
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onDetachEnable"
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="onBarcodeEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable Barcode
                </label>
                <input
                  type="checkbox"
                  checked={enableOnBarcode}
                  onChange={(e) => enableLogElementsHandler(e, 'on-barcode')}
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onBarcodeEnable"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-4 w-full">
              <div className="flex w-56 pl-2">
                <label
                  htmlFor="onFirmwearDownloadStartEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable FW Download Start
                </label>
                <input
                  type="checkbox"
                  checked={enableOnFirmwearDownloadStart}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-firmware-download-start')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onFirmwearDownloadStartEnable"
                />
              </div>
              <div className="flex w-60">
                <label
                  htmlFor="onFirmwearDownloadProgressEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable FW Download Progress
                </label>
                <input
                  type="checkbox"
                  checked={enableOnFirmwearDownloadProgress}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-firmware-download-progress')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onFirmwearDownloadProgressEnable"
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="onFirmwearDownloadEndEnable"
                  className=" block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable FW Download End
                </label>
                <input
                  type="checkbox"
                  checked={enableOnFirmwearDownloadEnd}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-firmware-download-end')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onFirmwearDownloadEndEnable"
                />
              </div>
            </div>
            <div className="mt-6 flex space-x-4 w-full mb-16">
              <div className="flex w-56 pl-2">
                <label
                  htmlFor="onFirmwearDownloadErrorEnable"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable FW Download Error
                </label>
                <input
                  type="checkbox"
                  checked={enableOnFirmwearDownloadError}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-firmware-download-error')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onFirmwearDownloadErrorEnable"
                />
              </div>
              <div className="flex w-60">
                <label
                  htmlFor="onNonDecodeEventEnable"
                  className="block text-sm pb-1 font-medium text-gray-700"
                >
                  Enable Non Decode Event
                </label>
                <input
                  type="checkbox"
                  checked={enableOnNonDecodeEvent}
                  onChange={(e) =>
                    enableLogElementsHandler(e, 'on-non-decode-event')
                  }
                  className="rounded-md shadow-sm md:w-4 h-4 ml-3"
                  name="onNonDecodeEventEnable"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="fixed right-56 bottom-8 md:items-center justify-center w-40"
          style={{ background: '#ADD8E6' }}
        >
          <div className="border-2">
            <Button
              onClick={getDownloadConfigFileIotc}
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

export default IOTCConfig;
