<p align="center">
  An opinionated template that will allow you to start a new React Native project quickly with Expo, TypeScript, Prettier, ESLint, and some custom configurations that will make development process better. 💖
</p>

<h1 align="center">Expo TypeScript</h1>
<br>

Using [Expo 47](https://blog.expo.dev/expo-sdk-47-a0f6f5c038af). 

Please read [Starting React Native Project in 2023](https://dev.to/vladimirvovk/starting-react-native-project-in-2023-2le) article for details. 

## Quick start

1. Run `npx create-expo-app -t expo-ts` command.
2. Type your project name.
3. Change directory to your project with `cd <your-project-name>` command.
4. Run `yarn start` to start the Metro Bundler.
5. Press `i` to start the iOS simulator or `a` to run the Android emulator.📱

Please use the `npx expo eject` command to switch to the "bare" react-native app. See the [docs](https://docs.expo.dev/introduction/managed-vs-bare/) to learn about the difference between managed and bare workflows.

Happy hacking! 🤓

## Features

- [TypeScript](https://www.typescriptlang.org/).
- Absolute path imports (e.g. `import { ComponentA } from 'src/components/A'`).
- [Prettier](https://prettier.io/).
- Automaticaly sort imports on save.
- [Remove React imports](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).
- Check code for errors with [TypeScript compiler](https://www.typescriptlang.org/tsconfig#noEmit) and [ESLint](https://eslint.org/).
- Generate changelog with [standard-version](https://github.com/conventional-changelog/standard-version).
- Lint commits with [Husky](https://github.com/typicode/husky).
- [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/).

## Available commands

- `yarn start` - start Metro Bundler.
- `yarn ios` - run on iOS.
- `yarn android` - run on Android.
- `yarn web` - run on web.
- `yarn lint` - check code for errors.
- `yarn release` - generate a changelog, bump the version of app and create a new tag.
