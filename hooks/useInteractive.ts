import { Circle, Control, Interactive, Line, Path, Text } from "vector-js-clone";
import { PointCharge, TestCharge } from "cs-zeus";

import { getVector } from "cs-zeus/lib/vector";
import { useEffect } from "react";

type GraphicCharge = {
  chargeControl: Control;
  chargeNameText: Text;
  chargeSignText: Text;
  chargePositionText: Text;
  chargeCircle: Circle;
  charge: PointCharge;
  arrow?: {
    arrowHead: Path; arrowBody: Line; arrowText: Text; arrowTextSubscript: Text;
  }
}

const initialWidthSize = 50;
const initialHeightSize = 50;
const w = initialWidthSize;
const h = initialHeightSize;
const margin = 64;

const graphicCharges: GraphicCharge[] = [];
let testChargeControl: Control;
let interactive: Interactive;

export const useInteractive = (canvasId: string, charges: PointCharge[], testCharge: TestCharge, onChargePositionUpdate: (charge: PointCharge) => void, hasGridLineEnabled: boolean = true) => {
  const drawCharge = (charge: PointCharge) => {
    const isTestCharge = charge.name === 'Test Charge';
    const isPositiveCharge = charge.q > 0;

    const chargeControl = interactive.control(charge.position.x, charge.position.y);
    chargeControl.stroke = 'none';

    if (isTestCharge) {
      testChargeControl = chargeControl;
    }
    const chargeCircle = interactive.circle(0, 0, 20);
    if (isTestCharge) {
      chargeCircle.classList.add('test-charge');
    }
    chargeCircle.addDependency(chargeControl);
    chargeCircle.update = function () {
      this.cx = chargeControl.x;
      this.cy = chargeControl.y;

      onChargePositionUpdate({
        ...charge,
        position: getVector(chargeControl.x / w, chargeControl.y / h)
      })
    };

    const chargeSignText = interactive.text(0, 0, isPositiveCharge ? '+' : '-');
    chargeSignText.addDependency(chargeControl);
    chargeSignText.update = function () {
      if (isPositiveCharge) {
        this.x = chargeControl.x - 12;
        this.y = chargeControl.y + 11;
      } else {
        this.x = chargeControl.x - 7;
        this.y = chargeControl.y + 12;
      }
    };

    if (isPositiveCharge) {
      chargeCircle.classList.add('positive');
      chargeSignText.classList.add('positive');
    } else {
      chargeCircle.classList.add('negative');
      chargeSignText.classList.add('negative');
    }

    const chargeNameText = interactive.text(150, 150, charge.name);
    chargeNameText.classList.add('charge-name')
    chargeNameText.addDependency(chargeControl);
    chargeNameText.update = function () {
      this.x = isTestCharge ? chargeControl.x - 42 : chargeControl.x - 30;
      this.y = chargeControl.y + 40;
    };

    const chargePositionText = interactive.text(150, 150, '');
    chargePositionText.addDependency(chargeControl);
    chargePositionText.update = function () {
      this.x = chargeControl.x - 35;
      this.y = chargeControl.y + 60;
      this.contents = `${charge.q}e - <${chargeControl.x / w},${-chargeControl.y / h}>`;
    };

    if (isTestCharge) {
      graphicCharges.push({
        chargeControl: chargeControl, chargeSignText, chargeNameText, chargePositionText, chargeCircle, charge
      });
    }

    if (!isTestCharge) {
      const arrowBody = interactive.line(chargeControl.x, chargeControl.y, testChargeControl.x, testChargeControl.y);
      arrowBody.addDependency(testChargeControl);
      arrowBody.addDependency(chargeControl);
      arrowBody.update = function () {
        this.x1 = chargeControl.x;
        this.y1 = chargeControl.y;
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
      arrowHead.addDependency(chargeControl);
      arrowHead.update = function () {
        const r = 8;
        const offset = 0;
        const angle = Math.atan2(testChargeControl.y - chargeControl.y, testChargeControl.x - chargeControl.x);
        this.d = `M ${testChargeControl.x + 1.3 * r * Math.cos(angle)} ${testChargeControl.y + 1.3 * r * Math.sin(angle) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle - (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle - (2 * Math.PI) / 3) + offset
          }
    L ${testChargeControl.x + r * Math.cos(angle + (2 * Math.PI) / 3)} ${testChargeControl.y + r * Math.sin(angle + (2 * Math.PI) / 3) + offset
          }
              Z`;
      };

      graphicCharges.push({
        chargeControl: chargeControl, chargeSignText, chargeNameText, chargePositionText, chargeCircle, charge, arrow: {
          arrowHead, arrowBody, arrowText, arrowTextSubscript
        }
      });
    }
  }

  const drawGraph = (addCharges: VoidFunction[]) => {
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

    graphicCharges.forEach(graphicCharge => {
      graphicCharge.chargeControl.constrainWithinBox(xAxis.x1, yAxis.y1, xAxis.x2, yAxis.y2);
      const boxConstraint = graphicCharge.chargeControl.constrain;
      graphicCharge.chargeControl.constrain = (_, n) => {
        const x = w * Math.round(n.x / w);
        const y = h * Math.round(n.y / h);
        const p = boxConstraint({ x: x, y: y }, { x: x, y: y });
        return { x: p.x, y: p.y };
      };
      graphicCharge.chargeControl.translate(graphicCharge.charge.position.x * w, graphicCharge.charge.position.y * h);
    })
  }

  useEffect(() => {
    const containerElement = document.getElementById(canvasId);
    if (interactive !== undefined) {
      interactive.clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interactive = new Interactive(canvasId);
    interactive.width = (containerElement?.parentElement?.clientWidth || 1280) - margin * 2;
    interactive.height = (window.innerHeight || 720) - margin * 2;
    interactive.originX = interactive.width / 2 + margin;
    interactive.originY = interactive.height / 2 + margin;
    interactive.width += 2 * margin;
    interactive.height += 2 * margin;
    interactive.style.overflow = 'visible';
    drawGraph([() => drawCharge(testCharge), ...charges.map(charge => () => drawCharge(charge))]);
  }, []);

  const updateTestCharge = (currentTestCharge: TestCharge) => {
    const testChargeGraphic = graphicCharges.find(graphicCharge => graphicCharge.charge.name === currentTestCharge.name);
    if (!testChargeGraphic) {
      return;
    }

    const isOldTestChargePositive = testChargeGraphic.charge.q > 0;
    const isNewTestChargePositive = currentTestCharge.q > 0;

    testChargeGraphic.chargePositionText.contents = `${currentTestCharge.q}e - <${currentTestCharge.position.x},${-currentTestCharge.position.y}>`;
    testChargeGraphic.charge = currentTestCharge;
    if ((isOldTestChargePositive || isNewTestChargePositive) && !(isOldTestChargePositive && isNewTestChargePositive)) {
      testChargeGraphic.chargeSignText.contents = isNewTestChargePositive ? '+' : '-'
      if (isNewTestChargePositive) {
        testChargeGraphic.chargeSignText.x = testChargeGraphic.chargeControl.x - 12;
        testChargeGraphic.chargeSignText.y = testChargeGraphic.chargeControl.y + 11;

        testChargeGraphic.chargeCircle.classList.remove('negative');
        testChargeGraphic.chargeSignText.classList.remove('negative');

        testChargeGraphic.chargeCircle.classList.add('positive');
        testChargeGraphic.chargeSignText.classList.add('positive');
      } else {
        testChargeGraphic.chargeSignText.x = testChargeGraphic.chargeControl.x - 7;
        testChargeGraphic.chargeSignText.y = testChargeGraphic.chargeControl.y + 12;

        testChargeGraphic.chargeCircle.classList.remove('positive');
        testChargeGraphic.chargeSignText.classList.remove('positive');

        testChargeGraphic.chargeCircle.classList.add('negative');
        testChargeGraphic.chargeSignText.classList.add('negative');
      }
    }
  }

  const updateCharges = (currentCharges: PointCharge[]) => {
    if (!currentCharges) {
      return;
    }

    // TODO: Handle case add charges
    const changedCharges = currentCharges.filter(charge => charge.q !== (graphicCharges.map(graphicCharge => graphicCharge.charge)?.find(c => c.name === charge.name)?.q ?? charge.q));
    const removedCharges = graphicCharges.filter(graphicCharge => !currentCharges.find(charge => charge.name === graphicCharge.charge.name) && graphicCharge.charge.name !== 'Test Charge');

    removedCharges.forEach(graphicCharge => {
      graphicCharge.chargeSignText.remove();
      graphicCharge.chargeNameText.remove();
      graphicCharge.chargePositionText.remove();
      graphicCharge.chargeCircle.remove();
      graphicCharge.arrow?.arrowHead.remove()
      graphicCharge.arrow?.arrowBody.remove()
      graphicCharge.arrow?.arrowText.remove()
      graphicCharge.arrow?.arrowTextSubscript.remove()
      graphicCharge.chargeControl.remove();
      graphicCharges.splice(graphicCharges.indexOf(graphicCharge), 1);
    })

    changedCharges.forEach(currentCharge => {
      const currentGraphicCharge = graphicCharges.find(graphicCharge => graphicCharge.charge.name === currentCharge.name);
      if (!currentGraphicCharge) {
        return
      }
      const isOldChargePositive = currentGraphicCharge.charge.q > 0;
      const isNewChargePositive = currentCharge.q > 0;

      currentGraphicCharge.chargePositionText.contents = `${currentCharge.q}e - <${currentCharge.position.x},${-currentCharge.position.y}>`;
      currentGraphicCharge.charge.q = currentCharge.q;
      if ((isOldChargePositive || isNewChargePositive) && !(isOldChargePositive && isNewChargePositive)) {
        currentGraphicCharge.chargeSignText.contents = isNewChargePositive ? '+' : '-'
        if (isNewChargePositive) {
          currentGraphicCharge.chargeSignText.x = currentGraphicCharge.chargeControl.x - 12;
          currentGraphicCharge.chargeSignText.y = currentGraphicCharge.chargeControl.y + 11;

          currentGraphicCharge.chargeCircle.classList.remove('negative');
          currentGraphicCharge.chargeSignText.classList.remove('negative');

          currentGraphicCharge.chargeCircle.classList.add('positive');
          currentGraphicCharge.chargeSignText.classList.add('positive');
        } else {
          currentGraphicCharge.chargeSignText.x = currentGraphicCharge.chargeControl.x - 7;
          currentGraphicCharge.chargeSignText.y = currentGraphicCharge.chargeControl.y + 12;

          currentGraphicCharge.chargeCircle.classList.remove('positive');
          currentGraphicCharge.chargeSignText.classList.remove('positive');

          currentGraphicCharge.chargeCircle.classList.add('negative');
          currentGraphicCharge.chargeSignText.classList.add('negative');
        }
      }
    })
  }

  return { updateTestCharge, updateCharges };
}