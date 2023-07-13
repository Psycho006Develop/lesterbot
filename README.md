
**<p align="center"> <img src="https://i.imgur.com/dxS1u0b.jpg" /> </p>**


<h1 align="center"> Supra Bot 1.0.1  </h1>
<p align="center">
<a href="https://github.com/PixelJuggernaut/suprabot/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/PixelJuggernaut/suprabot?style=for-the-badge"></a>
<a href="https://github.com/PixelJuggernaut/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/PixelJuggernaut/suprabot?style=for-the-badge"></a> 
<a href="PixelJuggernaut/suprabot/network"><img alt="GitHub Forks" src="https://img.shields.io/github/forks/PixelJuggernaut/suprabot?style=for-the-badge"></a>
<a href="https://discord.gg/pk8Ve68UEH"><img alt="Support Server" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>
<h3 align="center">OpenSource Multi-purpose Discord bot with many features!</h3>
<h3 align="center">If you don't want to host bot by yourself, use our online version!

[Add bot to your server](https://discord.com/api/oauth2/authorize?client_id=915323367177982012&scope=bot+applications.commands&permissions=1374891928950)</h3>

## [Unreleased]
Nothing for now, keep updated!
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Released]

## [1.0.2] - 13.07.2023

### Removed

-Dashboard is removed for now, new one will be imported.

## [1.0.1] - 12.07.2023

### Added

- Fresh commands and files from Supra Bot - developer by me

### Fixed

- Bot now runs pefectly

### Changed

- Changed bot name and files from Lester to Supra Bot

## Requirements
- Discord.js v14 (`npm install discord.js@latest`)
- `applications.commands` scope enabled for your bot in Developer Portal (For Slash Cmds).
- `MESSAGE_CONTENT`, `GUILD_MEMBERS` intents enabled in Developer Portal (`GUILD_PRESENCES` is optional)
- NodeJS v16.9.0 or higher
- Basic knowledge of JS or Discord.JS

## Have suggestions on what could be added?
- **Leave your suggestions right [here](https://github.com/PixelJuggernaut/suprabot/discussions) then!**

## What features does Lester Include?

<details><summary>Available Features</summary>

| Features             | Availability |
| -------------------- | ------------ |
| Anti-Link            |     ✅       |
| Autorole             |     ✅       |
| Auto-Mod             |     ✅       |
| Custom Prefix        |     ✅       |
| Database             |     ✅       |
| Welcomer             |     ✅       |
| Welcomer             |     ✅       |
| Logging              |     ✅       |
| Fun                  |     ✅       |
| Menu(s)              |     ✅       |
| Suggestion System    |     ✅       |
| Slash Commands       |     ✅       |
| Rep System           |     ✅       |
| Verification System  |     ✅       |
| Vote Credits         |     ✅       |
| Economy              |     ✅       |
| Notes                |     ✅       |
| Invites              |     ✅       |
| Levels               |     ✅       |
| Suggestions          |     ✅       |
| Dashboard            |     ✅       |
| Giveaways            |     ✅       |
| And other stuff, take a look :)      | 

</details>

<details><summary>Command Categories</summary>

| Commands Category      | Availability |
| ---------------------- | ------------ |
| Configuration          |     ✅       |
| Fun                    |     ✅       |
| Image                  |     ✅       |
| Info                   |     ✅       |
| Moderation             |     ✅       |
| Music                  |     ✅       |
| NSFW                   |     ✅       |
| Utilities              |     ✅       |

</details>

## Versions and Support Info

<details><summary>Detailed Versions Info</summary>

|              Supra Versions                            |      Support Status      |
| ------------------------------------------------------ | ------------------------ |
| v1.0.1-beta                                            |         Available        |

</details>

 **Keep checking the [Releases Section]([https://github.com/PixelJuggernaut/suprabot/releases]) to get the latest info relating new updates, bug fixes etc about the repository.**
- **`v1.1.1-stable` is included in the List because this version is secure to use.**
- **Support is provided only for `Stable` and `Beta` Versions and not for `Alpha` Versions.**

---

## Getting started
#### Creating a fork:
- 1). [Click here to fork the repository](https://github.com/PixelJuggernaut/suprabot)
- 2). Open your terminal and type `git clone https://github.com/PixelJuggernaut/suprabot/releases`
#### Installing all necessary packages
- `npm install`
#### Starting the bot
- `node .` or `node index` 

---

## Configuration
- **Edit the `.env` file and enter the  required values**
```
{
  @@ -1,23 +0,0 @@
  # Bot Token [Required]
  BOT_TOKEN= 

  # Mongo Database Connection String [Required]
  MONGO_CONNECTION= 

  # Webhooks [Optional]
  ERROR_LOGS=
  JOIN_LEAVE_LOGS=

  # Dashboard [Required for dashboard]
  BOT_SECRET= 
  SESSION_PASSWORD= 

  # Required for Weather Command (https://weatherstack.com)
  WEATHERSTACK_KEY=

  # Required for image commands (https://strangeapi.fun/docs)
  STRANGE_API_KEY=

  # SPOTFIY [Required for Spotify Support]
  SPOTIFY_CLIENT_ID= 
  SPOTIFY_CLIENT_SECRET= 
}
```
- **You may use any channel id for `ERROR_LOGS`, but the bot must be present in the server you are choosing the ID from.**
- **All the errors your bot faces, will be logged in the `ERROR_LOGS`**
- **The `mongoPass` must be a `url`**
- **Visit Official [MongoDB Website](https://mongodb.com) to get your `mongoPass`**
- **Watch this video to know how to get your `mongoPass`:**
[![MongoDb Tutorial](http://img.youtube.com/vi/pf-8KA8td88/0.jpg)](http://www.youtube.com/watch?v=pf-8KA8td88 "MongoDB Tutorial")


---

## Contributing
- **Before contributing to this repo, make sure to read [CONTRIBUTIONS.md](https://github.com/PixelJuggernaut/suprabot/blob/main/CONTRIBUTING.md)**
- **Join our [Support & Development Server](https://discord.gg/pk8Ve68UEH)**
- **Join our [Community server](https://discord.gg/EKVzH5tqhR)**

---

## Star the Repo if you liked it!
