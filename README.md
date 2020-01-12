- Ionic 4 common commands

* Install Capacitor Dependencies:
  ```
  $ npm install --save @capacitor/core @capacitor/cli --save-exact
  ```
* Capacitor Version
  ```
  $ npx cap --version
  ```
* Install Capacitor in the Project
  ```
  $ npx cap init
  ```
* Build project and generate www directory for Capacitor
  ```
  $ ionic build
  ```
* Add Android Capacitor Build
  ```
  $ npx cap add android
  ```
* Open Android Studio with Capacitor
  ```
  $ npx cap open android
  ```
* Add iOS Capacitor Build
  ```
  $ npx cap add iOS
  ```
* Open iOS emulator with Capacitor

```
  $ npx cap open ios
```

- Always after a new Change you must run the ionic build command

```
  $ ionic build
```

- After the build now you will synchronize the app with Capacitor (Tip: You have to re tun in Xcode and android studio the project)

```
  $ ionic build &&  npx cap sync
```

- Hint If you only change HTML or CSS for fastest synchronization use

```
  $ ionic build && npx cap copy
```
