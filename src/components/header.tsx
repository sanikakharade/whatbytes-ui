import { Bell, Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 bg-white border-b">
      <div className="flex items-center gap-2 md:gap-4">
        <button onClick={onMenuClick} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="font-bold text-lg md:text-xl">WhatBytes</div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8 md:w-10 md:h-10">
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <span className="hidden md:inline text-sm font-medium">Rahil Siddique</span>
        </div>
      </div>
    </header>
  )
}

