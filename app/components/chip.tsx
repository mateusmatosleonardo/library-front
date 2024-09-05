import React from 'react';

type ChipProps = {
  title: string;
  selected: boolean;
  onClick: () => void;
}

export default function Chip({ title, selected, onClick }: ChipProps) {
  return (
    <div
      className={`
        ${selected && 'bg-gray-200'} 
        ${!selected && 'border border-slate-200'} 
        py-1 px-4 hover:cursor-pointer rounded-sm`}
      onClick={onClick}
    >
      {title}
    </div>
  )
}