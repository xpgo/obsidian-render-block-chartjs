# Render Block Chartjs Plugin for Obsidian

Obsidian Plugin: Render code block of chartjs to different charts by chart.js.

![](https://raw.githubusercontent.com/xpgo/obsidian-render-block-chartjs/master/image/render-block-chartjs1.png)

## Features

- use code block of [chartjs](https://markmap.js.org/) to create charts in Obsidian
- use json syntax to define data and options for [chart.js](https://www.chartjs.org/) 
- support most of charts and options in chart.js

**NOTICE**

- The code block name should be `chartjs` instead of `chart`.
- The plugin uses json syntax to define data and options of chart.js and supports more charts and options, it is different from plugin [Obsidian-Charts](https://github.com/phibr0/obsidian-charts) which uses YAML syntax.

## Syntax and Examples

- For the json syntax to define data and options, please refer to [char.js docs](https://www.chartjs.org/docs/latest/getting-started/).
- The note files in the example folder of the repo show some code blocks to create different charts.

## Change log

### 0.1.x

- Initial release (0.1.0)

## Plans for future

- [ ] More examples.

## Install

- On the Obsidian's settings page, browse the community plugins and search 'Render Block Chartjs', then install.
- Manually installing: go to the GitHub release page, copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/render-block-chartjs/`.

## Build

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Support

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/xpgo)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/xpgo/obsidian-render-block-chartjs?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/xpgo/obsidian-render-block-chartjs/total?style=for-the-badge)
