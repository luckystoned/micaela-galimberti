import * as React from "react"
import { Disclosure } from '@headlessui/react'
import PropTypes from "prop-types"
import { Link } from "gatsby"

import classNames from '../../utils/classNames'

const navigation = [
  { name: '(00) HOME', href: '/', current: false },
  { name: '(01) PROJECTS', href: '/projects', current: false },
  { name: '(02) KNOW ME', href: '/knowme', current: false },
  { name: '(03) CONTACT', href: '/contact', current: false },
]

const Header = ({ siteTitle }) => (
  <Disclosure as="nav">
  {({ open }) => (
    <>
      <div className="mx-auto px-6 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button className="no-button inline-flex items-center justify-center p-2focus:outline-none">
              <div className="block h-6 w-6 text-white" aria-hidden="true">
              {open ? '(-)' : '(+)'}
              </div>
            </Disclosure.Button>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center text-white md:hidden">
            <Link to="/">
              {'(00) HOME'}
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="invisible md:visible sm:block sm:ml-6">
              <div className="flex space-x-4 xs:text-blue">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current ? 'current' : 'no-current',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="absolute md:hidden mx-auto px-6">
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current ? 'current' : 'no-current',
                'block text-white'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
