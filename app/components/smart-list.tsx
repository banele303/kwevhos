import React from 'react'
import { Check } from 'lucide-react'

interface SmartListItemProps {
  children: React.ReactNode
}

const SmartListItem: React.FC<SmartListItemProps> = ({ children }) => {
  return (
    <li className="flex items-start space-x-3 mb-4">
      <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
      <span>{children}</span>
    </li>
  )
}

interface SmartListProps {
  items: string[]
}

const SmartList: React.FC<SmartListProps> = ({ items }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <SmartListItem key={index}>{item}</SmartListItem>
      ))}
    </ul>
  )
}

export default SmartList

