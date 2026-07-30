"use client";

import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function LogoIcon({
  className = "w-10 h-10",
  size = 40,
  color = "currentColor",
}: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Test Tube / Graduated Cylinder Left */}
      <g stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Test Tube Outer Body */}
        <path d="M 22 35 L 22 80 C 22 84.4 25.6 88 30 88 C 34.4 88 38 84.4 38 80 L 38 35 Z" />
        {/* Test Tube Rim */}
        <path d="M 19 35 L 41 35" />
        {/* Graduation Hash Marks */}
        <path d="M 22 45 L 28 45" />
        <path d="M 22 55 L 30 55" strokeWidth="4" />
        <path d="M 22 65 L 28 65" />
        <path d="M 22 75 L 30 75" strokeWidth="4" />

        {/* Bubbles Floating Above Test Tube */}
        <circle cx="28" cy="27" r="2.5" fill={color} />
        <circle cx="34" cy="20" r="3.5" fill={color} />
        <circle cx="24" cy="16" r="2" fill={color} />
      </g>

      {/* Scientific Microscope Right */}
      <g stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Eyepiece / Ocular Tube (Tilted diagonally down-left) */}
        <path d="M 68 20 L 52 36" strokeWidth="4" />
        <path d="M 72 16 L 64 24" strokeWidth="5" />
        
        {/* Objective Lens Assembly */}
        <path d="M 52 36 L 46 42" strokeWidth="5" />
        <circle cx="56" cy="40" r="4" fill={color} />

        {/* Microscope Stage / Table */}
        <path d="M 38 64 L 66 64" strokeWidth="4.5" />

        {/* Curved Arm Support */}
        <path d="M 60 40 C 78 44 84 60 76 76 C 72 82 64 86 52 86" fill="none" strokeWidth="4" />

        {/* Adjustment Knob */}
        <circle cx="70" cy="54" r="5" fill="none" strokeWidth="3" />

        {/* Base Support Plate */}
        <path d="M 40 88 L 84 88" strokeWidth="5" />
        <path d="M 46 86 L 52 80 L 74 80 L 78 86" fill="none" />
      </g>
    </svg>
  );
}
