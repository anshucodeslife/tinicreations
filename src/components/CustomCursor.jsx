import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);

    const colors = [
        "#ffffff", // White
        "#f59e0b", // Amber-500
        "#ef4444", // Red-500
        "#3b82f6", // Blue-500
        "#10b981", // Emerald-500
        "#ec4899", // Pink-500
        "#8b5cf6", // Violet-500
    ];

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        let requestRef;
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for the main dot
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const animate = () => {
            // Smooth follow for the ring
            followerX += (mouseX - followerX) * 0.1; // Lerp factor
            followerY += (mouseY - followerY) * 0.1;

            if (follower) {
                follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) scale(${isHovering ? 1.5 : 1})`;
            }

            requestRef = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        requestRef = requestAnimationFrame(animate);

        const handleMouseDown = () => {
            setColorIndex((prev) => (prev + 1) % colors.length);
        };
        window.addEventListener("mousedown", handleMouseDown);

        // Hover listeners
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const addListeners = () => {
            const interactiveElements = document.querySelectorAll("a, button, input, textarea, select, [role='button'], .hover-trigger");
            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
            return interactiveElements;
        };

        let elements = addListeners();

        // Observer for dynamic elements
        const observer = new MutationObserver(() => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            elements = addListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            cancelAnimationFrame(requestRef);
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [isHovering]); // colors array is constant

    const currentColor = colors[colorIndex];

    return (
        <>
            {/* Main Dot - Positioned at top-left 0,0 initially, moved by transform */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-colors duration-300"
                style={{
                    marginTop: "-4px",
                    marginLeft: "-4px",
                    backgroundColor: currentColor
                }}
            />

            {/* Follower Ring */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${isHovering ? "bg-opacity-10" : "bg-transparent"
                    }`}
                style={{
                    marginTop: "-20px",
                    marginLeft: "-20px",
                    borderColor: isHovering ? currentColor : `${currentColor}80`, // 50% opacity for border when not hovering
                    backgroundColor: isHovering ? `${currentColor}20` : "transparent" // 10% opacity bg when hovering
                }}
            />
        </>
    );
};

export default CustomCursor;
