import { GradientAnimation } from '../config/GradientAnimation';
import './Background.scss';

export const Background = () => {
	return (
		<div className="background__wrapper">
			<div className="background__wrapper-1" />
			<canvas />
		</div>
	);
};

window.onload = () => {
	// eslint-disable-next-line no-new
	new GradientAnimation();
};
