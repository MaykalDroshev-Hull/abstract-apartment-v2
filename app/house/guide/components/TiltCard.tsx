'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  maxTilt?: number;
}

export function TiltCard({
  children,
  className = '',
  onClick,
  maxTilt = 6,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates normalized from -1 to 1
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for silky physics
  const springConfig = { damping: 20, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Sheen glare position (0% to 100%)
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 70%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const normalizedX = mouseX / rect.width - 0.5;
      const normalizedY = mouseY / rect.height - 0.5;
      x.set(normalizedX);
      y.set(normalizedY);
    },
    [x, y]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.018 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`relative cursor-pointer transition-shadow duration-300 ${className}`}
    >
      {children}

      {/* Dynamic Sheen Glare Overlay */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-3xl"
          style={{
            background: glareBackground,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}

