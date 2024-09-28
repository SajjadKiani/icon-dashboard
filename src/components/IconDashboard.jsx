'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WomanBold } from './icons'

export default function IconDashboard({ 
  categories = [], 
  iconsByCategory = {} 
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [open, setOpen] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState(undefined)

  const filteredIcons = useCallback(() => {
    let result = []
    if (category === 'all') {
      for (const category in iconsByCategory) {
        result = result.concat(
          iconsByCategory[category]
            .filter(icon => icon.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      }
    } else {
      result = iconsByCategory[category]
        ?.filter(icon => icon.toLowerCase().includes(searchTerm.toLowerCase())) || []
    }
    return result
  }, [category, iconsByCategory, searchTerm])

  return (
    <div className="flex flex-col gap-6">
      <Input
        type="text"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <Tabs defaultValue={categories[0]} value={category} className="flex items-start gap-6">
        <TabsList className='' asChild>
          <div className='flex justify-start items-start flex-col gap-2'>
            {categories.map(category => (
              <TabsTrigger key={category} value={category} asChild>
                  <Button variant='ghost' className='h-8 text-start min-w-[280px]'
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </Button>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {categories.map(category => (
          <TabsContent key={category} value={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            {filteredIcons(category).length === 0 ? (
              <p>No icons found in this category.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredIcons(category).map(icon => (
                  <Card key={icon}>
                    <CardContent className="flex flex-col items-center justify-center p-4 hover:bg-secondary cursor-pointer"
                      onClick={() => {setOpen(true), setSelectedIcon(icon)}}
                    >
                      <Image
                        src={`/icons/${category}/${icon}.svg`}
                        alt={icon}
                        width={50}
                        height={50}
                        className="mb-2"
                      />
                      <span className="text-sm text-center">{icon}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
      <Sheet onOpenChange={setOpen} open={open}>
        {selectedIcon &&
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Selected Icon</SheetTitle>
              <SheetDescription>
                  <Image
                    src={`/icons/${category}/${icon}.svg`}
                    alt={icon}
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="text-sm text-center">{icon}</span>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        }
      </Sheet>

    </div>
  )
}