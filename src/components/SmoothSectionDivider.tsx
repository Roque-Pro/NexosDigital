import React from "react";

interface SmoothSectionDividerProps {
  fromColor?: string;
  toColor?: string;
  height?: number;
}

export default function SmoothSectionDivider({
  fromColor = "#ffffff",
  toColor = "#f1f5f9",
  height = 100,
}: SmoothSectionDividerProps) {
  return (
    <svg
      viewBox={`0 0 1440 ${height}`}
      preserveAspectRatio="none"
      className="w-full block"
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={fromColor} stopOpacity="1" />
          <stop offset="100%" stopColor={toColor} stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="1440" height={height} fill="url(#grad)" />
    </svg>
  );
}
