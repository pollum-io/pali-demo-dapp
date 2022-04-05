import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import Chevron from '../assets/icons/ArrowDown.svg';

export const MyDropdown = () => (
  <div className="w-full">
    <Menu as="div" className="relative inline-block text-left w-full">
      <div className="w-full">
        <Menu.Button className="focus:border focus:border-brand-royalblue bg-bkg-6 flex flex-row justify-between items-center text-left px-4 py-1 rounded-full h-max w-full text-sm font-poppins opacity-70 hover:opacity-100 text-white active:text-white">
          <p>Options</p>
          <img
            src={Chevron}
            alt=""
            className="opacity-70 hover:opacity-100 w-4 h-4"
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
        <Menu.Items className="w-full z-50 mt-2 origin-top-right bg-bkg-6 rounded-md focus:outline-none px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active
                    ? 'text-white bg-brand-royalblue'
                    : 'text-gray-400 bg-transparent'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-poppins`}
              >
                Edit
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active
                    ? 'text-white bg-brand-royalblue'
                    : 'text-gray-400 bg-transparent'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-poppins text-white`}
              >
                Duplicate
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active
                    ? 'text-white bg-brand-royalblue'
                    : 'text-gray-400 bg-transparent'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-poppins text-white`}
              >
                Archive
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active
                    ? 'text-white bg-brand-royalblue'
                    : 'text-gray-400 bg-transparent'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-poppins text-white`}
              >
                Move
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active
                    ? 'text-white bg-brand-royalblue'
                    : 'text-gray-400 bg-transparent'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-poppins text-white`}
              >
                Delete
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
);
