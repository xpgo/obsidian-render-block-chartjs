import {
    Plugin,
} from 'obsidian';

import { ChartProcessor } from './block-chart'

// ------------------------------------------------------------
// RenderBlockChartjsPlugin
// ------------------------------------------------------------

export default class RenderBlockChartjsPlugin extends Plugin {

    async onload() {
        console.log('Loading Render Block Chartjs plugin');

        // for cards rendering
        this.registerMarkdownCodeBlockProcessor('chartjs', async (source, el, ctx) => {
            // await this.refreshEl(el);
            const proc = new ChartProcessor();
            await proc.run(source, el);
        });
    }

    onunload() {
        console.log('Unloading Render Block Chartjs plugin');
    }
}
