import { Space, Input, Button } from 'antd';
import { produce } from 'immer';

interface FieldListProps {
  value?: string[];
  onChange?: (value: string[]) => void;
}

export default function Index({ value, onChange }: FieldListProps) {
  const handleChange = (val: string, index: number) => {
    onChange?.(
      produce(value!, (draft) => {
        draft?.splice(index, 1, val);
      }),
    );
  };

  const handleDelete = (index: number) => {
    onChange?.(
      produce(value!, (draft) => {
        draft?.splice(index, 1);
      }),
    );
  };

  const handleAdd = () => {
    if (value) {
      onChange?.(
        produce(value!, (draft) => {
          draft.push('');
        }),
      );
    } else {
      onChange?.(['']);
    }
  };

  return (
    <Space direction="vertical">
      {value?.map((val, index) => (
        <Space key={index}>
          <Input value={val} onChange={(e) => handleChange(e.target.value, index)} />
          {value.length > 1 && (
            <Button type="link" onClick={() => handleDelete(index)}>
              删除
            </Button>
          )}
        </Space>
      ))}

      <Button type="dashed" onClick={handleAdd}>
        新增一行
      </Button>
    </Space>
  );
}
