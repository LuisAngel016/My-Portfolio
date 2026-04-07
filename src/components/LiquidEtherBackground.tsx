import LiquidEther from './LiquidEther';

export const LiquidEtherBackground = () => {
    return (
        <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
            <LiquidEther
                colors={['#1f0fff', '#0f97ff', '#00eeff']}
                mouseForce={20}
                cursorSize={110}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                className="h-full w-full"
            />
        </div>
    );
};
