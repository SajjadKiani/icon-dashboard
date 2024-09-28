import { readdir } from 'fs/promises'
import path from 'path'
import IconDashboard from '@/components/IconDashboard'

export default async function Home() {
  const iconDirectory = path.join(process.cwd(), 'public', 'icons')
  let categories = []
  let iconsByCategory = {}

  try {
    categories = await readdir(iconDirectory)
    for (const category of categories) {
      const categoryPath = path.join(iconDirectory, category)
      const iconFiles = await readdir(categoryPath)
      iconsByCategory[category] = iconFiles
        .filter(file => file.endsWith('.svg'))
        .map(file => file.replace('.svg', ''))
    }
  } catch (error) {
    console.error('Error reading icon directory:', error)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SVG Icon Dashboard</h1>
      <IconDashboard categories={categories} iconsByCategory={iconsByCategory} />
    </main>
  )
}