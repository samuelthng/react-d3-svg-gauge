import React, { PureComponent } from "react";
import { symbol, symbolTriangle } from "d3";

class InvertedTriangle extends PureComponent {
  render() {
    const { center, disabled } = this.props;
    return (
      <path
        className="gauge-target"
        d={symbol().type(symbolTriangle)()}
        transform={`translate(${center.x},${center.y - 110}) rotate(180)`}
        fill={disabled ? "#adb2ba" : "#ffa500"}
        stroke={disabled ? "#adb2ba" : "#000"}
        strokeWidth={1}
        style={{
          transition: "all 0.25s 0.25s"
        }}
      />
    );
  }
}

export default InvertedTriangle;
