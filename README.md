# L' ConquistApp

- [L' ConquistApp](#l-conquistapp)
  - [Setup](#setup)
  - [Development](#development)
    - [Running the app on your device](#running-the-app-on-your-device)
    - [Running the app in an iOS simulator (Mac users only):](#running-the-app-in-an-ios-simulator-mac-users-only)
    - [Running the app in an Android emulator:](#running-the-app-in-an-android-emulator)
  - [Debugging](#debugging)
  - [TailwindCSS](#tailwindcss)
    - [To add or modify new styles](#to-add-or-modify-new-styles)

## Setup

1. Install Node.js and Yarn

2. Install Expo CLI:

    ```bash
    yarn global add expo-cli
    ```

3. Install dependencies:

    ```bash
    yarn install
    ```

## Development

### Running the app on your device

First, install the Expo Go app on your device. Then use the following command and scan the QR code.

```bash
yarn start
```

### Running the app in an iOS simulator (Mac users only):

First, install XCode and XCode Command Line Tools by following the instructions in [the docs](https://docs.expo.io/workflow/ios-simulator/). Then use the following command:
```bash
yarn ios
```

### Running the app in an Android emulator:

First, install and set up Android Studio by following the instructions in [the docs](https://docs.expo.io/workflow/android-studio-emulator/). Then use the following command:
```bash
yarn android
```

## Debugging

You can debug the app with [React Native Debugger](https://github.com/jhen0409/react-native-debugger). On MacOS, you can install it with:

```sh
brew install --cask react-native-debugger
```

You can then follow the instructions in [the expo docs](https://docs.expo.io/workflow/debugging/#react-native-debugger).

## TailwindCSS

This project uses [`tailwind-rn`](https://github.com/vadimdemedes/tailwind-rn). You should always import `tailwind` or `getColor` from `./src/utils/tailwind.js` due to the customization mode shown in the [documentation](https://github.com/vadimdemedes/tailwind-rn#customization)

### To add or modify new styles

1. Add or modify the desired styles as you would normally in the `tailwind.config.js` file.

2. Run the following command:
   ```bash
   yarn update-styles # or yarn run create-tailwind-rn
   ```
   This will recreate the `styles.json` file, which is the base for the custom Tailwind instance.
