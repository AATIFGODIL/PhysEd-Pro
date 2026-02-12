"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface LiquidCardProps {
    children: ReactNode;
    className?: string;
    glowing?: boolean;
    onClick?: () => void;
    delay?: number;
}

export function LiquidCard({
    children,
    className = "",
    glowing = false,
    onClick,
    delay = 0,
}: LiquidCardProps) {
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay,
            }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }}
            className={`
        relative overflow-hidden rounded-2xl
        backdrop-blur-[24px]
        bg-white/[0.03]
        border border-white/[0.08]
        shadow-[0_4px_20px_rgba(0,0,0,0.3)]
        transition-shadow duration-500
        ${glowing ? "animate-pulse-glow" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
            style={{
                backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(124,58,237,0.06) 0%, transparent 50%)`,
            }}
        >
            {/* Liquid shimmer overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(217,70,239,0.04), transparent 60%)`,
                }}
            />
            {children}
        </motion.div>
    );
}
