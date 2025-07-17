// 总览标题
export type TitleProps = {
  title: string
  showSearch?: boolean
}

// 总览卡片
export type CardProps = {
  path?: string
  name: string
  bgColor: string
  total?: number | string
  showPlus: boolean
}

// 回复
export interface ReplyData {
  id: number
  article: {
    id: number
    name: string
  }
  user: {
    id: number
    name: string
    avatar: string
  }
  comment: string
  moment: string
  complaint: number
}

// 评论
export interface Comment {
  count: number
  list: ReplyData[]
}

// 分组
export interface GroupItem {
  id: number
  name: string
  value: number
  state: number
  moment: string
}

/*
* 本地文件
* */
