import type React from 'react';

type LiquidEtherCanvasProps = {
  mountRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  style?: React.CSSProperties;
};

export const LiquidEtherCanvas = ({
  mountRef,
  className = '',
  style = {}
}: LiquidEtherCanvasProps): React.ReactElement => (
  <div
    ref={mountRef}
    className={`w-full h-full relative overflow-hidden pointer-events-none touch-none ${className || ''}`}
    style={style}
  />
);
