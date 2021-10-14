import { PointCharge } from "cs-zeus";
import { useState } from "react";

export const usePointCharges = () => {
  const initialCharges = [
    { name: 'Test Charge', position: { x: 0, y: 0 }, q: 1 },
  ];

  const [pointCharges, setPointCharges] = useState<PointCharge[]>(initialCharges);

  const addPointChargeHandler = (q: number) => {
    setPointCharges((prev) => [...prev, { name: `Charge ${prev.length + 1}`, position: { x: 0, y: 0 }, q }]);
  };

  const editChargeHandler = (charge: PointCharge) => {
    setPointCharges((prev) => [
      ...prev.filter((c) => c.name !== charge.name),
      charge,
    ]);
  };

  const editPositionHandler = (charge: PointCharge) => {
    setPointCharges((prev) => [
      ...prev.filter((c) => c.name !== charge.name),
      charge,
    ]);
  };

  const removePointChargeHandler = (chargeName: string) => {
    setPointCharges((prev) => prev.filter((charge) => charge.name !== chargeName));
  };

  return { pointCharges, addPointChargeHandler, editChargeHandler, editPositionHandler, removePointChargeHandler };
}