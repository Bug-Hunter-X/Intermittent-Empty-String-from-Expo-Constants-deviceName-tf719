// bug.js
import * as Constants from 'expo-constants';

const getDeviceName = async () => {
  const deviceName = Constants.deviceName;
  console.log('Device Name:', deviceName); // Might be empty string
  return deviceName;
};
getDeviceName();

// bugSolution.js
import * as Constants from 'expo-constants';
import { UniqueID } from 'expo-unique-id'; // Or a similar library for a unique device identifier

const getDeviceName = async () => {
  const deviceName = Constants.deviceName || await UniqueID.generate();
  console.log('Device Name (with fallback):', deviceName);
  return deviceName;
};
getDeviceName();