import { Control, Interactive } from "vector-js-clone";
import { PointCharge, TestCharge } from "cs-zeus";
import { Vector, getVector } from "cs-zeus/lib/vector";

import { useEffect } from "react";

type GraphicCharge = {
  pointCharge: Control;
  position: Vector;
}

export const useInteractive = (canvasId: string, charges: PointCharge[], testCharge: TestCharge, onChargePositionUpdate: (charge: PointCharge) => void, hasGridLineEnabled: boolean = true) => {
  const margin = 64;

  let interactive: Interactive;
  let testChargeControl: Control;
  let graphicCharges: GraphicCharge[] = [];

  const drawCharge = (charge: PointCharge) => {
    const isTestCharge = charge.name === 'Test Charge';
    const isPositiveCharge = charge.q > 0;

    const chargeControlPoint = interactive.control(charge.position.x, charge.position.y);
    chargeControlPoint.stroke = 'none';

    if (isTestCharge) {
      testChargeControl = chargeControlPoint;
    }
    const chargeCircleBorder = interactive.circle(0, 0, 20);
    if (isTestCharge) {
      chargeCircleBorder.classList.add('test-charge');
    }
    chargeCircleBorder.addDependency(chargeControlPoint);
    chargeCircleBorder.update = function () {
      this.cx = chargeControlPoint.x;
      this.cy = chargeControlPoint.y;
      onChargePositionUpdate({
        ...charge,
        position: getVector(chargeControlPoint.x, chargeControlPoint.y)
      })
    };

    const chargeSignText = interactive.text(0, 0, isPositiveCharge ? '+' : '-');
    chargeSignText.addDependency(chargeControlPoint);
    chargeSignText.update = function () {
      if (isPositiveCharge) {
        this.x = chargeControlPoint.x - 11.5;
        this.y = chargeControlPoint.y + 13.5;
      } else {
        this.x = chargeControlPoint.x - 5;
        this.y = chargeControlPoint.y + 12;
      }
    };

    if (isPositiveCharge) {
      chargeCircleBorder.classList.add('positive');
      chargeSignText.classList.add('positive');
    } else {
      chargeCircleBorder.classList.add('negative');
      chargeSignText.classList.add('negative');
    }

    const chargeNameText = interactive.text(150, 150, charge.name);
    chargeNameText.classList.add('charge-name')
    chargeNameText.addDependency(chargeControlPoint);
    chargeNameText.update = function () {
      this.x = isTestCharge ? chargeControlPoint.x - 42 : chargeControlPoint.x - 30;
      this.y = chargeControlPoint.y + 40;
    };

    const chargePositionText = interactive.text(150, 150, '');
    chargePositionText.addDependency(chargeControlPoint);
    chargePositionText.update = function () {
      this.x = chargeControlPoint.x - 35;
      this.y = chargeControlPoint.y + 60;
      this.contents = `${charge.q}n - <${chargeControlPoint.x / 50},${-chargeControlPoint.y / 50}>`;
    };

    if (!isTestCharge) {
      const arrowBody = interactive.line(chargeControlPoint.x, chargeControlPoint.y, testChargeControl.x, testChargeControl.y);
      arrowBody.addDependency(testChargeControl);
      arrowBody.addDependency(chargeControlPoint);
      arrowBody.update = function () {
        this.x1 = chargeControlPoint.x;
        this.y1 = chargeControlPoint.y;
        this.x2 = testChargeControl.x;
        this.y2 = testChargeControl.y;
      };

      const arrowText = interactive.text((arrowBody.x1 + arrowBody.x2) / 2, (arrowBody.y1 + arrowBody.y2) / 2, 'r');
      arrowText.addDependency(arrowBody);
      arrowText.update = function () {
        this.x = (arrowBody.x1 + arrowBody.x2) / 2 + 10;
        this.y = (arrowBody.y1 + arrowBody.y2) / 2;
      }
      
      const arrowTextSubscript = interactive.text((arrowBody.x1 + arrowBody.x2) / 2, (arrowBody.y1 + arrowBody.y2) / 2, `${charge.name.split(' ')[1]}T`);
      arrowTextSubscript.addDependency(arrowBody);
      arrowTextSubscript.classList.add('subscript')
      arrowTextSubscript.update = function () {
        this.x = (arrowBody.x1 + arrowBody.x2) / 2 + 14;
        this.y = (arrowBody.y1 + arrowBody.y2) / 2 + 7;
      }

      const arrowHead = interactive.path('');
      arrowHead.classList.add('arrow');
      arrowHead.addDependency(testChargeControl);
      arrowHead.addDependency(chargeControlPoint);
      arrowHead.update = function () {
        const r = 8;
        const offset = 0;
        const angle = Math.atan2(testChargeControl.y - chargeControlPoint.y, testChargeControl.x - chargeControlPoint.x);
        this.d = `M ${testChargeControl.x + 1.3 * r * Math.cos(angle)} ${testChargeControl.y + 1.3 * r * Math.sin(angle) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle - (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle - (2 * Math.PI) / 3) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle + (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle + (2 * Math.PI) / 3) + offset
          }
              Z`;
      };
    }

    graphicCharges.push({ pointCharge: chargeControlPoint, position: charge.position });
  }

  const drawGraph = (addCharges: VoidFunction[]) => {
    const initialWidthSize = 50;
    const initialHeightSize = 50;
    const w = initialWidthSize;
    const h = initialHeightSize;
    const xGridNumber = Math.floor((interactive.width - 2 * margin) / w / 2);
    const yGridNumber = Math.floor((interactive.height - 2 * margin) / h / 2);

    const xAxis = interactive.line(
      -(xGridNumber * w),
      0,
      xGridNumber * w,
      0
    );
    const yAxis = interactive.line(
      0,
      -(yGridNumber * h),
      0,
      yGridNumber * h
    );

    interactive.rectangle(
      xAxis.x1,
      yAxis.y1,
      xAxis.x2 - xAxis.x1,
      yAxis.y2 - yAxis.y1
    );

    const marker = interactive.marker(10, 5, 10, 10);
    marker.path('M 0 0 L 10 5 L 0 10 z');
    marker.setAttribute('orient', 'auto-start-reverse');
    xAxis.setAttribute('marker-end', `url(#${marker.id})`);
    xAxis.setAttribute('marker-start', `url(#${marker.id})`);
    yAxis.setAttribute('marker-end', `url(#${marker.id})`);
    yAxis.setAttribute('marker-start', `url(#${marker.id})`);

    const xAxisLabel = interactive.text(xAxis.x2 + 16, xAxis.y2, 'x');
    xAxisLabel.setAttribute('alignment-baseline', 'middle');
    const yAxisLabel = interactive.text(yAxis.x1, yAxis.y1 - 16, 'y');
    yAxisLabel.setAttribute('text-anchor', 'middle');

    for (let i = -xGridNumber; i <= xGridNumber; i++) {
      const x = i * w;
      const label = interactive.text(x, yGridNumber * h + margin / 2, i.toString());
      label.style.textAnchor = 'middle';
      label.style.alignmentBaseline = 'middle';
      if (hasGridLineEnabled) {
        const vertical = interactive.line(x, -(yGridNumber * h), x, yGridNumber * h);
        vertical.style.strokeOpacity = '.2';
      }
    }
    for (let i = -yGridNumber; i <= yGridNumber; i++) {
      const y = i * h;
      const label = interactive.text(-(xGridNumber * h) - margin / 2, y, (i * -1).toString());
      label.style.textAnchor = 'middle';
      label.style.alignmentBaseline = 'middle';
      if (hasGridLineEnabled) {
        const horizontal = interactive.line(-(xGridNumber * w), y, xGridNumber * w, y);
        horizontal.style.strokeOpacity = '.2';
      }
    }

    // Should call before below loop
    addCharges.forEach(addCharge => addCharge());

    graphicCharges.forEach(charge => {
      charge.pointCharge.constrainWithinBox(xAxis.x1, yAxis.y1, xAxis.x2, yAxis.y2);
      const boxConstraint = charge.pointCharge.constrain;
      charge.pointCharge.constrain = (_, n) => {
        const x = w * Math.round(n.x / w);
        const y = h * Math.round(n.y / h);
        const p = boxConstraint({ x: x, y: y }, { x: x, y: y });
        return { x: p.x, y: p.y };
      };
      charge.pointCharge.translate(charge.position.x * w, charge.position.y * h);
    })
  }

  useEffect(() => {
    const containerElement = document.getElementById(canvasId);
    if (interactive !== undefined) {
      interactive.clear();
    }
    interactive = new Interactive(canvasId);
    interactive.width = (containerElement?.parentElement?.clientWidth || 1280) - margin * 2;
    interactive.height = (window.innerHeight || 720) - margin * 2;
    interactive.originX = interactive.width / 2 + margin;
    interactive.originY = interactive.height / 2 + margin;
    interactive.width += 2 * margin;
    interactive.height += 2 * margin;
    interactive.style.overflow = 'visible';
    drawGraph([() => drawCharge(testCharge)]);
    drawGraph(charges.map(charge => () => drawCharge(charge)));
  }, [])
}