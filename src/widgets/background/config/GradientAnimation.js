import { Circle } from './Circle';
import { CircleUser } from './CircleUser';

export class GradientAnimation {
	constructor() {
		this.cnv = document.querySelector(`canvas`);
		this.ctx = this.cnv.getContext(`2d`);

		this.circlesNum = 18;
		this.minRadius = 600;
		this.maxRadius = 600;
		this.speed = 0.008;

		(window.onresize = () => {
			this.setCanvasSize();
			this.createCircles();
			this.createUserCircle();
		})();
		(window.onmousemove = (e) => {
			this.createUserCircle(e);
		})();
		this.drawAnimation();
	}

	setCanvasSize() {
		this.w = this.cnv.width = window.innerWidth * devicePixelRatio;
		this.h = this.cnv.height = window.innerHeight * devicePixelRatio;
		this.ctx.scale(devicePixelRatio, devicePixelRatio);
	}

	createCircles() {
		this.circles = [];
		for (let i = 0; i < this.circlesNum; ++i) {
			this.circles.push(
				new Circle(
					this.w,
					this.h,
					this.minRadius,
					this.maxRadius
				)
			);
		}
	}

	createUserCircle(e) {
		if (e !== undefined) {
			this.userCircle = new CircleUser(e.clientX, e.clientY, 300);
		} else this.userCircle = new CircleUser(400, 800, 200);
	}

	drawCircles() {
		this.circles.forEach((circle) => circle.draw(this.ctx, this.speed));
		this.userCircle.draw(this.ctx, this.speed);
	}

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.w, this.h);
	}

	drawAnimation() {
		this.clearCanvas();
		this.drawCircles();
		window.requestAnimationFrame(() => this.drawAnimation());
	}
}
