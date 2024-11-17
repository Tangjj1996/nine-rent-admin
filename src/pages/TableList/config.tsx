import { ProColumns } from '@ant-design/pro-components';
import { Typography, Image, Space, Input } from 'antd';
import MutiplyInput from '@/components/MutiplyInput';

export const columns: ProColumns<any>[] = [
  {
    title: '标题',
    dataIndex: 'title',
    formItemProps: {
      style: {
        width: 400,
      },
    },
    render: (value) => <div style={{ width: 400 }}>{value}</div>,
  },
  {
    title: '内容',
    dataIndex: 'content',
    renderFormItem: () => <Input.TextArea style={{ width: 400, height: 400 }} />,
    render(dom) {
      return <div style={{ whiteSpace: 'pre-wrap', width: 400 }}>{dom}</div>;
    },
  },
  {
    title: '标签',
    dataIndex: 'tags',
    renderFormItem: () => <MutiplyInput style={{ width: 200 }} />,
    render(dom) {
      return (
        <Space style={{ width: 200 }}>
          {(dom as string[]).map((value, index) => (
            <Typography.Text keyboard key={index}>
              {value}
            </Typography.Text>
          ))}
        </Space>
      );
    },
  },
  {
    title: '封面',
    dataIndex: 'cover',
    render: (value) => <Image preview src={value as string} width={100} height={100} />,
    fieldProps: {
      style: {
        width: 400,
      },
    },
  },
  {
    title: '图片集',
    dataIndex: 'swiper',
    renderFormItem: () => <MutiplyInput style={{ width: 400 }} />,
    render: (value) => (
      <Space direction="vertical">
        {(value as string[]).map((val, index) => (
          <Image key={index} preview src={val as string} width={100} height={100} />
        ))}
      </Space>
    ),
  },
  {
    title: '操作',
    valueType: 'option',
    width: 200,
    render(dom, entity, index, action) {
      return [
        <a key="editable" onClick={() => action?.startEditable?.(entity.id)}>
          编辑
        </a>,
        <a key="delete">删除</a>,
      ];
    },
  },
];
