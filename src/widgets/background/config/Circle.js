import { colorStorage } from './colorStorage';

export class Circle {
	constructor(w, h, minR, maxR) {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.angle = Math.random() * Math.PI * 2;
		this.radius = Math.random() * (maxR - minR) + minR;
		this.firstColor = getCircleUnicleColorFirst();
		this.secondColor = getCircleUnicleColorSecond();
	}

	draw(ctx, speed) {
		this.angle += speed;
		const x = this.x + Math.cos(this.angle) * 200;
		const y = this.y + Math.sin(this.angle) * 200;
		const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
		gradient.addColorStop(0, this.firstColor);
		gradient.addColorStop(1, this.secondColor);

		ctx.globalCompositeOperation = `overlay`;
		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.arc(x, y, this.radius, 0, Math.PI * 2);
		ctx.fill();
	}
}

const getCircleUnicleColorFirst = () => {
	return `rgba(${colorStorage[Math.floor(colorStorage.length * Math.random())]}, 0.2)`;
};
const getCircleUnicleColorSecond = () => {
	return `rgba(${colorStorage[Math.floor(colorStorage.length * Math.random())]}, 0)`;
};
