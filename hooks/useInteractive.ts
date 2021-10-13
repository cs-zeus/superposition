import { Control, Interactive } from "vector-js-clone";
import { PointCharge, TestCharge } from "cs-zeus";

import { Vector } from "cs-zeus/lib/vector";
import { useEffect } from "react";

type GraphicCharge = {
  pointCharge: Control;
  position: Vector;
}

//TODO: Handle update position of charge
//TODO: Make Interactive size dynamically equal to parent size
// const containerElement = document.getElementById('my-interactive');
// console.log(containerElement.parentElement.clientWidth);
// console.log(containerElement.parentElement.clientHeight, window.innerHeight);
const margin = 64; //TODO: Make Interactive size dynamically equal to parent size

export const useInteractive = (canvasId: string, charges: PointCharge[], testCharge: TestCharge, hasGridLineEnabled: boolean = true) => {
  let interactive: Interactive;
  let testChargeControl: Control;
  let graphicCharges: GraphicCharge[] = [];

  //TODO: Refactor this code
  // Add charge function for painting new charge and their label
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
    // chargeText.fontSize = '20px';
    // chargeText.textAnchor = 'middle';
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
      arrowHead.update(); //TODO: Check if not need?
    }

    graphicCharges.push({ pointCharge: point, position: charge.position });
  }

  const drawGraph = (addCharges: VoidFunction[]) => {
    // Add axis line
    const xAxis = interactive.line(
      -interactive.width / 2 + margin,
      0,
      interactive.width / 2 - margin,
      0
    );
    const yAxis = interactive.line(
      0,
      -interactive.height / 2 + margin,
      0,
      interactive.height / 2 - margin
    );

    // Add graph border
    interactive.rectangle(
      xAxis.x1,
      yAxis.y1,
      xAxis.x2 - xAxis.x1,
      yAxis.y2 - yAxis.y1
    );

    // Add arrow head of axis
    const marker = interactive.marker(10, 5, 10, 10);
    marker.path('M 0 0 L 10 5 L 0 10 z');
    marker.setAttribute('orient', 'auto-start-reverse');
    xAxis.setAttribute('marker-end', `url(#${marker.id})`);
    xAxis.setAttribute('marker-start', `url(#${marker.id})`);
    yAxis.setAttribute('marker-end', `url(#${marker.id})`);
    yAxis.setAttribute('marker-start', `url(#${marker.id})`);

    // Add label to axis
    const xAxisLabel = interactive.text(xAxis.x2 + 16, xAxis.y2, 'x');
    xAxisLabel.setAttribute('alignment-baseline', 'middle');
    const yAxisLabel = interactive.text(yAxis.x1, yAxis.y1 - 16, 'y');
    yAxisLabel.setAttribute('text-anchor', 'middle');

    const w = 50;
    const h = 50;
    const xGridNumber = 6;
    const yGridNumber = 3;

    //TODO: Add logic to scale the grid from 3 x 6 dynamically to X x Y -> Maybe multiply by current number of charges?
    //TODO: Also the initial 3 x 6 should be dynamically obtained from the parent size
    for (let i = -xGridNumber; i <= xGridNumber; i++) {
      const x = i * w;
      const label = interactive.text(x, 120 + margin, i.toString());
      label.style.textAnchor = 'middle';
      label.style.alignmentBaseline = 'middle';
      if (hasGridLineEnabled) {
        const vertical = interactive.line(x, -150, x, 150);
        vertical.style.strokeOpacity = '.2';
      }
    }
    for (let i = -yGridNumber; i <= yGridNumber; i++) {
      const y = i * h;
      const label = interactive.text(-300 - 20, y, (i * -1).toString());
      label.style.textAnchor = 'middle';
      label.style.alignmentBaseline = 'middle';
      if (hasGridLineEnabled) {
        const horizontal = interactive.line(-300, y, 300, y);
        horizontal.style.strokeOpacity = '.2';
      }
    }

    // Should call before below loop
    addCharges.forEach(addCharge => addCharge());

    // Update position of charges
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

  //TODO: Change to correct hook definition
  useEffect(() => {
    //TODO: Remove all previous graph
    interactive = new Interactive(canvasId);
    interactive.originX = interactive.width / 2 + margin;
    interactive.originY = interactive.height / 2 + margin;
    interactive.width += 2 * margin;
    interactive.height += 2 * margin;
    interactive.style.overflow = 'visible';
    drawGraph([() => drawCharge(testCharge)]);
    drawGraph(charges.map(charge => () => drawCharge(charge)));
  }, [])
}