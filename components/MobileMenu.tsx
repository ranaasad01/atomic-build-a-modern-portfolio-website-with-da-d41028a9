"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-700"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <span className="text-lg font-bold text-gradient">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} className="text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            <nav className="p-6 space-y-2">
              {links.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const baseClass = "flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all";
                const activeClass = "bg-sky-400/10 text-sky-400 border border-sky-400/20";
                const inactiveClass = "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white";
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={[baseClass, isActive ? activeClass : inactiveClass].join(" ")}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <a
                href="#contact"
                onClick={onClose}
                className="block w-full text-center px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
