"use client";
import { IconChevronDown, IconPinFilled, IconUsers } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
export const ChatHandler = () => {
    const [showOptionButton, setShowOptionButton] = useState(false);
    const [showStatusRing, setShowStatusRing] = useState(true);

    return (
        <motion.div
            onHoverStart={() => setShowOptionButton(true)}
            onHoverEnd={() => setShowOptionButton(false)}
            className="flex hover:bg-[#2D2D2D] py-2.5 rounded-md px-1.5 gap-1"
        >
            {showStatusRing ? (
                <div className="size-12.5 rounded-full flex justify-center items-center border-[1.5px] border-[#25D366]">
                    <div className="bg-[#321622] border border-[#402530] rounded-full size-10.5 shrink-0 flex justify-center items-center">
                        <IconUsers color="#FB7583" size={20} />
                    </div>
                </div>
            ) : (
                <div className="bg-[#321622] border border-[#402530] rounded-full size-12 shrink-0 flex justify-center items-center">
                    <IconUsers color="#FB7583" size={20} />
                </div>
            )}
            {/* Text Box */}
            <div className="px-1 py-1 justify-center flex-1 overflow-hidden flex flex-col">
                <div className="flex-1 overflow-hidden flex justify-between items-center">
                    <h3 className="text-sm truncate tracking-tight font-bold">
                        GFM BE (B) COMP ROLL NO 01 TO 35
                    </h3>
                    <div className="shrink-0 flex justify-center items-center">
                        <p className="text-[14px]  text-[#959393] pl-1.5">Monday</p>
                        <AnimatePresence>
                            {showOptionButton && (
                                <motion.button
                                    initial={{
                                        height: 0,
                                        width: 0,
                                        marginLeft: 0,
                                    }}
                                    transition={{ duration: 0.18 }}
                                    animate={
                                        showOptionButton && {
                                            height: 18,
                                            width: 18,
                                            marginLeft: 6,
                                        }
                                    }
                                    exit={{
                                        height: 0,
                                        width: 0,
                                        marginLeft: 0,
                                    }}
                                    className="size-4 flex justify-center items-center rounded-md bg-[#565656]"
                                >
                                    <IconChevronDown
                                        color="#D1D6DA"
                                        size={14}
                                    />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex-1 overflow-hidden flex justify-between items-start ">
                    <h3 className="text-xs truncate m-0 text-[#959393] font-semibold">
                        Kartik: Dear Authors, We are sharing
                    </h3>
                    <div className="flex justify-center items-center shrink-0 gap-1 self-end">
                        <IconPinFilled
                            color={"#959393"}
                            size={15}
                            className="shrink-0"
                        />
                        <p className="text-xs rounded-lg px-1 flex justify-center items-center bg-[#21C063] text-[#0A0A0A]">
                            132
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
