import { motion } from 'framer-motion';

export const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Main loader content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Animated logo/initials */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    {/* Outer ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-28 h-28 rounded-full border-2 border-transparent border-t-indigo-500 border-r-cyan-500"
                    />

                    {/* Inner ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border-2 border-transparent border-b-purple-500 border-l-indigo-400"
                    />

                    {/* Center content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                        >
                            AP
                        </motion.span>
                    </div>
                </motion.div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
                        Loading Portfolio
                    </span>

                    {/* Animated dots */}
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.15
                                }}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
