import Mock, { Random } from 'mockjs'

/* 总览数据 */
export const overviewData = Mock.mock({
  code: 200,
  data: {
    file: Mock.Random.float(60, 300, 3, 2) + 'M',
    'article|0-50': 0,
    'gallery|0-50': 0,
    'diary|0-50': 0
  }
})

/* 评论数据 */
export const commentData = Mock.mock({
  code: 200,
  data: {
    count: 123,
    'list|123': [
      {
        'id|+1': 1, // id从1自增
        article: {
          'id|+1': 1,
          name: '@ctitle(3,12)'
        },
        user: {
          'id|+1': 1,
          name: '@cname',
          avatar: 'https://picsum.photos/seed/picsum/100'
        },
        comment: '@cparagraph(1,4)',
        moment: '@datetime()',
        'complaint|0-12': 0
      }
    ]
  }
})

/*分组*/
export const groupData = Mock.mock({
  code: 200,
  data: {
    'list|4-8': [
      {
        'id|+1': 1,
        name: '@ctitle(2,6)',
        'value|0-12': 4,
        'state|0-1': 0, // 0：未发布，1：已发布
        moment: '@datetime()'
      }
    ]
  }
})
