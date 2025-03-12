
import React from 'react'
import { TaskOne } from './TaskOne';
import { TaskTwo } from './TaskTwo';

interface Props {
  currentTab: number;
}

export const ContentTask = ({ currentTab }: Props) => {
  return (
    <div className='rounded-xl border-2 border-gray-400 m-4 p-4'>
      <>
      { currentTab === 1 ? ( <TaskOne /> ) : null }
      { currentTab === 2 ? ( <TaskTwo /> ) : null }
      </>
    </div>
  )
}
