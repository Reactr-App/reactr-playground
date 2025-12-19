import React, { useState, useRef } from 'react'

function Accordion({
  children,
  title,
  showTopBorder = true,
}: {
  children: React.ReactNode
  title: string
  showTopBorder?: boolean
}) {
  const [accordionOpen, setAccordionOpen] = useState(false)
  const accordion = useRef<HTMLDivElement | null>(null)

  return (
    <li>
      <button
        className={`flex w-full items-center py-5 text-left text-lg font-medium ${showTopBorder && 'border-t border-gray-200'} `}
        onClick={(e) => {
          e.preventDefault()
          setAccordionOpen(!accordionOpen)
        }}
        aria-expanded={accordionOpen}
      >
        <svg
          className="-ml-12 mr-8 h-4 w-4 shrink-0 fill-current text-blue-500"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
          />
        </svg>
        <span className="text-base/6 font-semibold text-zinc-900 dark:text-white">
          {title}
        </span>
      </button>
      <div
        ref={accordion}
        className="overflow-hidden text-white transition-all duration-300 ease-in-out"
        style={
          accordionOpen
            ? {
              maxHeight: accordion.current?.scrollHeight || 0,
              opacity: 1,
            }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="mb-6 flex flex-col gap-3">{children}</div>
      </div>
    </li>
  )
}

export default Accordion
