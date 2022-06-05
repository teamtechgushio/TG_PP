## Installation

#### Install dependencies / packages required

```
$ yarn install
```

#### Run IOS

```
$ yarn run ios
```

#### Run Android

```
$ yarn run android
```

### Generating APK Installation

##### Using fastlane

```
$ cd android
$ fastlane distribute_to_firebase
```

#### Using gradlew only

```
$ cd android
$ ./gradlew assembleRelease
```
