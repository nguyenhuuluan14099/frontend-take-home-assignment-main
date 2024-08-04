import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="">
          <Tabs.Root
            value={activeTab}
            onValueChange={setActiveTab}
            defaultValue="tab1"
            orientation="vertical"
          >
            <Tabs.List
              className="my-10 flex items-center gap-x-[8px]"
              aria-label="tabs example"
            >
              <Tabs.Trigger
                value="tab1"
                className={clsx(
                  'cursor-pointer rounded-full border border-gray-200 px-[24px] py-[12px]    font-bold',
                  activeTab === 'tab1'
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700'
                )}
              >
                <p className="">All</p>
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className={clsx(
                  'cursor-pointer rounded-full border border-gray-200 px-[24px] py-[12px]    font-bold',
                  activeTab === 'tab2'
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700'
                )}
              >
                <p className="">Pending</p>
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab3"
                className={clsx(
                  'cursor-pointer rounded-full border border-gray-200 px-[24px] py-[12px]    font-bold',
                  activeTab === 'tab3'
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-700'
                )}
              >
                <p className="">Completed</p>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <TodoList tab="all" />
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <TodoList tab="pending" />
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <TodoList tab="completed" />
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
