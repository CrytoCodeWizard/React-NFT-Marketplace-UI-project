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

<p align="center">
  <a href="#introduction">Introduction</a> ◈
  <a href="#warning">Warning</a> ◈
  <a href="#usage">Usage</a> ◈
  <a href="#planned-milestones">Planned Milestones</a> ◈  
  <a href="#joining-the-discussion">Components</a>
</p>

---

# React Component Library
Library with all shared IOTABOTS components - published on npmjs.com: [@iotabots/components](https://www.npmjs.com/package/@iotabots/components). All components can be discovered online here: 
> [Live Preview Page](https://iotabots.github.io/nft-ui-components/?path=/story/example-backgroundvideo--default)

## 🎯 Introduction
This library contains several components to quickly and efficiently build new applications within the IOTABOTS design. It uses the React UI library [MUI](https://mui.com/).

> **_Warning:_**
This library is under active development - please do not use it in production.


## 👆 Usage

### 💫 Install it in your React app

```
yarn add @iotabots/components
```

### 🎨 Add the IOTABOTS Theme

Add this to your root app file:
```
import { ThemeProvider } from '@iotabots/components';

...
<ThemeProvider theme={theme}>
...
</ThemeProvider>
...
```

### 🤖 use it in your IOTABOTS application

```
import { Button } from '@iotabots/components';

...
<Button onClick={console.log("Hello 🤖")}>
Say Hello!
</Button>
...
```

## Planned Milestones
- [x] Include [MUI](https://mui.com/)
- [x] Publish on npmjs.com: [@iotabots/components](https://www.npmjs.com/package/@iotabots/components)
- [ ] Website Components
- [ ] [web3](https://www.npmjs.com/package/web3) integration
- [ ] Marketplace Components
- [ ] Game Center Components

## Components
All components can be discovered on the [Live Preview Page](https://iotabots.github.io/nft-ui-components/?path=/story/example-backgroundvideo--default).

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
