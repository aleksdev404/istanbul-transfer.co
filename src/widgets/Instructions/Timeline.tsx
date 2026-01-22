"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

import c from "classnames"

import timelineData from './timelineData'


type TimelineKey = keyof typeof timelineData


export default () => {
    const [timelineTab, setTimelineTab] = useState<TimelineKey>("arrival")

    return <>
        <div className="bg-blue-50 rounded-xl py-5">
            <ul className="timeline justify-center">
                {
                    (Object.keys(timelineData) as TimelineKey[]).map((tab, index) =>
                        <li key={index} className="gap-2">
                            <hr className="!h-1" />
                            <div className={c("timeline-start", timelineTab == tab ? "font-bold" : "text-accent")}>{timelineData[tab].value}</div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <button
                                className={c("btn", "btn-xs", "btn-neutral", !(timelineTab == tab) && "btn-soft", "timeline-end")}
                                onClick={() => setTimelineTab(tab)}
                            >
                                {timelineData[tab].title}
                            </button>
                            <hr className="!h-1" />
                        </li>
                    )
                }
            </ul>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={timelineTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-3 p-5 mt-5">
                        <p className="font-bold text-lg">{timelineData[timelineTab].title} ({timelineData[timelineTab].value})</p>
                        {timelineData[timelineTab].content}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </>
}