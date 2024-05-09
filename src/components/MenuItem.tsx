import React, { useEffect, useState } from 'react'
import SidebarLinkGroup from './SidebarLinkGroup'
import { NavLink, useLocation } from 'react-router-dom'

export interface MenuItemProps {
  path: string
  title: string
  icon?: any
  children?: MenuItemProps[]
}

const MenuItem = ({ title, path, icon = '', children = [] }: MenuItemProps) => {
  const location = useLocation()
  const { pathname } = location
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

  // false retorna o menu fechado e true o menu aberto
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Ao mudar de página, o menu é fechado novamente
    setOpen(false)
  }, [pathname])

  if (children != undefined && children.length > 0) {
    return (
      <SidebarLinkGroup
        activeCondition={pathname === '/' || pathname.includes(path)}
      >
        {(handleClick) => (
          <React.Fragment>
            <NavLink
              to="#"
              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                (pathname === '/forms' || pathname.includes('forms')) &&
                'bg-graydark dark:bg-meta-4'
              }`}
              onClick={(e) => {
                e.preventDefault()
                setOpen(!open)
                sidebarExpanded ? handleClick() : setSidebarExpanded(true)
              }}
            >
              {title}
            </NavLink>
            <div
              className={`translate transform overflow-hidden ${
                !open && 'hidden'
              }`}
            >
              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                {children.map((child, keyChild) => (
                  <MenuItem
                    key={keyChild}
                    title={child.title}
                    path={child.path}
                    icon={child.icon}
                    children={child.children}
                  />
                ))}
              </ul>
            </div>
          </React.Fragment>
        )}
      </SidebarLinkGroup>
    )
  }

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive && '!text-white')
        }
      >
        {title}
      </NavLink>
    </li>
  )
}

export default MenuItem
