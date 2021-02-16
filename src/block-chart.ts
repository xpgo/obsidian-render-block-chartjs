
import { Chart } from 'chart.js';

// ------------------------------------------------------------
// chart.js processor
// ------------------------------------------------------------

export class ChartProcessor {
	
	async run(source: string, el: HTMLElement) {
		let elCanvas = el.createEl('canvas');
		const chart = new Chart(elCanvas, JSON.parse(source));
		el.appendChild(elCanvas);
    }
}
