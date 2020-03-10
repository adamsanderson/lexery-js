import React from 'react'
import { css } from 'emotion'

const style = css(`
  fill: none;
  stroke: currentcolor;
  font-variant-numeric: tabular-nums;
`)

// Copied from https://github.com/system-ui/theme-ui/blob/master/packages/components/src/Donut.js
const DonutTimer = React.forwardRef(
  (
    {
      size = '1.2em',
      strokeWidth = 2,
      timer,
      ...props
    },
    ref
  ) => {

    const radius = 16 - parseInt(strokeWidth,0)
    const circumference = 2 * radius * Math.PI
    const offset = circumference - (timer.remaining / timer.duration) * circumference
    const title = Math.floor(timer.remaining / 1000)

    return (
      <svg
        ref={ref}
        viewBox="0 0 32 32"
        width={size}
        height={size}
        strokeWidth={strokeWidth}
        role="timer" 
        aria-live="polite" 
        aria-atomic="true"
        className={style}

        {...props}
      >
        {title && <title>{title}</title>}
          <text 
            x="50%" 
            y="53%" 
            dominantBaseline="middle" 
            textAnchor="middle"
            stroke="none"
            fill="currentcolor"
            opacity={timer.remaining > 0 ? 1 : 1 / 8}
          >
            {title}
          </text> 
        <circle cx={16} cy={16} r={radius} opacity={1 / 8} />
        <circle
          cx={16}
          cy={16}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 16 16)"
        />
      </svg>
    )
  }
)

export default DonutTimer