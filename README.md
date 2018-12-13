# sheen-project
Project for examples react-native, separated by braches.

## Run on Android (Physic device)
1. Check devices: `adb devices`
2. Run app: `react-native run-android`
3. For reload the App: `adb shell input keyevent 82`

### Handle errors when run `react-native run-android`
1. `Could not install the app on the device, read the error above for details`\
You might check the permissions on `android/gradlew` [See this answer](https://github.com/facebook/react-native/issues/8868#issuecomment-233458065)

2. `INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.sheenproject signatures do not match the previously installed version; ignoring!`\
You may uninstall the app on your phone and run `react-native run-android` again.
