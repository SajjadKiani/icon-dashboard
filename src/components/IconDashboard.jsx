"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function IconDashboard({ icons = [] }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredIcons = icons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {icons.length === 0 ? (
        <p>No icons found. Please make sure you have SVG files in the public/icons directory.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredIcons.map(icon => (
            <div key={icon} className="flex flex-col items-center">
              <Image
                src={`/icons/${icon}.svg`}
                alt={icon}
                width={50}
                height={50}
                className="mb-2"
              />
              <span className="text-sm text-center">{icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}