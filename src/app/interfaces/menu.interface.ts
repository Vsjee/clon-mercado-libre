export interface MenuList {
  name: string
  route: string
}

export interface Category {
  name: string
  child?: boolean
  detail?: DetailCategory[]
}

export interface DetailCategory {
  title: string
  items: string[]
}
