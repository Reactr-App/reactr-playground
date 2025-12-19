'use client'

import { Avatar } from '../elements/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,  
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../elements/dropdown'
import { LogoIcon } from '../elements/logo'
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from '../elements/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../elements/sidebar'
import { SidebarLayout } from '../elements/sidebar-layout'
import { cn } from '../utils/cn'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  HeartIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid'
import {
  ArrowRightStartOnRectangleIcon as ArrowRightStartOnRectangleIcon2,
  BanknotesIcon,
  HomeIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  Square2StackIcon,
  SunIcon,
  TicketIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

function CreatorDashboardContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { theme, setTheme } = useTheme()
  const currentPath = usePathname()
  const router = useRouter()

  const handleSignOut = () => {
  }

  const profileAvatar = (
      <Avatar
        initials={'D'}
        className="size-10"
        square
        alt={'Demo User Avatar'}
      />
  )

  const myProfile = () => {
    return (
      <span className="flex min-w-0 items-center gap-3">
        {profileAvatar}
        <span className="min-w-0">
          <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
            Demo User
          </span>
          <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
            @demo-user
          </span>
        </span>
      </span>
    )
  }

  return (
    <SidebarLayout
      navbar={
        <Navbar className="bg-white dark:bg-zinc-900">
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>{profileAvatar}</DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/app/creator/profile">
                  <UserIcon />
                  <DropdownLabel>
                    Settings
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShieldCheckIcon />
                  <DropdownLabel>
                    Terms of Service
                  </DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <LightBulbIcon />
                  <DropdownLabel>
                    Share Feedback
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={handleSignOut}>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>
                    Sign Out
                  </DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <div className="flex flex-row items-center gap-1">
                  <LogoIcon />
                  <SidebarLabel>
                    <p
                      className={cn(
                        'font-cabinet-grotesk text-lg font-black text-blue-800 dark:text-white',
                      )}
                    >
                      Reactr
                    </p>
                  </SidebarLabel>
                </div>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu
                className="min-w-80 lg:min-w-64"
                anchor="bottom start"
              >
                <DropdownItem href="/app/creator/profile">
                  <UserIcon />
                  <DropdownLabel>
                    Profile
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                  <DropdownLabel>
                    {theme === 'light'
                      ? 'Dark Mode'
                      : 'Light Mode'}
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/app/creator/offerings/new">
                  <PlusIcon />
                  <DropdownLabel>
                    New Offering
                  </DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem
                href="/app/creator"
                current={currentPath === '/app/creator'}
              >
                <HomeIcon />
                <SidebarLabel>
                  Home
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/offerings"
                current={currentPath.startsWith('/creator/offerings')}
              >
                <Square2StackIcon />
                <SidebarLabel>
                  Offerings
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/requests"
                current={currentPath.startsWith('/creator/requests')}
              >
                <TicketIcon />
                <SidebarLabel>
                  Requests
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/supporters"
                current={currentPath.startsWith('/creator/supporters')}
              >
                <HeartIcon />
                <SidebarLabel>
                  Supporters
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/earnings"
                current={currentPath.startsWith('/creator/earnings')}
              >
                <BanknotesIcon />
                <SidebarLabel>
                  Earnings
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/integrations"
                current={currentPath.startsWith('/creator/integrations')}
              >
                <RocketLaunchIcon />
                <SidebarLabel>
                  Integrations
                </SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/app/creator/affiliates"
                current={currentPath.startsWith('/creator/affiliates')}
              >
                <UserGroupIcon />
                <SidebarLabel>
                  Affiliates
                </SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSection className="max-lg:hidden">
              <SidebarHeading>
                My Offerings
              </SidebarHeading>
            </SidebarSection>

            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem
                href="/help"
                target="_blank"
                rel="noopener noreferrer"
              >
                <QuestionMarkCircleIcon />
                <SidebarLabel>
                  Support
                </SidebarLabel>
              </SidebarItem>
                <SidebarItem
                  onClick={async () => {
                    router.push('/supporter')
                  }}
                  rel="noopener noreferrer"
                >
                  <ArrowRightStartOnRectangleIcon2 />
                  <SidebarLabel>
                    Supporter Account
                  </SidebarLabel>
                </SidebarItem>
                <SidebarItem
                  href={`/demo-user`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SparklesIcon />
                  <SidebarLabel>
                    My Page
                  </SidebarLabel>
                </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                {myProfile()}
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/creator/profile">
                  <UserIcon />
                  <DropdownLabel>
                    Profile
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShieldCheckIcon />
                  <DropdownLabel>
                    Terms of Service
                  </DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <LightBulbIcon />
                  <DropdownLabel>
                    Share Feedback
                  </DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={handleSignOut}>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>
                    Sign Out
                  </DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}

export default CreatorDashboardContainer
