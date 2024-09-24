import { readdir } from 'fs/promises'
import path from 'path'
import IconDashboard from '@/components/IconDashboard'

export default async function Home() {
  const iconDirectory = path.join(process.cwd(), 'public', 'icons')
  let iconNames = []
  
  try {
    const iconFiles = await readdir(iconDirectory)
    iconNames = iconFiles.filter(file => file.endsWith('.svg')).map(file => file.replace('.svg', ''))
  } catch (error) {
    console.error('Error reading icon directory:', error)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SVG Icon Dashboard</h1>
      <IconDashboard icons={iconNames} />
    </main>
  )
}