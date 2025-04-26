# WaterTracker

WaterTracker is a React Native application designed to help users track their daily water intake. This project is built using Expo and supports both Android and iOS platforms.

## Features

- Track daily water intake
- Set personalized hydration goals
- Notifications to remind users to drink water
- Cross-platform support (Android and iOS)

## Project Structure
├── App.jsx # Main application entry point ├── index.js # Entry point for React Native ├── android/ # Android-specific files ├── ios/ # iOS-specific files ├── assets/ # Static assets (images, fonts, etc.) ├── .expo/ # Expo configuration files ├── package.json # Project dependencies and scripts └── README.md # Project documentation


## Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development)

## Getting Started

1. Clone the repository:

  ```bash
  git clone https://github.com/your-username/watertracker.git
  cd watertracker

2. Install dependencies:

  ```bash
  yarn install

3. Install dependencies:

  ```bash
  npx expo start

4. Run the app on your device or emulator:

For Android: Press a in the terminal.
For iOS: Press i in the terminal.

## Building the App

# Android
1. Navigate to the android directory:
  ```bash
  cd android

2. Build the APK:
  ```bash
  ./gradlew assembleRelease

3. The APK will be located in android/app/build/outputs/apk/release/.

# iOS
1. Navigate to the ios directory:
  ```bash
  cd ios

2. Open the project in Xcode:
  ```bash
  open waterTracker.xcodeproj

3. Build and run the app using Xcode.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
1. Built with React Native
2. Powered by Expo



