import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-2">
        <div className="font-bold text-xl">WhatBytes</div>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Rahil Siddique</span>
        </div>
      </div>
    </header>
  )
}

