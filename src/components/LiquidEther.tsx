import type React from 'react';
import { LiquidEtherCanvas } from './liquid-ether/LiquidEtherCanvas';
import { useLiquidEther, type LiquidEtherProps } from './liquid-ether/useLiquidEther';

export default function LiquidEther({
  style = {},
  className = '',
  ...props
}: LiquidEtherProps): React.ReactElement {
  const { mountRef } = useLiquidEther(props);

  return <LiquidEtherCanvas mountRef={mountRef} className={className} style={style} />;
}
