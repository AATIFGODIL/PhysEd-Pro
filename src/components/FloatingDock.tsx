"use client";

import { useRef, useState, useCallback, useEffect, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type AnimationState = "idle" | "rising" | "sliding" | "descending" | "dragging";

const navItems = [
    {
        label: "Dashboard",
        href: "/",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        label: "Yearly",
        href: "/yearly",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
    },
    {
        label: "Chapters",
        href: "/chapters",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
    },
    {
        label: "Bookmarks",
        href: "/bookmarks",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        label: "PDF",
        href: "/pdf",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6" />
                <path d="M9 15l3 3 3-3" />
            </svg>
        ),
    },
];

export function FloatingDock() {
    const pathname = usePathname();
    const router = useRouter();
    const navRef = useRef<HTMLElement | null>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const animationStateRef = useRef<AnimationState>("idle");
    const dragStartInfo = useRef<{ x: number; left: number; width: number } | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const [gliderStyle, setGliderStyle] = useState<CSSProperties>({ opacity: 0 });
    const [hasMounted, setHasMounted] = useState(false);
    const [itemTransforms, setItemTransforms] = useState<Record<number, string>>({});

    const WIDTH_FACTOR = 0.85;
    const MIN_GLIDER_WIDTH = 28;

    const activeIndex = navItems.findIndex((item) =>
        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );

    const getRef = (index: number) => (el: HTMLAnchorElement | null) => {
        itemRefs.current[index] = el;
    };

    const setAnimationState = (state: AnimationState) => {
        animationStateRef.current = state;
    };

    const setGliderTo = useCallback((index: number, options: { immediate?: boolean } = {}) => {
        const navEl = navRef.current;
        const target = itemRefs.current[index];
        if (!navEl || !target || index === -1) return false;

        const navRect = navEl.getBoundingClientRect();
        const itemRect = target.getBoundingClientRect();
        const gliderWidth = Math.max(Math.round(itemRect.width * WIDTH_FACTOR), MIN_GLIDER_WIDTH);
        const left = itemRect.left - navRect.left + (itemRect.width - gliderWidth) / 2;

        setGliderStyle({
            width: `${gliderWidth}px`,
            height: "calc(100% - 10px)",
            transform: `translateX(${left}px) translateY(-50%)`,
            opacity: 1,
            transition: options.immediate ? "none" : "transform 300ms ease, width 300ms ease, opacity 200ms ease",
            background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(217,70,239,0.3))",
            top: "50%",
            left: 0,
            position: "absolute" as const,
        });
        return true;
    }, []);

    useEffect(() => { setHasMounted(true); }, []);

    const animateItemTransforms = useCallback(() => {
        const gliderEl = navRef.current?.querySelector<HTMLDivElement>('.glider');
        if (!gliderEl || !navRef.current) return;

        const gliderRect = gliderEl.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        const newTransforms: Record<number, string> = {};

        itemRefs.current.forEach((itemEl, index) => {
            if (!itemEl) return;
            const itemRect = itemEl.getBoundingClientRect();
            const itemCenter = itemRect.left - navRect.left + itemRect.width / 2;
            const distance = Math.abs(itemCenter - (gliderRect.left - navRect.left + gliderRect.width / 2));
            const effectRadius = gliderRect.width * 0.8;

            if (distance < effectRadius) {
                const scale = Math.cos((distance / effectRadius) * (Math.PI / 2));
                newTransforms[index] = `translateY(${-5 * scale}px)`;
            } else {
                newTransforms[index] = 'translateY(0px)';
            }
        });

        setItemTransforms(newTransforms);

        if (animationStateRef.current === 'sliding' || animationStateRef.current === 'dragging') {
            animationFrameRef.current = requestAnimationFrame(animateItemTransforms);
        }
    }, []);

    const animateTo = useCallback((clickedIndex: number) => {
        if (animationStateRef.current !== "idle" || clickedIndex === -1 || clickedIndex === activeIndex) return;

        const navEl = navRef.current;
        const startItem = itemRefs.current[activeIndex];
        const endItem = itemRefs.current[clickedIndex];
        if (!navEl || !startItem || !endItem) {
            router.push(navItems[clickedIndex].href);
            return;
        }

        setAnimationState("rising");
        const navRect = navEl.getBoundingClientRect();
        const startRect = startItem.getBoundingClientRect();
        const endRect = endItem.getBoundingClientRect();

        const startWidth = Math.max(Math.round(startRect.width * WIDTH_FACTOR), MIN_GLIDER_WIDTH);
        const startLeft = startRect.left - navRect.left + (startRect.width - startWidth) / 2;
        const endWidth = Math.max(Math.round(endRect.width * WIDTH_FACTOR), MIN_GLIDER_WIDTH);
        const endLeft = endRect.left - navRect.left + (endRect.width - endWidth) / 2;

        // Rise: lift up with glass effect
        setGliderStyle(prev => ({
            ...prev,
            width: `${startWidth}px`,
            transform: `translateX(${startLeft}px) translateY(-50%)`,
            background: "rgba(255,255,255,0.06)",
            boxShadow: "0 10px 18px -6px rgba(0,0,0,0.3)",
            transition: "transform 140ms ease-out, background 140ms ease-out, box-shadow 140ms ease-out, height 140ms ease-out",
            border: '1px solid rgba(255,255,255,0.15)',
            height: 'calc(100% + 10px)',
            backdropFilter: 'blur(16px)',
        }));

        // Slide
        const slideTimeout = setTimeout(() => {
            setAnimationState("sliding");
            setGliderStyle(prev => ({
                ...prev,
                width: `${endWidth}px`,
                transform: `translateX(${endLeft}px) translateY(-50%)`,
                transition: "transform 500ms cubic-bezier(0.22, 0.9, 0.35, 1), width 500ms cubic-bezier(0.22, 0.9, 0.35, 1)",
            }));
            animationFrameRef.current = requestAnimationFrame(animateItemTransforms);
        }, 150);

        // Settle
        const settleTimeout = setTimeout(() => {
            setAnimationState("descending");
            router.push(navItems[clickedIndex].href);
            setGliderStyle(prev => ({
                ...prev,
                transform: `translateX(${endLeft}px) translateY(-50%)`,
                background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(217,70,239,0.3))",
                boxShadow: "none",
                transition: "transform 160ms ease-in, background 160ms ease-in, box-shadow 160ms ease-in, border 160ms ease-in, height 160ms ease-in, backdrop-filter 160ms ease-in",
                border: '1px solid transparent',
                height: 'calc(100% - 10px)',
                backdropFilter: 'none',
            }));
        }, 650);

        const idleTimeout = setTimeout(() => {
            setAnimationState("idle");
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            setItemTransforms({});
        }, 820);

        return () => {
            clearTimeout(slideTimeout);
            clearTimeout(settleTimeout);
            clearTimeout(idleTimeout);
        };
    }, [activeIndex, router, animateItemTransforms]);

    // Sync glider to active route
    useEffect(() => {
        if (activeIndex !== -1 && animationStateRef.current === 'idle') {
            setGliderTo(activeIndex, { immediate: !hasMounted });
        }
        const handleResize = () => setGliderTo(activeIndex, { immediate: true });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [pathname, activeIndex, hasMounted, setGliderTo]);

    const handleMouseDown = (e: MouseEvent<HTMLAnchorElement>, clickedIndex: number) => {
        e.preventDefault();
        if (animationStateRef.current !== "idle") return;

        if (clickedIndex === activeIndex) {
            // Drag interaction
            const navEl = navRef.current;
            const targetItem = itemRefs.current[clickedIndex];
            if (!navEl || !targetItem) return;

            const navRect = navEl.getBoundingClientRect();
            const itemRect = targetItem.getBoundingClientRect();
            const gliderWidth = Math.max(Math.round(itemRect.width * WIDTH_FACTOR), MIN_GLIDER_WIDTH);
            const startLeft = itemRect.left - navRect.left + (itemRect.width - gliderWidth) / 2;

            dragStartInfo.current = { x: e.clientX, left: startLeft, width: gliderWidth };
            setAnimationState("dragging");

            setGliderStyle(prev => ({
                ...prev,
                height: 'calc(100% + 10px)',
                transform: `translateX(${startLeft}px) translateY(-50%)`,
                background: "rgba(255,255,255,0.06)",
                boxShadow: "0 10px 18px -6px rgba(0,0,0,0.3)",
                transition: "height 200ms ease, background 200ms ease, box-shadow 200ms ease, border 200ms ease, backdrop-filter 200ms ease",
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(16px)',
            }));

            animationFrameRef.current = requestAnimationFrame(animateItemTransforms);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp, { once: true });
        } else {
            animateTo(clickedIndex);
        }
    };

    const handleMouseMove = (e: globalThis.MouseEvent) => {
        if (animationStateRef.current !== "dragging" || !dragStartInfo.current) return;
        const dx = e.clientX - dragStartInfo.current.x;
        const newLeft = dragStartInfo.current.left + dx;

        setGliderStyle(prev => ({
            ...prev,
            transform: `translateX(${newLeft}px) translateY(-50%)`,
            transition: "none",
        }));
    };

    const handleMouseUp = (e: globalThis.MouseEvent) => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (animationStateRef.current !== "dragging" || !dragStartInfo.current) return;

        const navEl = navRef.current;
        if (!navEl) return;
        const navRect = navEl.getBoundingClientRect();
        const dropX = e.clientX - navRect.left;

        let closestIndex = 0;
        let minDistance = Infinity;

        itemRefs.current.forEach((itemEl, index) => {
            if (itemEl) {
                const itemRect = itemEl.getBoundingClientRect();
                const itemCenter = (itemRect.left - navRect.left) + itemRect.width / 2;
                const distance = Math.abs(dropX - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            }
        });

        const endItem = itemRefs.current[closestIndex];
        if (endItem) {
            const endRect = endItem.getBoundingClientRect();
            const endWidth = Math.max(Math.round(endRect.width * WIDTH_FACTOR), MIN_GLIDER_WIDTH);
            const endLeft = endRect.left - navRect.left + (endRect.width - endWidth) / 2;

            setAnimationState("descending");
            setItemTransforms({});

            setGliderStyle(prev => ({
                ...prev,
                width: `${endWidth}px`,
                transform: `translateX(${endLeft}px) translateY(-50%)`,
                background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(217,70,239,0.3))",
                boxShadow: "none",
                transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1), background 200ms ease-in, box-shadow 200ms ease-in, border 200ms ease-in, height 200ms ease-in, width 350ms cubic-bezier(0.22, 1, 0.36, 1), backdrop-filter 200ms ease-in",
                border: '1px solid transparent',
                height: 'calc(100% - 10px)',
                backdropFilter: 'none',
            }));

            setTimeout(() => {
                if (closestIndex !== activeIndex) {
                    router.push(navItems[closestIndex].href);
                }
                setAnimationState("idle");
            }, 350);
        }

        dragStartInfo.current = null;
    };

    // Hide on test page - MOVED AFTER HOOKS
    if (pathname.startsWith("/test")) return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 120, delay: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-[720px]"
        >
            <nav
                ref={navRef}
                className="relative flex items-center justify-around rounded-full px-4 py-2 backdrop-blur-[24px] bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            >
                <div
                    className="glider absolute rounded-full pointer-events-none"
                    style={{
                        ...gliderStyle,
                        visibility: hasMounted ? "visible" : "hidden",
                        willChange: 'transform, width, height, background, backdrop-filter',
                    }}
                />

                {navItems.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            ref={getRef(index)}
                            onMouseDown={(e) => handleMouseDown(e, index)}
                            onClick={(e) => e.preventDefault()}
                            className="z-10 flex-1 flex h-auto w-full flex-col items-center justify-center gap-0.5 rounded-xl px-3 py-2"
                            prefetch={true}
                        >
                            <div
                                className={`flex flex-col items-center transition-colors duration-300 ${isActive ? "text-purple-700 dark:text-white" : "text-gray-400 dark:text-purple-300/50 hover:text-purple-600 dark:hover:text-purple-300/80"
                                    }`}
                                style={{
                                    transform: itemTransforms[index] || 'translateY(0px)',
                                    transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                                }}
                            >
                                {item.icon}
                                <span className="text-[11px] font-medium tracking-wide mt-0.5">
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
        </motion.div>
    );
}
