import Mock from 'mockjs'

/*总览数据*/
export const overviewData = Mock.mock({
  code: 200,
  data: {
    file: Mock.Random.float(60, 300, 3, 2) + 'M',
    'article|0-50': 0,
    'gallery|0-50': 0,
    'diary|0-50': 0
  }
})
