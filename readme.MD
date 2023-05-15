# 💬 BetterTTV API

Unofficial BetterTTV API Wrapper for Node.js

## ⚙️ Installation

```bash
# With YARN:
yarn add betterttv

# With NPM:
npm install betterttv
```

## 📚 Usage

### Get user data and emotes

```typescript
import BetterTTV from "betterttv";

BetterTTV.getGlobalEmotes()
    .then(console.log);
// Returns Emote[],
```

## 📦 Interfaces

### Emote

```json
{
  "id": string,
  "code": string,
  "imageType": "png" | "gif",
  "animated": boolean,
  "src": {
    "low": string,
    "mid": string,
    "high": string,
  },
  "userId?": string,
  "user?": {
    "id": string,
    "name": string,
    "displayName": string,
    "providerId": string
  }
}
```

## ❤️

Made with Love by Sammwy, Donate at [PayPal](https://paypal.me/sammwy)
