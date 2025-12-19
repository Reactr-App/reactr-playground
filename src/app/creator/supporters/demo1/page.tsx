'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '../../../lib/elements/button'
import { Badge } from '../../../lib/elements/badge'
import { Input } from '../../../lib/elements/input'
import { Select } from '../../../lib/elements/select'
import { Heading, Subheading, SubheadingMedium } from '../../../lib/elements/heading'
import { Text, Strong } from '../../../lib/elements/text'
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogActions,
} from '../../../lib/elements/dialog'

// Icons
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-4.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
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

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

// Integration platform icons
function PatreonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function KoFiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
    </svg>
  )
}

// Helper to get integration icon and color
function getIntegrationIcon(type: IntegrationType) {
  const icons = {
    patreon: { icon: PatreonIcon, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    youtube: { icon: YouTubeIcon, color: 'text-red-500', bg: 'bg-red-500/10' },
    twitch: { icon: TwitchIcon, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    discord: { icon: DiscordIcon, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
    'ko-fi': { icon: KoFiIcon, color: 'text-sky-500', bg: 'bg-sky-500/10' },
  }
  return icons[type]
}

// Demo data types
interface GlobalRules {
  openRequestsPerUser: number
  totalRequestsPerMonth: number
  timeRangeMonths: number
}

// Generic integration type to support multiple platforms
type IntegrationType = 'patreon' | 'youtube' | 'twitch' | 'discord' | 'ko-fi'

interface Integration {
  type: IntegrationType
  tierName: string
  tierValue?: string // e.g., "$25+" or "Member" or "Subscriber"
}

interface SupporterGroup {
  id: string
  name: string
  image: string
  members: { name: string; avatar?: string; initials: string; integration?: Integration; isNew?: boolean; requestCount?: number; totalSpent?: number }[]
  integrations: Integration[] // Linked platform tiers
  totalRequests: number // Total requests from this group
  totalSpend: number // Total amount spent by this group
  customGlobalRules?: GlobalRules
  offeringOverrides: {
    offeringId: string
    offeringName: string
    openRequestsPerUser?: number
    totalRequestsPerMonth?: number
    timeRangeMonths?: number
    customPrice?: number // Custom price for this group (undefined = use default)
  }[]
}

// Demo data
const DEMO_GLOBAL_RULES: GlobalRules = {
  openRequestsPerUser: 2,
  totalRequestsPerMonth: 5,
  timeRangeMonths: 1,
}

const DEMO_SUPPORTER_GROUPS: SupporterGroup[] = [
  {
    id: '1',
    name: 'VIP Supporters',
    image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=100&h=100&fit=crop',
    members: [
      { name: 'Sarah Chen', initials: 'SC', integration: { type: 'patreon', tierName: 'Champion', tierValue: '$25+' }, isNew: false, requestCount: 18, totalSpent: 420 },
      { name: 'Marcus Johnson', initials: 'MJ', integration: { type: 'youtube', tierName: 'Member' }, isNew: true, requestCount: 3, totalSpent: 72 },
      { name: 'Emily Rodriguez', initials: 'ER', integration: { type: 'patreon', tierName: 'Champion', tierValue: '$25+' }, isNew: false, requestCount: 26, totalSpent: 400 },
    ],
    integrations: [
      { type: 'patreon', tierName: 'Champion', tierValue: '$25+' },
      { type: 'youtube', tierName: 'Member' },
    ],
    totalRequests: 47,
    totalSpend: 892,
    customGlobalRules: {
      openRequestsPerUser: 5,
      totalRequestsPerMonth: 15,
      timeRangeMonths: 1,
    },
    offeringOverrides: [
      {
        offeringId: '1',
        offeringName: 'Movie Reaction',
        openRequestsPerUser: 3,
        totalRequestsPerMonth: 8,
        timeRangeMonths: 1,
        customPrice: 50, // Discounted from $75
      },
    ],
  },
  {
    id: '2',
    name: 'Gold Tier',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=100&h=100&fit=crop',
    members: [
      { name: 'Alex Kim', initials: 'AK', integration: { type: 'patreon', tierName: 'Gold', tierValue: '$10' }, isNew: false, requestCount: 15, totalSpent: 220 },
      { name: 'Jordan Smith', initials: 'JS', integration: { type: 'twitch', tierName: 'Subscriber', tierValue: 'Tier 2' }, isNew: true, requestCount: 8, totalSpent: 120 },
    ],
    integrations: [
      { type: 'patreon', tierName: 'Gold', tierValue: '$10' },
      { type: 'twitch', tierName: 'Subscriber', tierValue: 'Tier 2' },
    ],
    totalRequests: 23,
    totalSpend: 340,
    customGlobalRules: {
      openRequestsPerUser: 3,
      totalRequestsPerMonth: 10,
      timeRangeMonths: 1,
    },
    offeringOverrides: [],
  },
  {
    id: '3',
    name: 'Early Adopters',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&h=100&fit=crop',
    members: [
      { name: 'Chris Taylor', initials: 'CT', isNew: false, requestCount: 22, totalSpent: 315 },
      { name: 'Dana Lee', initials: 'DL', isNew: false, requestCount: 19, totalSpent: 280 },
      { name: 'Frank Miller', initials: 'FM', isNew: true, requestCount: 4, totalSpent: 60 },
      { name: 'Grace Park', initials: 'GP', isNew: false, requestCount: 24, totalSpent: 340 },
      { name: 'Henry Wilson', initials: 'HW', isNew: false, requestCount: 20, totalSpent: 250 },
    ],
    integrations: [],
    totalRequests: 89,
    totalSpend: 1245,
    offeringOverrides: [],
  },
]

const DEMO_OFFERINGS = [
  { id: '1', name: 'Movie Reaction', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop', price: 75 },
  { id: '2', name: 'Book Review', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&h=100&fit=crop', price: 25 },
  { id: '3', name: 'Music Review', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=100&h=100&fit=crop', price: 150 },
  { id: '4', name: 'Game Review', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=100&h=100&fit=crop', price: 200 },
]

// Supporters not in any group (using global rules)
// isNew = first request was in last 30 days
const DEMO_UNGROUPED_SUPPORTERS = [
  { id: '1', name: 'Riley Thompson', initials: 'RT', email: 'riley@email.com', orderCount: 3, totalSpent: 75, isNew: false },
  { id: '2', name: 'Morgan Davis', initials: 'MD', email: 'morgan@email.com', orderCount: 1, totalSpent: 25, isNew: true },
  { id: '3', name: 'Casey Williams', initials: 'CW', email: 'casey@email.com', orderCount: 5, totalSpent: 120, isNew: false },
  { id: '4', name: 'Jamie Brown', initials: 'JB', email: 'jamie@email.com', orderCount: 2, totalSpent: 50, isNew: true },
  { id: '5', name: 'Taylor Martinez', initials: 'TM', email: 'taylor@email.com', orderCount: 1, totalSpent: 30, isNew: true },
  { id: '6', name: 'Quinn Anderson', initials: 'QA', email: 'quinn@email.com', orderCount: 4, totalSpent: 95, isNew: false },
  { id: '7', name: 'Avery Johnson', initials: 'AJ', email: 'avery@email.com', orderCount: 2, totalSpent: 45, isNew: true },
]

// String constants to satisfy linter
const STATS_LABELS = {
  totalSupporters: 'Total Supporters',
  groups: 'Groups',
  newLast30Days: 'New (30 days)',
  linkedMembers: 'Linked Members',
} as const

const SEARCH_PLACEHOLDER = 'Search by name, email, or group...'

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

function GroupCard({
  group,
  isExpanded,
  onToggleExpand,
}: {
  group: SupporterGroup
  isExpanded: boolean
  onToggleExpand: () => void
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-all duration-200 bg-white dark:bg-zinc-900">
      {/* Header */}
      <button
        onClick={onToggleExpand}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <img
            src={group.image}
            alt={group.name}
            className="size-12 rounded-xl object-cover shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700"
          />
          <div>
            <Link
              href={`/app/creator/supporters/demo/group?id=${group.id}`}
              onClick={(e) => e.stopPropagation()}
              className="font-semibold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {group.name}
            </Link>
            <div className="flex items-center gap-3 mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{group.members.length} members</span>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <span>{group.totalRequests} requests</span>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <span className="text-emerald-600 dark:text-emerald-400">${group.totalSpend.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {group.customGlobalRules && (
            <Badge color="blue">Custom Rules</Badge>
          )}
          {group.offeringOverrides.length > 0 && (
            <Badge color="violet">{group.offeringOverrides.length} Override{group.offeringOverrides.length > 1 ? 's' : ''}</Badge>
          )}
          <ChevronDownIcon className={clsx('size-5 text-zinc-400 transition-transform', isExpanded && 'rotate-180')} />
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-zinc-200 dark:border-zinc-700/50 bg-white/50 dark:bg-zinc-900/50">
          {/* Synced Integrations */}
          {group.integrations.length > 0 && (
            <div className="flex items-center gap-4 px-5 py-3 border-b border-zinc-200 dark:border-zinc-700/50 bg-zinc-50/50 dark:bg-zinc-800/30">
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 shrink-0 ml-6"></span>
              <div className="flex flex-wrap items-center gap-2">
                {group.integrations.map((integration, i) => {
                  const integrationInfo = getIntegrationIcon(integration.type)
                  const IntegrationIcon = integrationInfo?.icon
                  return IntegrationIcon ? (
                    <div
                      key={i}
                      className={clsx(
                        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium',
                        integrationInfo.color,
                      )}
                    >
                      <IntegrationIcon className="size-3.5" />
                      <span>{integration.tierName}</span>
                    </div>
                  ) : null
                })}
              </div>
            </div>
          )}

          {/* Members Preview */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-700/50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Members</span>
                <Badge color="zinc">{group.members.length}</Badge>
              </div>
              <Button plain className="text-sm">
                <PlusIcon className="size-4" />
                Add Member
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {group.members.slice(0, 6).map((member, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-full pl-1 pr-3 py-1"
                >
                  <SupporterAvatar initials={member.initials} className="size-6" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{member.name}</span>
                </div>
              ))}
              {group.members.length > 6 && (
                <Link
                  href={`/app/creator/supporters/demo/group?id=${group.id}`}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  +{group.members.length - 6} more
                </Link>
              )}
            </div>
          </div>

          {/* Custom Global Rules */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GlobeIcon className="size-4 text-blue-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Custom Global Rules
                </span>
              </div>
              {!group.customGlobalRules && (
                <Badge color="zinc">Using Defaults</Badge>
              )}
            </div>
            {group.customGlobalRules ? (
              <div className="grid grid-cols-2 gap-3">
                {/* Concurrent Requests */}
                <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="size-4 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Concurrent Requests</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{group.customGlobalRules.openRequestsPerUser}</div>
                  <div className="text-xs text-blue-500 dark:text-blue-400 mt-1">open requests per supporter at a time</div>
                </div>

                {/* Total Limit + Reset Period Combined */}
                <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/30 p-4 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="size-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Total Limit</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{group.customGlobalRules.totalRequestsPerMonth}</span>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">
                      {group.customGlobalRules.timeRangeMonths === 0 
                        ? 'lifetime' 
                        : group.customGlobalRules.timeRangeMonths === 1 
                          ? '/ month'
                          : `/ ${group.customGlobalRules.timeRangeMonths} months`
                      }
                    </span>
                  </div>
                  <div className="text-xs text-emerald-500 dark:text-emerald-400 mt-1">
                    {group.customGlobalRules.timeRangeMonths === 0 
                      ? 'total requests ever (no reset)'
                      : `resets every ${group.customGlobalRules.timeRangeMonths === 1 ? 'month' : `${group.customGlobalRules.timeRangeMonths} months`}`
                    }
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4 border border-zinc-200 dark:border-zinc-700 text-center">
                <Text className="text-sm text-zinc-500">This group uses your default global rules.</Text>
                <Button plain className="mt-2 text-sm">
                  <PlusIcon className="size-4" />
                  Set Custom Rules
                </Button>
              </div>
            )}
          </div>

          {/* Offering Overrides */}
          <div className="p-5 border-b border-zinc-200 dark:border-zinc-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <StarIcon className="size-4 text-violet-500" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Offering Overrides
                </span>
                {group.offeringOverrides.length > 0 && (
                  <Badge color="violet">{group.offeringOverrides.length}</Badge>
                )}
              </div>
              <Button plain className="text-sm">
                <PlusIcon className="size-4" />
                Add Override
              </Button>
            </div>
            {group.offeringOverrides.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-3">
                {group.offeringOverrides.map((override) => {
                  const offering = DEMO_OFFERINGS.find(o => o.id === override.offeringId)
                  return (
                    <div key={override.offeringId} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800/50">
                      {offering?.image && (
                        <img
                          src={offering.image}
                          alt={override.offeringName}
                          className="size-12 rounded-lg object-cover shadow-sm"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-zinc-900 dark:text-white text-sm truncate">{override.offeringName}</span>
                          {override.customPrice !== undefined && offering?.price && (
                            <div className="flex items-center gap-1 shrink-0">
                              <span className="text-xs line-through text-zinc-400">${offering.price}</span>
                              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">${override.customPrice}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 text-xs">
                          {override.openRequestsPerUser !== undefined && (
                            <div className="flex items-center gap-1">
                              <span className="text-blue-600 dark:text-blue-400 font-medium">{override.openRequestsPerUser}</span>
                              <span className="text-zinc-400">open</span>
                            </div>
                          )}
                          {override.openRequestsPerUser !== undefined && override.totalRequestsPerMonth !== undefined && (
                            <span className="text-zinc-300 dark:text-zinc-600">•</span>
                          )}
                          {override.totalRequestsPerMonth !== undefined && (
                            <div className="flex items-center gap-1">
                              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                {override.totalRequestsPerMonth === 0 ? '∞' : override.totalRequestsPerMonth}
                              </span>
                              <span className="text-zinc-400">
                                {override.timeRangeMonths === 0 || override.timeRangeMonths === undefined
                                  ? 'total'
                                  : override.timeRangeMonths === 1
                                    ? 'total / month'
                                    : `total / ${override.timeRangeMonths}mo`
                                }
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <Button plain className="shrink-0">
                        <PencilIcon className="size-3.5 text-zinc-400" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4 border border-zinc-200 dark:border-zinc-700 text-center">
                <Text className="text-sm text-zinc-500">No offering-specific overrides. All offerings use the group rules above.</Text>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-5 flex justify-end gap-3">
            <Link href={`/app/creator/supporters/demo/group?id=${group.id}`}>
              <Button plain>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                View Group
              </Button>
            </Link>
            <Link href={`/app/creator/supporters/demo/group/edit?id=${group.id}&step=basics`}>
              <Button>
                <PencilIcon className="size-4" />
                Edit Group
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function GlobalRulesSection({
  rules,
  onEdit,
}: {
  rules: GlobalRules
  onEdit: () => void
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 overflow-hidden">
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-700/50">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-linear-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25">
              <GlobeIcon className="size-6" />
            </div>
            <div>
              <SubheadingMedium>Global Rules</SubheadingMedium>
              <Text className="mt-1">Default limits applied to all supporters</Text>
            </div>
          </div>
          <Button outline onClick={onEdit}>
            <PencilIcon className="size-4" />
            Edit
          </Button>
        </div>
      </div>
      
      <div className="p-6 grid sm:grid-cols-2 gap-4">
        {/* Concurrent Requests */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Open Requests Per User</div>
          <div className="text-3xl font-bold text-zinc-900 dark:text-white">{rules.openRequestsPerUser}</div>
          <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            Requests in progress (pending or active). Once completed or rejected, the slot opens up.
          </div>
        </div>

        {/* Total Requests with Reset Period */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Total Request Limit</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-zinc-900 dark:text-white">{rules.totalRequestsPerMonth}</span>
            <span className="text-lg text-zinc-500 dark:text-zinc-400">
              / {rules.timeRangeMonths === 0 ? 'lifetime' : `${rules.timeRangeMonths} month${rules.timeRangeMonths > 1 ? 's' : ''}`}
            </span>
          </div>
          <div className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            {rules.timeRangeMonths === 0 
              ? 'Completed requests only — rejected requests don\'t count'
              : `Resets every ${rules.timeRangeMonths} month${rules.timeRangeMonths > 1 ? 's' : ''}. Rejected requests don't count.`
            }
          </div>
        </div>
      </div>
    </div>
  )
}

// Edit Global Rules Dialog
function EditGlobalRulesDialog({
  rules,
  isOpen,
  onClose,
}: {
  rules: GlobalRules
  isOpen: boolean
  onClose: () => void
}) {
  const [activeTab, setActiveTab] = useState<'concurrent' | 'total'>('concurrent')
  const [openRequests, setOpenRequests] = useState(rules.openRequestsPerUser)
  const [totalRequests, setTotalRequests] = useState(rules.totalRequestsPerMonth)
  const [timeRange, setTimeRange] = useState(rules.timeRangeMonths)

  return (
    <Dialog open={isOpen} onClose={onClose} size="md">
      <DialogTitle>Edit Global Rules</DialogTitle>
      <DialogDescription>
        Default limits for all supporters. Can be overridden by groups or offerings.
      </DialogDescription>

      <DialogBody>
        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('concurrent')}
            className={clsx(
              'flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all',
              activeTab === 'concurrent'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white',
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" />
              </svg>
              Concurrent
            </div>
          </button>
          <button
            onClick={() => setActiveTab('total')}
            className={clsx(
              'flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all',
              activeTab === 'total'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white',
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              Total Limit
            </div>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'concurrent' ? (
          <div className="space-y-4">
            {/* Header with icon */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <svg className="size-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-blue-900 dark:text-blue-100">Concurrent Requests</div>
                <div className="text-sm text-blue-700 dark:text-blue-300 mt-0.5">
                  How many requests can be in progress at once
                </div>
              </div>
            </div>

            {/* The input */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Max open requests per supporter
              </label>
              <Input
                type="number"
                value={openRequests}
                onChange={(e) => setOpenRequests(parseInt(e.target.value) || 0)}
                className="text-center text-lg font-semibold"
              />
            </div>

            {/* Explanation */}
            <div className="text-sm text-zinc-500 dark:text-zinc-400 space-y-2">
              <p>
                A request is <Strong>"open"</Strong> while it's pending or being worked on.
              </p>
              <p>
                Once you <Strong>complete</Strong> or <Strong>reject</Strong> a request, the slot frees up and they can submit another.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Header with icon */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <svg className="size-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-emerald-900 dark:text-emerald-100">Total Request Limit</div>
                <div className="text-sm text-emerald-700 dark:text-emerald-300 mt-0.5">
                  Maximum completed requests over time
                </div>
              </div>
            </div>

            {/* The inputs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Max requests
                </label>
                <Input
                  type="number"
                  value={totalRequests}
                  onChange={(e) => setTotalRequests(parseInt(e.target.value) || 0)}
                  className="text-center text-lg font-semibold"
                />
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Reset period
                </label>
                <Select
                  value={timeRange.toString()}
                  onChange={(e) => setTimeRange(parseInt(e.target.value))}
                >
                  <option value="0">Never (lifetime)</option>
                  <option value="1">Every month</option>
                  <option value="2">Every 2 months</option>
                  <option value="3">Every 3 months</option>
                  <option value="6">Every 6 months</option>
                  <option value="12">Every year</option>
                </Select>
              </div>
            </div>

            {/* Dynamic explanation based on selection */}
            <div className={clsx(
              'rounded-xl p-4 text-sm',
              timeRange === 0 
                ? 'bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800'
                : 'bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50',
            )}>
              {timeRange === 0 ? (
                <div className="text-amber-800 dark:text-amber-200">
                  <Strong>Lifetime limit:</Strong> Each supporter can have <Strong>{totalRequests}</Strong> completed requests total, ever. Use this for limited offers.
                </div>
              ) : (
                <div className="text-zinc-600 dark:text-zinc-300">
                  Each supporter can have up to <Strong>{totalRequests}</Strong> completed requests per <Strong>{timeRange === 1 ? 'month' : `${timeRange} months`}</Strong>, then their count resets.
                </div>
              )}
            </div>

            {/* Note about rejected requests */}
            <div className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <svg className="size-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <span>Rejected requests don't count against this limit — only completed ones do.</span>
            </div>
          </div>
        )}
      </DialogBody>

      <DialogActions>
        <Button plain onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

// Stats Card Component
function StatsCard({ label, value, subtext, icon: Icon }: { 
  label: string
  value: string | number
  subtext?: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50">
      <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-700/50">
        <Icon className="size-5 text-zinc-600 dark:text-zinc-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
        {subtext && <div className="text-xs text-zinc-400 dark:text-zinc-500">{subtext}</div>}
      </div>
    </div>
  )
}

// Tab type
type PageTab = 'supporters' | 'groups' | 'limits'

// Main Page Component
type SortField = 'name' | 'requests' | 'spent' | 'group'
type SortDirection = 'asc' | 'desc'

// Unified supporter type for the list
interface UnifiedSupporter {
  id: string
  name: string
  initials: string
  email?: string
  isNew?: boolean
  requestCount: number
  totalSpent: number
  groupId?: string
  groupName?: string
  integration?: Integration
}

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState<PageTab>('supporters')
  const [globalRules] = useState(DEMO_GLOBAL_RULES)
  const [supporterGroups] = useState(DEMO_SUPPORTER_GROUPS)
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>('1')
  const [isEditingGlobalRules, setIsEditingGlobalRules] = useState(false)

  // Search, sort, and pagination state
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [filterGroup, setFilterGroup] = useState<string>('all')
  const itemsPerPage = 10

  // Flatten all supporters into a unified list
  const allSupporters = useMemo<UnifiedSupporter[]>(() => {
    const supporters: UnifiedSupporter[] = []
    
    // Add grouped supporters
    supporterGroups.forEach((group) => {
      group.members.forEach((member, i) => {
        supporters.push({
          id: `${group.id}-${i}`,
          name: member.name,
          initials: member.initials,
          isNew: member.isNew,
          requestCount: member.requestCount || 0,
          totalSpent: member.totalSpent || 0,
          groupId: group.id,
          groupName: group.name,
          integration: member.integration,
        })
      })
    })
    
    // Add ungrouped supporters
    DEMO_UNGROUPED_SUPPORTERS.forEach((supporter) => {
      supporters.push({
        id: `ungrouped-${supporter.id}`,
        name: supporter.name,
        initials: supporter.initials,
        email: supporter.email,
        isNew: supporter.isNew,
        requestCount: supporter.orderCount,
        totalSpent: supporter.totalSpent,
      })
    })
    
    return supporters
  }, [supporterGroups])

  // Filter, sort, and paginate
  const filteredAndSortedSupporters = useMemo(() => {
    let result = [...allSupporters]
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(s => 
        s.name.toLowerCase().includes(query) || 
        s.email?.toLowerCase().includes(query) ||
        s.groupName?.toLowerCase().includes(query),
      )
    }
    
    // Filter by group
    if (filterGroup !== 'all') {
      if (filterGroup === 'ungrouped') {
        result = result.filter(s => !s.groupId)
      } else {
        result = result.filter(s => s.groupId === filterGroup)
      }
    }
    
    // Sort
    result.sort((a, b) => {
      let comparison = 0
      switch (sortField) {
        case 'name':
          comparison = a.name.localeCompare(b.name)
          break
        case 'requests':
          comparison = a.requestCount - b.requestCount
          break
        case 'spent':
          comparison = a.totalSpent - b.totalSpent
          break
        case 'group':
          comparison = (a.groupName || 'zzz').localeCompare(b.groupName || 'zzz')
          break
      }
      return sortDirection === 'asc' ? comparison : -comparison
    })
    
    return result
  }, [allSupporters, searchQuery, sortField, sortDirection, filterGroup])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedSupporters.length / itemsPerPage)
  const paginatedSupporters = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredAndSortedSupporters.slice(start, start + itemsPerPage)
  }, [filteredAndSortedSupporters, currentPage, itemsPerPage])

  // Reset to page 1 when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
    setCurrentPage(1)
  }

  const handleFilterGroup = (groupId: string) => {
    setFilterGroup(groupId)
    setCurrentPage(1)
  }

  // Calculate stats
  const totalSupporters = DEMO_UNGROUPED_SUPPORTERS.length + supporterGroups.reduce((acc, g) => acc + g.members.length, 0)
  const newThisMonth = DEMO_UNGROUPED_SUPPORTERS.filter(s => s.isNew).length + supporterGroups.reduce((acc, g) => acc + g.members.filter(m => m.isNew).length, 0)
  const connectedSupporters = supporterGroups.reduce((acc, g) => acc + g.members.filter(m => m.integration).length, 0)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Badge color="blue">Demo v1.0</Badge>
          <Badge color="amber">Feedback Requested</Badge>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Heading>Supporters</Heading>
            <Text className="mt-1">Manage your supporters, groups, and request limits</Text>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatsCard
          icon={UsersIcon}
          value={totalSupporters}
          label={STATS_LABELS.totalSupporters}
        />
        <StatsCard
          icon={({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
          )}
          value={supporterGroups.length}
          label={STATS_LABELS.groups}
        />
        <StatsCard
          icon={({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          )}
          value={newThisMonth}
          label={STATS_LABELS.newLast30Days}
        />
        <StatsCard
          icon={({ className }) => (
            <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
          )}
          value={connectedSupporters}
          label={STATS_LABELS.linkedMembers}
        />
      </div>

      {/* Main Tab Navigation */}
      <div className="border-b border-zinc-200 dark:border-zinc-700 mb-6">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('supporters')}
            className={clsx(
              'pb-3 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'supporters'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300',
            )}
          >
            <div className="flex items-center gap-2">
              <UsersIcon className="size-4" />
              All Supporters
            </div>
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={clsx(
              'pb-3 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'groups'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300',
            )}
          >
            <div className="flex items-center gap-2">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              Groups
              <Badge color="zinc" className="ml-1">{supporterGroups.length}</Badge>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('limits')}
            className={clsx(
              'pb-3 text-sm font-medium border-b-2 transition-colors',
              activeTab === 'limits'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300',
            )}
          >
            <div className="flex items-center gap-2">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
              Limits
            </div>
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'supporters' && (
        <div className="space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <Input
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder={SEARCH_PLACEHOLDER}
                className="pl-10"
              />
            </div>
            <Select
              value={filterGroup}
              onChange={(e) => handleFilterGroup(e.target.value)}
              className="w-full sm:w-48"
            >
              <option value="all">All Groups</option>
              <option value="ungrouped">Ungrouped</option>
              {supporterGroups.map((group) => (
                <option key={group.id} value={group.id}>{group.name}</option>
              ))}
            </Select>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between text-sm text-zinc-500">
            <span>
              Showing {paginatedSupporters.length} of {filteredAndSortedSupporters.length} supporters
              {searchQuery && ` matching "${searchQuery}"`}
            </span>
          </div>

          {/* Table */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                  <th className="text-left px-4 py-3">
                    <button
                      onClick={() => handleSort('name')}
                      className={clsx(
                        'flex items-center gap-1 text-xs font-medium uppercase tracking-wider transition-colors',
                        sortField === 'name'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
                      )}
                    >
                      Supporter
                      <svg className={clsx(
                        'size-3 transition-transform',
                        sortField === 'name' ? 'opacity-100' : 'opacity-30',
                        sortField === 'name' && sortDirection === 'desc' && 'rotate-180',
                      )} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                  </th>
                  <th className="text-left px-4 py-3">
                    <button
                      onClick={() => handleSort('group')}
                      className={clsx(
                        'flex items-center gap-1 text-xs font-medium uppercase tracking-wider transition-colors',
                        sortField === 'group'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
                      )}
                    >
                      Group
                      <svg className={clsx(
                        'size-3 transition-transform',
                        sortField === 'group' ? 'opacity-100' : 'opacity-30',
                        sortField === 'group' && sortDirection === 'desc' && 'rotate-180',
                      )} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                  </th>
                  <th className="text-right px-4 py-3">
                    <button
                      onClick={() => handleSort('requests')}
                      className={clsx(
                        'flex items-center gap-1 text-xs font-medium uppercase tracking-wider ml-auto transition-colors',
                        sortField === 'requests'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
                      )}
                    >
                      Requests
                      <svg className={clsx(
                        'size-3 transition-transform',
                        sortField === 'requests' ? 'opacity-100' : 'opacity-30',
                        sortField === 'requests' && sortDirection === 'desc' && 'rotate-180',
                      )} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                  </th>
                  <th className="text-right px-4 py-3">
                    <button
                      onClick={() => handleSort('spent')}
                      className={clsx(
                        'flex items-center gap-1 text-xs font-medium uppercase tracking-wider ml-auto transition-colors',
                        sortField === 'spent'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200',
                      )}
                    >
                      Spent
                      <svg className={clsx(
                        'size-3 transition-transform',
                        sortField === 'spent' ? 'opacity-100' : 'opacity-30',
                        sortField === 'spent' && sortDirection === 'desc' && 'rotate-180',
                      )} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>
                    </button>
                  </th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {paginatedSupporters.map((supporter) => {
                  const integration = supporter.integration ? getIntegrationIcon(supporter.integration.type) : null
                  const IntegrationIcon = integration?.icon
                  const group = supporter.groupId ? supporterGroups.find(g => g.id === supporter.groupId) : null
                  
                  return (
                    <tr key={supporter.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <SupporterAvatar initials={supporter.initials} className="size-10" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-zinc-900 dark:text-white">{supporter.name}</span>
                              {supporter.isNew && (
                                <Badge color="emerald" className="text-[10px] px-1.5 py-0">New</Badge>
                              )}
                            </div>
                            {supporter.integration && IntegrationIcon ? (
                              <div className={clsx('flex items-center gap-1 text-xs', integration?.color)}>
                                <IntegrationIcon className="size-3" />
                                <span>{supporter.integration.tierName}</span>
                              </div>
                            ) : supporter.email ? (
                              <div className="text-sm text-zinc-500">{supporter.email}</div>
                            ) : null}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {group ? (
                          <Link
                            href={`/app/creator/supporters/demo/group?id=${group.id}`}
                            className="inline-flex items-center gap-2 hover:opacity-80"
                          >
                            <img src={group.image} alt="" className="size-5 rounded object-cover" />
                            <Badge color="blue">{group.name}</Badge>
                          </Link>
                        ) : (
                          <span className="text-zinc-400 text-sm">No group</span>
                        )}
                      </td>
                      <td className="text-right px-4 py-3">
                        <span className="font-medium text-zinc-900 dark:text-white">{supporter.requestCount}</span>
                      </td>
                      <td className="text-right px-4 py-3">
                        <span className="font-medium text-emerald-600 dark:text-emerald-400">${supporter.totalSpent}</span>
                      </td>
                      <td className="px-4 py-3">
                        <Button plain className="opacity-0 group-hover:opacity-100">
                          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {/* Empty State */}
            {paginatedSupporters.length === 0 && (
              <div className="p-12 text-center">
                <svg className="mx-auto size-12 text-zinc-300 dark:text-zinc-600" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <Text className="mt-4">No supporters found matching your search.</Text>
                <Button plain className="mt-2" onClick={() => { setSearchQuery(''); setFilterGroup('all') }}>
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between">
              <Text className="text-sm">
                Page {currentPage} of {totalPages}
              </Text>
              <div className="flex items-center gap-2">
                <Button
                  plain
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum: number
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={clsx(
                          'size-8 rounded-lg text-sm font-medium transition-colors',
                          currentPage === pageNum
                            ? 'bg-blue-500 text-white'
                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800',
                        )}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                </div>
                <Button
                  plain
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                >
                  Next
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="space-y-6">
          {/* Create Group CTA */}
          <div className="flex items-center justify-between">
            <Text>Organize supporters into groups to apply custom rules and limits.</Text>
            <Link href={`/app/creator/supporters/demo/group/edit?id=${supporterGroups[Math.floor(Math.random() * supporterGroups.length)]?.id || '1'}&step=basics`}>
              <Button>
                <PlusIcon className="size-4" />
                Create Group
              </Button>
            </Link>
          </div>

          {/* Groups List */}
          <div className="space-y-4">
            {supporterGroups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                isExpanded={expandedGroupId === group.id}
                onToggleExpand={() =>
                  setExpandedGroupId(expandedGroupId === group.id ? null : group.id)
                }
              />
            ))}
          </div>

          {/* Empty state hint */}
          {supporterGroups.length === 0 && (
            <div className="text-center py-12 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700">
              <svg className="size-12 mx-auto text-zinc-400 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <Subheading>No groups yet</Subheading>
              <Text className="mt-2 mb-4">Create your first group to organize supporters</Text>
              <Link href="/app/creator/supporters/demo/group/edit?id=1&step=basics">
                <Button>
                  <PlusIcon className="size-4" />
                  Create Group
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}

      {activeTab === 'limits' && (
        <div className="space-y-6">
          {/* Global Rules */}
          <GlobalRulesSection
            rules={globalRules}
            onEdit={() => setIsEditingGlobalRules(true)}
          />

          {/* How It Works */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 p-6">
            <SubheadingMedium className="mb-4">How Limits Work</SubheadingMedium>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                  <Strong>Global Rules</Strong>
                </div>
                <Text className="text-sm">
                  Default limits that apply to all supporters. This is your baseline.
                </Text>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                  <Strong>Supporter Groups</Strong>
                </div>
                <Text className="text-sm">
                  Groups can override global rules for their members. Great for VIPs or Patreon tiers.
                </Text>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-violet-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                  <Strong>Offering Rules</Strong>
                </div>
                <Text className="text-sm">
                  Individual offerings can have their own rules, or ignore limits entirely.
                </Text>
              </div>
            </div>
          </div>

          {/* Group Rules Overview */}
          <div>
            <SubheadingMedium className="mb-4">Group Rules Overview</SubheadingMedium>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-700">
                    <th className="text-left text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 py-3">Group</th>
                    <th className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 py-3">Members</th>
                    <th className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 py-3">Concurrent</th>
                    <th className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 py-3">Total Limit</th>
                    <th className="text-right text-sm font-medium text-zinc-500 dark:text-zinc-400 px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {/* Global row */}
                  <tr className="bg-blue-50/50 dark:bg-blue-950/20">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                          <GlobeIcon className="size-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-zinc-900 dark:text-white">Global (Default)</span>
                      </div>
                    </td>
                    <td className="text-center px-4 py-3 text-zinc-500">All</td>
                    <td className="text-center px-4 py-3 font-medium text-zinc-900 dark:text-white">{globalRules.openRequestsPerUser}</td>
                    <td className="text-center px-4 py-3">
                      <span className="font-medium text-zinc-900 dark:text-white">{globalRules.totalRequestsPerMonth}</span>
                      <span className="text-zinc-400 ml-1">
                        {globalRules.timeRangeMonths === 0 ? '(lifetime)' : `/ ${globalRules.timeRangeMonths}mo`}
                      </span>
                    </td>
                    <td className="text-right px-4 py-3">
                      <Button plain onClick={() => setIsEditingGlobalRules(true)}>
                        <PencilIcon className="size-4" />
                      </Button>
                    </td>
                  </tr>
                  {/* Group rows */}
                  {supporterGroups.map((group) => (
                    <tr key={group.id}>
                      <td className="px-4 py-3">
                        <Link
                          href={`/app/creator/supporters/demo/group?id=${group.id}`}
                          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                        >
                          <img src={group.image} alt={group.name} className="size-7 rounded-lg object-cover" />
                          <span className="font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">{group.name}</span>
                        </Link>
                      </td>
                      <td className="text-center px-4 py-3 text-zinc-500">{group.members.length}</td>
                      <td className="text-center px-4 py-3 font-medium text-zinc-900 dark:text-white">
                        {group.customGlobalRules?.openRequestsPerUser ?? <span className="text-zinc-400">—</span>}
                      </td>
                      <td className="text-center px-4 py-3">
                        {group.customGlobalRules ? (
                          <>
                            <span className="font-medium text-zinc-900 dark:text-white">{group.customGlobalRules.totalRequestsPerMonth}</span>
                            <span className="text-zinc-400 ml-1">
                              {group.customGlobalRules.timeRangeMonths === 0 ? '(lifetime)' : `/ ${group.customGlobalRules.timeRangeMonths}mo`}
                            </span>
                          </>
                        ) : (
                          <span className="text-zinc-400">—</span>
                        )}
                      </td>
                      <td className="text-right px-4 py-3">
                        <Link href={`/app/creator/supporters/demo/group/edit?id=${group.id}&step=limits`}>
                          <Button plain>
                            <PencilIcon className="size-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Text className="text-xs text-zinc-400 mt-2">— indicates using global rules</Text>
          </div>
        </div>
      )}

      {/* Dialogs */}
      <EditGlobalRulesDialog
        rules={globalRules}
        isOpen={isEditingGlobalRules}
        onClose={() => setIsEditingGlobalRules(false)}
      />
    </div>
  )
}
