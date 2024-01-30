export class CircleUser {
	constructor(w, h, radius) {
		this.x = w;
		this.y = h;
		this.angle = Math.random() * Math.PI * 2;
		this.radius = radius;
		this.firstColor = `hsla(352, 100%, 50%, 0.25)`;
		this.secondColor = `hsla(352, 100%, 50%, 0.01)`;
	}

	draw(ctx, speed) {
		this.angle += speed;
		const { x } = this;
		const { y } = this;
		const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
		gradient.addColorStop(0, this.firstColor);
		gradient.addColorStop(1, this.secondColor);

		ctx.globalCompositeOperation = 'lighter';
		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.shadowColor = '#8D160E96';
		ctx.shadowBlur = 10;
		ctx.arc(x, y, this.radius, 0, Math.PI * 2);
		ctx.fill();
		ctx.shadowColor = null;
		ctx.shadowBlur = null;
	}
}
