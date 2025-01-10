import Link from 'next/link'
import { BarChart2, FileText, LayoutDashboard } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-6">
      <nav className="space-y-6">
        <Link 
          href="/dashboard"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link 
          href="/skill-test"
          className="flex items-center gap-2 text-blue-600"
        >
          <FileText className="w-5 h-5" />
          <span>Skill Test</span>
        </Link>
        <Link 
          href="/internship"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
        >
          <BarChart2 className="w-5 h-5" />
          <span>Internship</span>
        </Link>
      </nav>
    </aside>
  )
}

