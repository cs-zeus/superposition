import { Control, Interactive } from "vector-js-clone";
import { PointCharge, TestCharge } from "cs-zeus";

import { Vector } from "cs-zeus/lib/vector";
import { useEffect } from "react";

type GraphicCharge = {
  pointCharge: Control;
  position: Vector;
}

//TODO: Handle update position of charge

export const useInteractive = (canvasId: string, charges: PointCharge[], testCharge: TestCharge, hasGridLineEnabled: boolean = true) => {
  const margin = 64;

  let interactive: Interactive;
  let testChargeControl: Control;
  let graphicCharges: GraphicCharge[] = [];

  const drawCharge = (charge: PointCharge) => {
    const isTestCharge = charge.name === 'Test Charge';
    const isPositiveCharge = charge.q > 0;

    const point = interactive.control(charge.position.x, charge.position.y);
    point.stroke = 'none';

    if (isTestCharge) {
      testChargeControl = point;
    }
    const circle = interactive.circle(0, 0, 20);
    if (isTestCharge) {
      circle.classList.add('test-charge');
    }
    circle.addDependency(point);
    circle.update = function () {
      this.cx = point.x;
      this.cy = point.y;
    };

    const chargeText = interactive.text(0, 0, isPositiveCharge ? '+' : '-');
    chargeText.addDependency(point);
    chargeText.update = function () {
      if (isPositiveCharge) {
        this.x = point.x - 12;
        this.y = point.y + 10;
      } else {
        this.x = point.x - 8;
        this.y = point.y + 11;
      }
    };

    if (isPositiveCharge) {
      circle.classList.add('positive');
      chargeText.classList.add('positive');
    } else {
      circle.classList.add('negative');
      chargeText.classList.add('negative');
    }

    const text = interactive.text(150, 150, charge.name);
    text.addDependency(point);
    text.update = function () {
      this.x = point.x - 30;
      this.y = point.y + 40;
    };

    const text2 = interactive.text(150, 150, 'myText');
    text2.addDependency(point);
    text2.update = function () {
      this.x = point.x - 35;
      this.y = point.y + 60;
      this.contents = `${charge.q}n - <${point.x / 50},${-point.y / 50}>`;
    };

    if (!isTestCharge) {
      const arrowBody = interactive.line(point.x, point.y, testChargeControl.x, testChargeControl.y);
      arrowBody.addDependency(testChargeControl);
      arrowBody.addDependency(point);
      arrowBody.update = function () {
        this.x1 = point.x;
        this.y1 = point.y;
        this.x2 = testChargeControl.x;
        this.y2 = testChargeControl.y;
      };

      const arrowHead = interactive.path('');
      arrowHead.classList.add('arrow');
      arrowHead.addDependency(testChargeControl);
      arrowHead.addDependency(point);
      arrowHead.update = function () {
        const r = 8;
        const offset = 0;
        const angle = Math.atan2(testChargeControl.y - point.y, testChargeControl.x - point.x);
        this.d = `M ${testChargeControl.x + 1.3 * r * Math.cos(angle)} ${testChargeControl.y + 1.3 * r * Math.sin(angle) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle - (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle - (2 * Math.PI) / 3) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle + (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle + (2 * Math.PI) / 3) + offset
          }
              Z`;
      };
    }

    graphicCharges.push({ pointCharge: point, position: charge.position });
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