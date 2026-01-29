import React, { useState, useRef, useEffect } from 'react';

const InteractiveSlider = ({ items, renderItem, cardWidthPixels = 382 }) => {
    // Duplicate items to ensure seamless loop
    const displayItems = [...items, ...items, ...items, ...items];
    const totalOriginalWidth = items.length * cardWidthPixels;

    // State for position (pixels)
    const [offset, setOffset] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Refs for animation loop
    const requestRef = useRef();
    const lastTimeRef = useRef();
    const offsetRef = useRef(0); // Mutable ref for smooth animation updates without re-renders
    const isHoveredRef = useRef(false); // Ref for immediate access in loop

    // Sync ref
    useEffect(() => {
        isHoveredRef.current = isHovered;
    }, [isHovered]);

    // Animation Loop
    const animate = (time) => {
        if (lastTimeRef.current !== undefined) {
            // Speed = 382 / 5000 = 0.076 px/ms
            let deltaMove = 0.076 * (time - lastTimeRef.current);

            // If NOT hovered, drift automatically
            if (!isHoveredRef.current) {
                offsetRef.current += deltaMove;
            }
        }

        // Infinite Loop Check
        if (offsetRef.current >= totalOriginalWidth) {
            offsetRef.current -= totalOriginalWidth;
        } else if (offsetRef.current < 0) {
            offsetRef.current += totalOriginalWidth;
        }

        setOffset(offsetRef.current);
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [totalOriginalWidth]);

    const handleMouseMove = (e) => {
        if (!isHovered) return;
        // Sensitivity factor
        offsetRef.current += e.movementX * 1.5;
    };

    return (
        <div
            className="services-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <div className="services-viewport" style={{ cursor: 'ew-resize' }}>
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(${-offset}px)`,
                        // Remove transition for smooth JS animation
                        transition: 'none',
                        width: 'max-content'
                    }}
                >
                    {displayItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {renderItem(item, index)}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveSlider;
