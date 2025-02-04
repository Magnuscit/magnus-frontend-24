import React, { useEffect, useRef } from 'react';

const DripMask = () => {
	const maskRef = useRef(null);

	useEffect(() => {
		const animate = () => {
			if (!maskRef.current) return;

			// Create drip effect paths
			const drips = [
				'M 0,0 L 15,0 Q 12,10 10,20 T 8,40',
				'M 25,0 L 45,0 Q 40,15 35,30 T 30,60',
				'M 55,0 L 85,0 Q 75,20 70,40 T 65,80',
				'M 95,0 L 115,0 Q 110,12 105,25 T 100,45',
				'M 125,0 L 155,0 Q 145,18 140,35 T 135,65',
				'M 165,0 L 185,0 Q 180,15 175,30 T 170,50'
			].join(' ');

			// Update the mask path with scroll progress
			const scrollProgress = Math.min(1, window.scrollY / window.innerHeight);
			const maskPath = `
        M 0,0 
        L 200,0 
        L 200,${scrollProgress * 100}
        L 0,${scrollProgress * 100}
        Z
        ${scrollProgress > 0 ? drips : ''}
      `;

			maskRef.current.setAttribute('d', maskPath);
		};

		window.addEventListener('scroll', animate);
		animate(); // Initial position

		return () => window.removeEventListener('scroll', animate);
	}, []);

	return (
		<div className="absolute inset-0 w-full">
			<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 100">
				<defs>
					<mask id="dripMask">
						<path
							ref={maskRef}
							d="M 0,0 L 200,0 L 200,0 L 0,0 Z"
							fill="white"
							vectorEffect="non-scaling-stroke"
						/>
					</mask>
				</defs>
				<rect
					width="100%"
					height="100%"
					fill="white"
					mask="url(#dripMask)"
				/>
			</svg>
		</div>
	);
};

export default DripMask;
