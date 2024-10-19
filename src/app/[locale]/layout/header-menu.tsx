"use client"

import { Crop, FileArchive, FileDown, FlipHorizontal, RotateCcw, ScissorsLineDashed, Sticker, Text } from "lucide-react"
import { GiJoin } from "react-icons/gi"
import { PiResize } from "react-icons/pi"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "@/i18n/routing"

type SubLinkItem = {
  href: string
  title: string
  icon: React.ReactNode
}

type MenuItem = {
  title: string
  href?: string
  subItems?: SubLinkItem[]
}
export function HeaderMenuComponent() {

  const menuItems: MenuItem[] = [
    {
      href: "/image-generator",
      title: "Image Generator",
    },
    {
      title: "Image Editor",
      subItems: [
        {
          href: "/crop",
          title: "Crop",
          icon: <Crop className="h-4 w-4" />,
        },
        {
          href: "/resize",
          title: "Resize",
          icon: <PiResize className="h-4 w-4" />,
        },
        {
          href: "/rotate",
          title: "Rotate",
          icon: <RotateCcw className="h-4 w-4" />,
        },
        {
          href: "/flip",
          title: "Flip",
          icon: <FlipHorizontal className="h-4 w-4" />,
        },
        {
          href: "/text",
          title: "Text",
          icon: <Text className="h-4 w-4" />,
        },
        {
          href: "/sticker",
          title: "Sticker",
          icon: <Sticker className="h-4 w-4" />,
        },
        {
          href: "/merge",
          title: "Merge",
          icon: <GiJoin className="h-4 w-4" />,
        },
        {
          href: "/split",
          title: "Split",
          icon: <ScissorsLineDashed className="h-4 w-4" />,
        },
        {
          href: "/convert",
          title: "Convert",
          icon: <FileDown className="h-4 w-4" />,
        },
        {
          href: "/compress",
          title: "Compress",
          icon: <FileArchive className="h-4 w-4" />,
        },
      ]
    },
    {
      href: "/blog",
      title: "Blog",
    },
  ]


  return (
    <NavigationMenu className="justify-center">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.subItems ? (
              <Popover>
                <PopoverTrigger asChild>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                  <ul className="grid grid-cols-2 p-4">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="flex items-center space-x-4 rounded-md p-2 hover:bg-accent"
                          >
                            <div className="flex-shrink-0">
                              {subItem.icon}
                            </div>
                            <div className="flex-grow text-sm font-medium">
                              {subItem.title}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href ?? "#"}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group w-max"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}