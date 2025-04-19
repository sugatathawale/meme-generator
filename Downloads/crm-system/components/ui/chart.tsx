"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
}

export function ChartContainer({ children, config, className, ...props }: ChartContainerProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="flex items-center gap-4">
        {Object.entries(config).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: value.color }} />
            <span className="text-sm text-gray-400">{value.label}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  )
}

interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: any[]
  label?: string
  formatter?: (value: number) => string
  labelFormatter?: (label: string) => string
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  formatter,
  labelFormatter,
  className,
  ...props
}: ChartTooltipContentProps) {
  const formatValue = React.useCallback(
    (value: number) => {
      if (formatter) {
        return formatter(value)
      }
      return value.toLocaleString()
    },
    [formatter],
  )

  const formatLabel = React.useCallback(
    (label: string) => {
      if (labelFormatter) {
        return labelFormatter(label)
      }
      return label
    },
    [labelFormatter],
  )

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className={cn("rounded-lg border border-gray-800 bg-gray-900 p-2 shadow-md", className)} {...props}>
      <div className="grid gap-0.5">
        <p className="text-xs font-medium text-gray-300">{formatLabel(label || "")}</p>
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs font-medium text-gray-400">{item.name}:</span>
            </div>
            <span className="text-xs font-medium text-white">{formatValue(item.value)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ChartTooltipWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  cursor?: boolean
  content?: React.ReactNode
  offset?: number
  position?: { x: number; y: number }
  active?: boolean
  payload?: any[]
  label?: string
}

export function ChartTooltip({ children, ...props }: ChartTooltipWrapperProps) {
  return <div {...props}>{children}</div>
}
