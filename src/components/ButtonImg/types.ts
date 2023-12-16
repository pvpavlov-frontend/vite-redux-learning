import { MouseEvent } from "react"

export interface ButtonImgProps {
  disabled?: boolean
  name?: string
  type?: "submit" | "reset" | "button" | undefined
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  imageUrl: string;
  altText: string;
}
