import { Vector } from 'cs-zeus/lib/vector';

export const buildLatexUnitVectorMatrix = (vector: Vector) => {
	if ((vector.x == 0 || !vector.x) && (vector.y == 0 || !vector.y)) {
		return '';
	}
	return `\\begin{bmatrix}
  ${vector.x.toFixed(2)} \\\\
  ${vector.y.toFixed(2)}
\\end{bmatrix}`;
};

export const buildLatexScientificNotation: (
	value: number,
	accumulator: number,
	constantMultipler: string
) => string = (
	value: number,
	accumulator: number,
	constantMultiplier: string
) => {
	if (value == 0 || isNaN(value)) {
		return '0';
	}
	if (!isFinite(value)) {
		return 'value\\ is\\ too\\ big';
	}
	if (value >= 10) {
		return buildLatexScientificNotation(
			value / 10,
			accumulator + 1,
			constantMultiplier
		);
	} else if (value < 1) {
		return buildLatexScientificNotation(
			value * 10,
			accumulator - 1,
			constantMultiplier
		);
	}
	return `${value.toFixed(
		2
	)}${constantMultiplier} \\times ${10}^{${accumulator}}`;
};
