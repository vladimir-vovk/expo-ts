<p align="center">
  An opinionated template that will allow you to start a new React Native project quickly with Expo, TypeScript, Prettier, ESLint, and some custom configurations that will make development process better. 💖
</p>

<h1 align="center">Expo TypeScript</h1>
<br>

<img src="./screen.jpg" width="200"></img>

Using [Expo 52](https://expo.dev/changelog/2024/11-12-sdk-52).

Please read [Starting React Native Project in 2025](https://dev.to/vladimirvovk/starting-react-native-project-in-2025-4n25) article for details.

## Quick start

1. Run `npx create-expo-app -t expo-ts` command.
2. Type your project name.
3. Change directory to your project with `cd <your-project-name>` command.
4. Run `npm run start` to start the Metro Bundler.
5. Press `i` to start the iOS simulator or `a` to run the Android emulator.📱

Happy hacking! 🤓

## Features

- [TypeScript](https://www.typescriptlang.org/).
- Absolute path imports (e.g. `import { ComponentA } from 'src/components/A'`).
- [Prettier](https://prettier.io/).
- Automaticaly sort imports on save.
- Check code for errors with [TypeScript compiler](https://www.typescriptlang.org/tsconfig#noEmit) and [ESLint](https://eslint.org/).
- Generate changelog with [standard-version](https://github.com/conventional-changelog/standard-version).
- Lint commits with [Husky](https://github.com/typicode/husky).
- [react-native-safe-area-context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/).
- Write tests with [Jest](https://jestjs.io/) and [React Native Testing Library](https://testing-library.com/).

## Available commands

- `npm run start` - start Metro Bundler.
- `npm run ios` - run on iOS.
- `npm run android` - run on Android.
- `npm run web` - run on web.
- `npm run lint` - check code for errors.
- `npm run prettier` - run Prettier formatter.
- `npm run release` - generate a changelog, bump the version of app and create a new tag.
- `npm run test` - run tests.
