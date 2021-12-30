<p align="center">
  <br>
  <a href="https://iotabots.io">
     <img
      alt="iotabots logo"
      src="https://pbs.twimg.com/profile_banners/1453664485063933965/1635716136/1500x500"
    />
  </a>
</p>

<h1 align="center"><a href="https://iotabots.io">IOTABOTS.io</a></h1>

<p align="center">#NFT project #DeFi #NFT #GameFi #play2earn #IOTABOTS 🤖</p>

<p align="center">
  <a href="https://twitter.com/iotabots" style="text-decoration:none;"><img src="https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fiotabots" alt="Twitter"></a>
</p>

---

# React Component Library
Library with all shared IOTABOTS components - published on npmjs.com: [@iotabots/components](https://www.npmjs.com/package/@iotabots/components). This library contains several components to quickly and efficiently build new applications within the IOTABOTS design. 

> **_Warning:_**
This library is under active development - please do not use it in production.

## 👆 Usage
To use the `@iotabots/components` UI library in your React App, follow these steps:

### 📦 Install

```bash
# Yarn
yarn add @iotabots/components

# Npm
npm i @iotabots/components
```

### 🎨 Theme Provider
Add this to your root app file. The theme will default to dark mode. You can select `light` and `dark` theme via the `theme` property.

```tsx
// src/App.tsx
import { ThemeProvider } from '@iotabots/components';

...
<ThemeProvider theme='dark'>
  ...
</ThemeProvider>
...
```

### 📚 Use components
You can use any component from official **[MUI Docs](https://mui.com/)** or **[Storybook Live Preview](https://iotabots.github.io/nft-ui-components/?path=/story/example-introduction--page)**

```tsx
// src/pages/Home.tsx
import { Button } from '@iotabots/components';

...
<Button onClick={console.log("Hello 🤖")}>
  Say Hello!
</Button>
...
```

### 🌗 Light and Darkmode
In case you want your users to toggle between light and dark, create a new file called `Theme.tsx` like we do here https://github.com/iotabots/iotabots.io/blob/main/contexts/Theme.tsx. If you want the user's mode to be stored in local storage, also see these imports in the Theme https://github.com/iotabots/iotabots.io/blob/main/utils/localStorage.ts. Otherwise just remove the utils `getItem` and `setItem`.

## ℹ️ Info

### Material UI
We extend the React UI library **[MUI](https://mui.com/)** for theming and base UI components. You can import almost all components from the MUI official docs just from `iotabots/components`, see before-after-example here

```tsx
// Don't
import { Button } from '@mui/material'

// Do
import { Button } from '@iotabots/components'
```

> **_Note_**
If a component from official MUI docs is not included in `@iotabots/components`, you can also use the one from `@mui/material`.

### Storybook
On top of Material UI's base ui components we have custom shared UI components for the iotabots team and community. These can be found in Storybook [Live Preview Page](https://iotabots.github.io/nft-ui-components/?path=/story/example-introduction--page)

## 🎯 Planned Milestones
- [x] Include [MUI](https://mui.com/)
- [x] Publish on npmjs.com: [@iotabots/components](https://www.npmjs.com/package/@iotabots/components)
- [ ] Website Components
- [x] [web3-react](https://github.com/NoahZinsmeister/web3-react) integration
- [ ] Marketplace Components
- [ ] Game Center Components

## ✅ Missing Components
All components can be discovered on the [Live Preview Page](https://iotabots.github.io/nft-ui-components/?path=/story/example-backgroundvideo--default). The ones below will be added and documented in storybook.

### Website Components
- [ ] Content Box
- [ ] Roadmap Section
- [ ] Footer
- [ ] Navigation
- [ ] Profile
- [ ] Bot Card
- [ ] Bot Gallery
- [ ] Infinit Bot List 

### Marketplace Components
- [ ] NFT Gallery
- [ ] Detail Gallery
- [ ] Buy Button
- [ ] Filter
- [ ] Search

### Game Center Components
- [ ] Bot Play Page
- [ ] Game Preview
- [ ] Leaderboard 
