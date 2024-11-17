import { Input, Space } from 'antd';
import { produce } from 'immer';
import React from 'react';

interface MutiplyInputProps {
  value?: string[];
  onChange?: (value: string[]) => void;
  style?: React.CSSProperties;
}

export default function Index({ value, onChange, style }: MutiplyInputProps) {
  const handleChange = (val: string, index: number) => {
    onChange?.(
      produce(value!, (draft) => {
        draft.splice(index, 1, val);
      }),
    );
  };

  return (
    <Space direction="vertical" style={style}>
      {value?.map((val, index) => (
        <Input key={index} value={val} onChange={(e) => handleChange(e.target.value, index)} />
      ))}
    </Space>
  );
}
