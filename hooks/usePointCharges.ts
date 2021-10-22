import { PointCharge } from 'cs-zeus';
import { useState } from 'react';

export const usePointCharges = () => {
	const initialCharges = [
		{ name: 'Test Charge', position: { x: 0, y: 0 }, q: 1 },
		{ name: 'Charge 1', position: { x: 1, y: 1 }, q: -1 },
		{ name: 'Charge 2', position: { x: 1, y: 2 }, q: 1 },
	];

	const [pointCharges, setPointCharges] =
		useState<PointCharge[]>(initialCharges);

	const addPointChargeHandler = (q: number) => {
		setPointCharges((prev) => [
			...prev,
			{
				name: `Charge ${
					parseInt(
						prev
							.filter((charge) => charge.name !== 'Test Charge')
							.slice(-1)[0]
							.name.split(' ')[1]
					) + 1
				}`,
				position: { x: 0, y: 0 },
				q,
			},
		]);
	};

	const editChargeHandler = (charge: PointCharge) => {
		setPointCharges((prev) => [
			...prev.filter((c) => c.name !== charge.name),
			charge,
		]);
	};

	const editPositionHandler = (charge: PointCharge) => {
		setPointCharges((prev) =>
			[...prev.filter((c) => c.name !== charge.name), charge].sort(
				(charge1, charge2) => {
					let name1 = charge1.name.toUpperCase();
					let name2 = charge2.name.toUpperCase();
					if (name1 < name2) {
						return -1;
					}
					if (name1 > name2) {
						return 1;
					}
					return 0;
				}
			)
		);
	};

	const removePointChargeHandler = (chargeName: string) => {
		setPointCharges((prev) =>
			prev.filter((charge) => charge.name !== chargeName)
		);
	};

	return {
		pointCharges,
		addPointChargeHandler,
		editChargeHandler,
		editPositionHandler,
		removePointChargeHandler,
	};
};
