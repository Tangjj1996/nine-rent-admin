import { ProColumns } from '@ant-design/pro-components';

export const columns: ProColumns<any>[] = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
    valueType: 'textarea'
  },
  {
    title: '标签',
    dataIndex: 'tags',
  },
  {
    title: '封面',
    dataIndex: 'cover'
  },
  {
    title: '图片集',
    dataIndex: 'swiper'
  },
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render(dom, entity, index, action) {
     return [
      <a key='editable' onClick={() => action?.startEditable?.(entity.id)}>编辑</a>,
      <a key='delete'>删除</a>
     ]
    },
  }
]
