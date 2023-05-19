export interface MenuList {
  name: string
  route: string
}

export interface Category {
  name: string
  route: string
  child?: boolean
  detail?: DetailCategory[]
}

export interface DetailCategory {
  title: string
  items: string[]
}
