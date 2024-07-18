import { IconBrandAmazon } from "@tabler/icons-react"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex flex-col items-center">
        <div className="text-xl relative top-[18px]">Pupunhazon</div>
        <IconBrandAmazon size={50} stroke={1} className="text-yellow-300"></IconBrandAmazon>
      </div>
    </Link>
  )
}