'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '../../../lib/elements/button'
import { Badge } from '../../../lib/elements/badge'
import { Heading, SubheadingMedium } from '../../../lib/elements/heading'
import { Text } from '../../../lib/elements/text'
import { ThemeToggle } from '../../../lib/theme/ThemeToggle'

// Icons
function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 0 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}


function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15l.394 1.183a2.25 2.25 0 0 0 1.423 1.423L18.75 18.75l-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" />
    </svg>
  )
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-13.5A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25V18.75m9 0h1.5a2.25 2.25 0 0 0 2.25-2.25v-4.5a2.25 2.25 0 0 0-2.25-2.25h-1.5m-9 0H6.75a2.25 2.25 0 0 0-2.25 2.25v4.5A2.25 2.25 0 0 0 6.75 21H7.5" />
    </svg>
  )
}

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  )
}

function CurrencyDollarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.171-.879-3.07-.879-4.242 0L3 13.182m0-6.364C4.172 7.697 6.071 7.697 7.243 6.818 7.795 6.38 8.52 6.16 9.245 6.16c.725 0 1.45.22 2.003.659 1.171.879 3.07.879 4.242 0L21 10.818" />
    </svg>
  )
}

// Integration platform icons (simplified)

// Demo data types
interface Request {
  id: string
  supporterName: string
  supporterInitials: string
  supporterAvatar?: string
  offeringName: string
  offeringImage: string
  status: 'pending' | 'active' | 'completed'
  createdAt: string
  priority: 'normal' | 'high' | 'urgent'
  amount?: number
  groupName?: string
}

interface Milestone {
  id: string
  supporterName: string
  supporterInitials: string
  type: 'first_request' | 'tenth_request' | 'hundredth_request' | 'spend_milestone' | 'group_join'
  description: string
  timestamp: string
  amount?: number
  groupName?: string
}

interface SupporterGroup {
  id: string
  name: string
  image: string
  memberCount: number
  totalSpend: number
  totalRequests: number
  growthRate: number
}

interface OfferingPerformance {
  id: string
  name: string
  image: string
  requestsThisMonth: number
  revenueThisMonth: number
  avgRating: number
  growthRate: number
}

// Demo data
const DEMO_OPEN_REQUESTS: Request[] = [
  {
    id: '1',
    supporterName: 'Sarah Chen',
    supporterInitials: 'SC',
    supporterAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop',
    offeringName: 'Movie Reaction',
    offeringImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=32&h=32&fit=crop',
    status: 'pending',
    createdAt: '2 hours ago',
    priority: 'urgent',
    amount: 75,
    groupName: 'VIP Supporters',
  },
  {
    id: '2',
    supporterName: 'Marcus Johnson',
    supporterInitials: 'MJ',
    offeringName: 'Book Review',
    offeringImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=32&h=32&fit=crop',
    status: 'active',
    createdAt: '4 hours ago',
    priority: 'high',
    amount: 25,
  },
  {
    id: '3',
    supporterName: 'Emily Rodriguez',
    supporterInitials: 'ER',
    offeringName: 'Music Review',
    offeringImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=32&h=32&fit=crop',
    status: 'pending',
    createdAt: '6 hours ago',
    priority: 'normal',
    amount: 150,
    groupName: 'VIP Supporters',
  },
  {
    id: '4',
    supporterName: 'Alex Kim',
    supporterInitials: 'AK',
    offeringName: 'Game Review',
    offeringImage: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=32&h=32&fit=crop',
    status: 'active',
    createdAt: '8 hours ago',
    priority: 'normal',
    amount: 200,
  },
]

const DEMO_MILESTONES: Milestone[] = [
  {
    id: '1',
    supporterName: 'Chris Taylor',
    supporterInitials: 'CT',
    type: 'first_request',
    description: 'Made their first request!',
    timestamp: '1 hour ago',
  },
  {
    id: '2',
    supporterName: 'Sarah Chen',
    supporterInitials: 'SC',
    type: 'spend_milestone',
    description: 'Reached $1,000 total spent!',
    timestamp: '3 hours ago',
    amount: 1000,
  },
  {
    id: '3',
    supporterName: 'Jordan Smith',
    supporterInitials: 'JS',
    type: 'tenth_request',
    description: 'Completed their 10th request!',
    timestamp: '6 hours ago',
  },
  {
    id: '4',
    supporterName: 'Dana Lee',
    supporterInitials: 'DL',
    type: 'group_join',
    description: 'Joined Gold Tier group!',
    timestamp: '12 hours ago',
    groupName: 'Gold Tier',
  },
  {
    id: '5',
    supporterName: 'Frank Miller',
    supporterInitials: 'FM',
    type: 'hundredth_request',
    description: 'Completed their 100th request!',
    timestamp: '1 day ago',
  },
]

const DEMO_SUPPORTER_GROUPS: SupporterGroup[] = [
  {
    id: '1',
    name: 'VIP Supporters',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=48&h=48&fit=crop',
    memberCount: 12,
    totalSpend: 2450,
    totalRequests: 89,
    growthRate: 15.3,
  },
  {
    id: '2',
    name: 'Gold Tier',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=48&h=48&fit=crop',
    memberCount: 28,
    totalSpend: 3200,
    totalRequests: 156,
    growthRate: 8.7,
  },
  {
    id: '3',
    name: 'Early Adopters',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=48&h=48&fit=crop',
    memberCount: 45,
    totalSpend: 5670,
    totalRequests: 234,
    growthRate: 3.2,
  },
]

const DEMO_OFFERING_PERFORMANCE: OfferingPerformance[] = [
  {
    id: '1',
    name: 'Movie Reaction',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=48&h=48&fit=crop',
    requestsThisMonth: 45,
    revenueThisMonth: 3375,
    avgRating: 4.8,
    growthRate: 22.1,
  },
  {
    id: '2',
    name: 'Book Review',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=48&h=48&fit=crop',
    requestsThisMonth: 32,
    revenueThisMonth: 800,
    avgRating: 4.6,
    growthRate: 12.5,
  },
  {
    id: '3',
    name: 'Music Review',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=48&h=48&fit=crop',
    requestsThisMonth: 18,
    revenueThisMonth: 2700,
    avgRating: 4.9,
    growthRate: 8.3,
  },
  {
    id: '4',
    name: 'Game Review',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=48&h=48&fit=crop',
    requestsThisMonth: 12,
    revenueThisMonth: 2400,
    avgRating: 4.7,
    growthRate: -2.1,
  },
]

// Components
function SupporterAvatar({ initials, className }: { initials: string; className?: string }) {
  const colors = [
    'bg-pink-500',
    'bg-violet-500',
    'bg-blue-500',
    'bg-emerald-500',
    'bg-amber-500',
    'bg-rose-500',
  ]
  const colorIndex = initials.charCodeAt(0) % colors.length

  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center rounded-full text-white text-xs font-medium',
        colors[colorIndex],
        className || 'size-8',
      )}
    >
      {initials}
    </div>
  )
}

function RequestCard({ request }: { request: Request }) {
  const getStatusColor = (status: Request['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500'
      case 'active': return 'bg-blue-500'
      case 'completed': return 'bg-green-500'
    }
  }

  const getPriorityColor = (priority: Request['priority']) => {
    switch (priority) {
      case 'urgent': return 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20'
      case 'high': return 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20'
      case 'normal': return 'border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800'
    }
  }

  return (
    <div className={clsx('rounded-xl border p-4 transition-all hover:shadow-sm', getPriorityColor(request.priority))}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={request.supporterAvatar}
            alt={request.supporterName}
            className="size-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-zinc-900 dark:text-white">{request.supporterName}</div>
            <div className="text-sm text-zinc-500">{request.createdAt}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {request.groupName && (
            <Badge color="blue" className="text-xs">{request.groupName}</Badge>
          )}
          <div className={clsx('size-2 rounded-full', getStatusColor(request.status))} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={request.offeringImage}
          alt={request.offeringName}
          className="size-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="font-medium text-zinc-900 dark:text-white">{request.offeringName}</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            {request.status === 'pending' ? 'Awaiting your response' :
              request.status === 'active' ? 'In progress' : 'Completed'}
          </div>
        </div>
        {request.amount && (
          <div className="text-right">
            <div className="font-semibold text-zinc-900 dark:text-white">${request.amount}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function MilestoneCard({ milestone }: { milestone: Milestone }) {
  const getIcon = (type: Milestone['type']) => {
    switch (type) {
      case 'first_request': return <SparklesIcon className="size-5 text-yellow-500" />
      case 'tenth_request': return <TrophyIcon className="size-5 text-orange-500" />
      case 'hundredth_request': return <TrophyIcon className="size-5 text-purple-500" />
      case 'spend_milestone': return <CurrencyDollarIcon className="size-5 text-green-500" />
      case 'group_join': return <UsersIcon className="size-5 text-blue-500" />
    }
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
      <div className="p-2 rounded-lg bg-white dark:bg-zinc-700/50">
        {getIcon(milestone.type)}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <SupporterAvatar initials={milestone.supporterInitials} className="size-6" />
          <span className="font-medium text-zinc-900 dark:text-white">{milestone.supporterName}</span>
          {milestone.groupName && (
            <Badge color="blue" className="text-xs">{milestone.groupName}</Badge>
          )}
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-300">{milestone.description}</div>
        <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{milestone.timestamp}</div>
      </div>
      {milestone.amount && (
        <div className="text-right">
          <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
            ${milestone.amount.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  )
}

function GroupCard({ group }: { group: SupporterGroup }) {
  return (
    <Link
      href={`/app/creator/supporters/demo/group?id=${group.id}`}
      className="block p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-4 mb-3">
        <img
          src={group.image}
          alt={group.name}
          className="size-12 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="font-medium text-zinc-900 dark:text-white">{group.name}</div>
          <div className="text-sm text-zinc-500">{group.memberCount} members</div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm">
            <TrendingUpIcon className="size-4 text-green-500" />
            <span className="text-green-600 dark:text-green-400 font-medium">+{group.growthRate}%</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-zinc-500">Total Spend</div>
          <div className="font-semibold text-zinc-900 dark:text-white">${group.totalSpend.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-zinc-500">Requests</div>
          <div className="font-semibold text-zinc-900 dark:text-white">{group.totalRequests}</div>
        </div>
      </div>
    </Link>
  )
}

function OfferingPerformanceCard({ offering }: { offering: OfferingPerformance }) {
  const isPositive = offering.growthRate >= 0

  return (
    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={offering.image}
          alt={offering.name}
          className="size-12 rounded-xl object-cover"
        />
        <div className="flex-1">
          <div className="font-medium text-zinc-900 dark:text-white">{offering.name}</div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-zinc-500">★</span>
              <span className="text-zinc-700 dark:text-zinc-300">{offering.avgRating}</span>
            </div>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-500">{offering.requestsThisMonth} requests</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-sm">
            <TrendingUpIcon className={clsx('size-4', isPositive ? 'text-green-500' : 'text-red-500')} />
            <span className={clsx('font-medium', isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')}>
              {isPositive ? '+' : ''}{offering.growthRate}%
            </span>
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
        ${offering.revenueThisMonth.toLocaleString()}
      </div>
      <div className="text-sm text-zinc-500">Revenue this month</div>
    </div>
  )
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendLabel,
  color = 'blue',
}: {
  title: string
  value: string | number
  subtitle?: string
  icon: React.ComponentType<{ className?: string }>
  trend?: number
  trendLabel?: string
  color?: 'blue' | 'green' | 'orange' | 'red' | 'purple'
}) {
  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400',
    purple: 'text-purple-600 dark:text-purple-400',
  }

  return (
    <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-between mb-4">
        <div className={clsx('p-3 rounded-xl', {
          'bg-blue-50 dark:bg-blue-950/30': color === 'blue',
          'bg-green-50 dark:bg-green-950/30': color === 'green',
          'bg-orange-50 dark:bg-orange-950/30': color === 'orange',
          'bg-red-50 dark:bg-red-950/30': color === 'red',
          'bg-purple-50 dark:bg-purple-950/30': color === 'purple',
        })}>
          <Icon className={clsx('size-6', colorClasses[color])} />
        </div>
        {trend !== undefined && (
          <div className="flex items-center gap-1 text-sm">
            <TrendingUpIcon className={clsx('size-4', trend >= 0 ? 'text-green-500' : 'text-red-500')} />
            <span className={clsx('font-medium', trend >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400')}>
              {trend >= 0 ? '+' : ''}{trend}%
            </span>
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">{title}</div>
      {subtitle && <div className="text-xs text-zinc-500">{subtitle}</div>}
      {trendLabel && <div className="text-xs text-zinc-400 mt-1">{trendLabel}</div>}
    </div>
  )
}

// Sparse chart component - better for low-volume data
function SparseChart({
  data,
  color,
  showZeroBars = false,
}: {
  data: number[]
  color: string
  showZeroBars?: boolean
}) {
  const max = Math.max(...data.filter(v => v > 0)) || 1 // Only consider non-zero values for scaling
  const height = 60
  const hasZeros = data.some(v => v === 0)

  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1 h-16">
        {data.map((value, i) => {
          const isZero = value === 0

          // For daily view with zeros, show very thin bars or gaps
          if (isZero && !showZeroBars) {
            return (
              <div
                key={i}
                className="w-2 flex items-end"
                style={{ height: `${height}px` }}
              >
                <div className="w-full border-b border-zinc-200 dark:border-zinc-700 border-dashed h-0" />
              </div>
            )
          }

          // For non-zero values or when showing zero bars
          return (
            <div
              key={i}
              className={clsx(
                'w-2 rounded-sm transition-all',
                isZero ? 'bg-zinc-200 dark:bg-zinc-700' : color,
                isZero && 'opacity-30',
              )}
              style={{
                height: `${isZero ? 2 : (value / max) * height}px`,
                minHeight: isZero ? '2px' : '1px',
              }}
              title={isZero ? 'No activity' : `${value}`}
            />
          )
        })}
      </div>

      {/* Activity indicators */}
      {hasZeros && (
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1">
            <div className={clsx('w-2 h-2 rounded-sm', color)} />
            <span>Activity</span>
          </div>
          {data.some(v => v === 0) && (
            <div className="flex items-center gap-1">
              <div className="w-2 border-b border-zinc-300 dark:border-zinc-600 border-dashed" />
              <span>No activity</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}


export default function DashboardDemoPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d')
  const [chartType, setChartType] = useState<'daily' | 'weekly' | 'cumulative'>('weekly')

  // Mock sparse analytics data - more realistic for 2-20 requests/month
  const dailyRequests = [0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  const dailyRevenue = [0, 0, 0, 45, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 225, 0, 0, 0, 0, 25, 0, 0, 0, 0]

  // Transform data based on chart type
  const getChartData = () => {
    switch (chartType) {
      case 'daily':
        return {
          requests: dailyRequests,
          revenue: dailyRevenue,
          labels: dailyRequests.map((_, i) => `Day ${i + 1}`),
        }
      case 'weekly': {
        // Group by weeks (7 days)
        const weeklyRequests: number[] = []
        const weeklyRevenue: number[] = []
        for (let i = 0; i < dailyRequests.length; i += 7) {
          const weekRequests = dailyRequests.slice(i, i + 7).reduce((a, b) => a + b, 0)
          const weekRevenue = dailyRevenue.slice(i, i + 7).reduce((a, b) => a + b, 0)
          weeklyRequests.push(weekRequests)
          weeklyRevenue.push(weekRevenue)
        }
        return {
          requests: weeklyRequests,
          revenue: weeklyRevenue,
          labels: weeklyRequests.map((_, i) => `Week ${i + 1}`),
        }
      }
      case 'cumulative': {
        const cumulativeRequests: number[] = []
        const cumulativeRevenue: number[] = []
        let reqTotal = 0
        let revTotal = 0
        for (let i = 0; i < dailyRequests.length; i++) {
          reqTotal += dailyRequests[i]
          revTotal += dailyRevenue[i]
          cumulativeRequests.push(reqTotal)
          cumulativeRevenue.push(revTotal)
        }
        return {
          requests: cumulativeRequests,
          revenue: cumulativeRevenue,
          labels: cumulativeRequests.map((_, i) => `Day ${i + 1}`),
        }
      }
      default:
        return { requests: [], revenue: [], labels: [] }
    }
  }

  const chartData = getChartData()
  const totalRevenue = dailyRevenue.reduce((a, b) => a + b, 0)
  const totalRequests = dailyRequests.reduce((a, b) => a + b, 0)
  const avgRevenuePerRequest = totalRequests > 0 ? Math.round(totalRevenue / totalRequests) : 0

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Theme Toggle - Fixed position top-right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Badge color="blue">Dashboard Demo v2.0</Badge>
            <Badge color="amber">New Analytics</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Heading>Creator Dashboard</Heading>
              <Text className="mt-1">Welcome back! Here's what's happening with your Reactr account.</Text>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as typeof selectedPeriod)}
                className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <Button>
                <ChartBarIcon className="size-4" />
                View Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            subtitle="Last 30 days"
            icon={CurrencyDollarIcon}
            trend={24.5}
            trendLabel="vs last period"
            color="green"
          />
          <StatCard
            title="Total Requests"
            value={totalRequests}
            subtitle="Completed this month"
            icon={CheckCircleIcon}
            trend={18.2}
            trendLabel="vs last period"
            color="blue"
          />
          <StatCard
            title="Active Supporters"
            value="127"
            subtitle="Across all groups"
            icon={UsersIcon}
            trend={12.3}
            trendLabel="new this month"
            color="purple"
          />
          <StatCard
            title="Open Requests"
            value={DEMO_OPEN_REQUESTS.filter(r => r.status !== 'completed').length}
            subtitle="Require attention"
            icon={ClockIcon}
            color="orange"
          />
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          {/* Chart Controls */}
          <div className="flex items-center justify-between">
            <div>
              <SubheadingMedium>Analytics Overview</SubheadingMedium>
              <Text className="text-sm text-zinc-500">View your data in different ways</Text>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
                {[
                  { key: 'daily', label: 'Daily' },
                  { key: 'weekly', label: 'Weekly' },
                  { key: 'cumulative', label: 'Cumulative' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setChartType(key as typeof chartType)}
                    className={clsx(
                      'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                      chartType === key
                        ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as typeof selectedPeriod)}
                className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <SubheadingMedium>
                    {chartType === 'cumulative' ? 'Total Requests' : 'Request Volume'}
                  </SubheadingMedium>
                  <Text className="text-sm text-zinc-500">
                    {chartType === 'daily' && 'Daily requests over time'}
                    {chartType === 'weekly' && 'Weekly requests (better for sparse data)'}
                    {chartType === 'cumulative' && 'Running total of all requests'}
                  </Text>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">{totalRequests}</div>
                  <div className="text-sm text-zinc-500">
                    {chartType === 'cumulative' ? 'total requests' : 'requests in period'}
                  </div>
                </div>
              </div>
              <SparseChart data={chartData.requests} color="bg-blue-500" showZeroBars={chartType === 'daily'} />
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-zinc-500">
                  {chartType === 'weekly' ? '4 weeks ago' : '30 days ago'}
                </span>
                <span className="text-zinc-500">Today</span>
              </div>
              {chartType === 'daily' && (
                <div className="mt-2 text-xs text-zinc-400">
                  Days with no requests are shown as gaps (more realistic for sparse data)
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <SubheadingMedium>
                    {chartType === 'cumulative' ? 'Total Revenue' : 'Revenue Trend'}
                  </SubheadingMedium>
                  <Text className="text-sm text-zinc-500">
                    {chartType === 'daily' && 'Daily earnings over time'}
                    {chartType === 'weekly' && 'Weekly earnings (smoother trends)'}
                    {chartType === 'cumulative' && 'Running total of all earnings'}
                  </Text>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${totalRevenue.toLocaleString()}</div>
                  <div className="text-sm text-zinc-500">
                    avg ${avgRevenuePerRequest}/request
                  </div>
                </div>
              </div>
              <SparseChart data={chartData.revenue} color="bg-emerald-500" showZeroBars={chartType === 'daily'} />
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-zinc-500">
                  {chartType === 'weekly' ? '4 weeks ago' : '30 days ago'}
                </span>
                <span className="text-zinc-500">Today</span>
              </div>
              {chartType === 'daily' && (
                <div className="mt-2 text-xs text-zinc-400">
                  Shows actual earning days only (gaps represent no revenue)
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Open Requests */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <SubheadingMedium>Open Requests</SubheadingMedium>
                <Link href="/app/creator/requests">
                  <Button plain>
                    View All
                    <svg className="size-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </Link>
              </div>
              <div className="space-y-3">
                {DEMO_OPEN_REQUESTS.map((request) => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </div>
            </div>

            {/* Supporter Groups */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <SubheadingMedium>Supporter Groups</SubheadingMedium>
                <Link href="/app/creator/supporters">
                  <Button plain>
                    Manage Groups
                    <svg className="size-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {DEMO_SUPPORTER_GROUPS.map((group) => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity & Performance */}
          <div className="space-y-6">
            {/* Recent Milestones */}
            <div>
              <SubheadingMedium className="mb-4">Recent Milestones</SubheadingMedium>
              <div className="space-y-3">
                {DEMO_MILESTONES.map((milestone) => (
                  <MilestoneCard key={milestone.id} milestone={milestone} />
                ))}
              </div>
            </div>

            {/* Top Performing Offerings */}
            <div>
              <SubheadingMedium className="mb-4">Top Offerings</SubheadingMedium>
              <div className="space-y-3">
                {DEMO_OFFERING_PERFORMANCE.slice(0, 3).map((offering) => (
                  <OfferingPerformanceCard key={offering.id} offering={offering} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-zinc-200 dark:border-zinc-800">
          <Text className="text-zinc-500">
            This is a demo dashboard showcasing new analytics features powered by summary tables.
            Real data would be pulled from your Convex database.
          </Text>
        </div>
      </div>
    </div>
  )
}
