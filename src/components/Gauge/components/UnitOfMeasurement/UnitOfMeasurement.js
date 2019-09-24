import React, { PureComponent } from "react";

class UnitOfMeasurement extends PureComponent {
  render() {
    const { value, disabled, center, offsetText, ...rest } = this.props;

    return (
      <text
        transform={`translate(${center.x + offsetText},${center.y + 50})`}
        opacity={disabled ? 0.4 : undefined}
        {...rest}
      >
        {value}
      </text>
    );
  }
}

export default UnitOfMeasurement;
