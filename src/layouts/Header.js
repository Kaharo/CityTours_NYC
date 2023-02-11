// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header>
//       <nav>
//         {/* <Link to="/">Home</Link>
//         <Link to="/places">Places to Go</Link>
//         <Link to="/eat">Where to Eat</Link>
//         <Link to="/wear">What to Wear</Link>
//         <Link to="/contact">Contact Us</Link> */}
//       </nav>
//     </header>
//   );
// }

import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Main', href: '#', current: true },
  { name: 'Places', href: '#places', current: false },
  { name: 'Food', href: '#foodspots', current: false },
  { name: 'Clothing', href: '#clothing', current: false },
  { name: 'Contacts', href: '#contacts', current: false },
  { name: 'Mapspots', href: '#map', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    fill="#F1F5F9"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    stroke="#F1F5F9"
                    className="block h-8 w-auto lg:hidden"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g id="Layer_2"></g> <g id="Layer_3"></g>{' '}
                      <g id="Layer_4"></g> <g id="Layer_5"></g>{' '}
                      <g id="Layer_6"></g> <g id="Layer_7"></g>{' '}
                      <g id="Layer_8"></g> <g id="Layer_9"></g>{' '}
                      <g id="Layer_10"></g> <g id="Layer_11"></g>{' '}
                      <g id="Layer_12"></g> <g id="Layer_13"></g>{' '}
                      <g id="Layer_15"></g> <g id="Layer_16"></g>{' '}
                      <g id="Layer_17"></g> <g id="Layer_18"></g>{' '}
                      <g id="Layer_19"></g> <g id="Layer_20"></g>{' '}
                      <g id="Layer_21">
                        {' '}
                        <g>
                          {' '}
                          <path d="M32,0C14.4,0,0,14.4,0,32s14.4,32,32,32s32-14.4,32-32S49.6,0,32,0z M32,61.8C15.6,61.8,2.2,48.4,2.2,32S15.6,2.2,32,2.2 S61.8,15.6,61.8,32S48.4,61.8,32,61.8z"></path>{' '}
                          <path d="M32,5.9C17.6,5.9,5.9,17.6,5.9,32S17.6,58.1,32,58.1S58.1,46.4,58.1,32S46.4,5.9,32,5.9z M33.1,55.8v-3.1 c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v3.1C18.6,55.3,8.7,45.4,8.2,33.1h3.1c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H8.2 C8.7,18.6,18.6,8.7,30.9,8.2v3.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1V8.2c12.3,0.6,22.2,10.5,22.7,22.7h-3.1 c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h3.1C55.3,45.4,45.4,55.3,33.1,55.8z"></path>{' '}
                          <path d="M32,28.3c-2,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7s3.7-1.6,3.7-3.7S34,28.3,32,28.3z M32,33.5c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S32.8,33.5,32,33.5z"></path>{' '}
                          <path d="M49.6,31l-11.9-4.6l-4.6-12c-0.2-0.4-0.6-0.7-1-0.7c-0.5,0-0.9,0.3-1,0.7l-4.6,12l-12,4.6c-0.4,0.2-0.7,0.6-0.7,1 c0,0.5,0.3,0.9,0.7,1l12,4.6L31,49.6c0.2,0.4,0.6,0.7,1,0.7h0c0.5,0,0.9-0.3,1-0.7l4.6-12l12-4.6c0.4-0.2,0.7-0.6,0.7-1 C50.3,31.6,50,31.1,49.6,31z M36.4,35.7c-0.3,0.1-0.5,0.3-0.6,0.6L32,46.1l-3.7-9.7c-0.1-0.3-0.3-0.5-0.6-0.6L17.9,32l9.8-3.7 c0.3-0.1,0.5-0.3,0.6-0.6l3.7-9.8l3.7,9.8c0.1,0.3,0.3,0.5,0.6,0.6l9.7,3.7L36.4,35.7z"></path>{' '}
                        </g>{' '}
                      </g>{' '}
                      <g id="Layer_22"></g> <g id="Layer_23"></g>{' '}
                      <g id="Layer_24"></g> <g id="Layer_25"></g>{' '}
                      <g id="Layer_26"></g> <g id="Layer_27"></g>{' '}
                    </g>
                  </svg>

                  <svg
                    fill="#F1F5F9"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    stroke="#F1F5F9"
                    className="hidden h-8 w-auto lg:block"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <g id="Layer_2"></g> <g id="Layer_3"></g>{' '}
                      <g id="Layer_4"></g> <g id="Layer_5"></g>{' '}
                      <g id="Layer_6"></g> <g id="Layer_7"></g>{' '}
                      <g id="Layer_8"></g> <g id="Layer_9"></g>{' '}
                      <g id="Layer_10"></g> <g id="Layer_11"></g>{' '}
                      <g id="Layer_12"></g> <g id="Layer_13"></g>{' '}
                      <g id="Layer_15"></g> <g id="Layer_16"></g>{' '}
                      <g id="Layer_17"></g> <g id="Layer_18"></g>{' '}
                      <g id="Layer_19"></g> <g id="Layer_20"></g>{' '}
                      <g id="Layer_21">
                        {' '}
                        <g>
                          {' '}
                          <path d="M32,0C14.4,0,0,14.4,0,32s14.4,32,32,32s32-14.4,32-32S49.6,0,32,0z M32,61.8C15.6,61.8,2.2,48.4,2.2,32S15.6,2.2,32,2.2 S61.8,15.6,61.8,32S48.4,61.8,32,61.8z"></path>{' '}
                          <path d="M32,5.9C17.6,5.9,5.9,17.6,5.9,32S17.6,58.1,32,58.1S58.1,46.4,58.1,32S46.4,5.9,32,5.9z M33.1,55.8v-3.1 c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v3.1C18.6,55.3,8.7,45.4,8.2,33.1h3.1c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H8.2 C8.7,18.6,18.6,8.7,30.9,8.2v3.1c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1V8.2c12.3,0.6,22.2,10.5,22.7,22.7h-3.1 c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h3.1C55.3,45.4,45.4,55.3,33.1,55.8z"></path>{' '}
                          <path d="M32,28.3c-2,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7s3.7-1.6,3.7-3.7S34,28.3,32,28.3z M32,33.5c-0.8,0-1.5-0.7-1.5-1.5 s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S32.8,33.5,32,33.5z"></path>{' '}
                          <path d="M49.6,31l-11.9-4.6l-4.6-12c-0.2-0.4-0.6-0.7-1-0.7c-0.5,0-0.9,0.3-1,0.7l-4.6,12l-12,4.6c-0.4,0.2-0.7,0.6-0.7,1 c0,0.5,0.3,0.9,0.7,1l12,4.6L31,49.6c0.2,0.4,0.6,0.7,1,0.7h0c0.5,0,0.9-0.3,1-0.7l4.6-12l12-4.6c0.4-0.2,0.7-0.6,0.7-1 C50.3,31.6,50,31.1,49.6,31z M36.4,35.7c-0.3,0.1-0.5,0.3-0.6,0.6L32,46.1l-3.7-9.7c-0.1-0.3-0.3-0.5-0.6-0.6L17.9,32l9.8-3.7 c0.3-0.1,0.5-0.3,0.6-0.6l3.7-9.8l3.7,9.8c0.1,0.3,0.3,0.5,0.6,0.6l9.7,3.7L36.4,35.7z"></path>{' '}
                        </g>{' '}
                      </g>{' '}
                      <g id="Layer_22"></g> <g id="Layer_23"></g>{' '}
                      <g id="Layer_24"></g> <g id="Layer_25"></g>{' '}
                      <g id="Layer_26"></g> <g id="Layer_27"></g>{' '}
                    </g>
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        id={item.name}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
