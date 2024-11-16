import { EditableProTable } from '@ant-design/pro-components';
import { columns } from './config';
import { nanoid } from 'nanoid';

export default function Index() {
  return (
    <div>
      <EditableProTable
        columns={columns}
        rowKey={'id'}
        recordCreatorProps={{
          record: {
            id: nanoid(),
          },
        }}
      ></EditableProTable>
    </div>
  );
}
