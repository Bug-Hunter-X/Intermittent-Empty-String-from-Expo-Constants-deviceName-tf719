# Expo Constants.deviceName Intermittent Empty String Bug

This repository demonstrates a bug where `Constants.deviceName` in Expo sometimes returns an empty string instead of the device's name. This leads to unreliable device identification in React Native applications.

## Bug Description

The `Constants.deviceName` API, intended to provide the device's name, sporadically returns an empty string. This inconsistency makes it difficult to build features relying on unique device identification.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go or a similar method.
4. Observe that `Constants.deviceName` sometimes returns an empty string, even after restarting the app and device.

## Solution

While a perfect fix isn't available within Expo itself (it's likely a native module inconsistency), a workaround can mitigate the issue: use a fallback mechanism to supply a unique identifier.

