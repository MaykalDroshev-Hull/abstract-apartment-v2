'use client';

import * as Icons from 'lucide-react';

interface RoomItem {
  label: string;
  details: string;
  icon: string;
}

interface RoomListProps {
  rooms: RoomItem[];
  title: string;
}

function getIcon(iconName: string) {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.Circle;
}

export function RoomList({ rooms, title }: RoomListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif text-zinc-900 mb-6">{title}</h3>
      <ul className="space-y-4">
        {rooms.map((room, index) => {
          const Icon = getIcon(room.icon);
          return (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 text-[#9D7F5F]">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-zinc-900">{room.label}</p>
                <p className="text-sm text-zinc-600 mt-1">{room.details}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

