import { EditableProTable } from '@ant-design/pro-components';
import { columns } from './config';
import { nanoid } from 'nanoid';

async function mockFechData() {
  return {
    code: 200,
    data: {
      total: 100,
      lsit: [
        {
          id: 1,
          title: '上海个人转租！独厨卫一居室！1900每月！急',
          content: `个人转租！！个人转租！！个人转租！！
地址是在6号线东靖路地铁，到互联宝地，得物，美团仅需20分钟，到陆家嘴，世纪大道仅需30分钟。
房子价格是1900每月押一付一，电是独立电表自己用多少手机上都可以看得到。
可以做饭，不喜欢和别人共用厕所的朋友可以看过来，卫生间就在自己房间里面，也不用出去，超级方便。
适合短期实习的同学们，或者刚到上海的宝子们，续签的话也是可以和房东沟通的。
小区很安全，电梯有监控，小区旁边就是派出所，安全感满满。`,
          tags: ['自由租房', '干净'],
          cover:
            'https://sns-webpic-qc.xhscdn.com/202411171748/ac10b11d0df91eae3e9cbe5a1408b6fd/1040g2sg319l2vog4nadg5poge80ncchr85kmaho!nd_dft_wgth_webp_3',
          swiper: [
            'https://sns-webpic-qc.xhscdn.com/202411171748/ac10b11d0df91eae3e9cbe5a1408b6fd/1040g2sg319l2vog4nadg5poge80ncchr85kmaho!nd_dft_wgth_webp_3',
            'https://sns-webpic-qc.xhscdn.com/202411171748/46eb74293ca48c5f02f1c9b0e1e940f4/1040g2sg319l2vog4nad05poge80ncchr01pfcno!nd_dft_wgth_webp_3',
          ],
        },
      ],
    },
    msg: 'ok',
    traceId: Date.now().toString(),
  };
}

export default function Index() {
  return (
    <div>
      <EditableProTable
        columns={columns}
        rowKey={'id'}
        recordCreatorProps={{
          record: {
            id: nanoid(),
            tableEntityType: 'add', // 新增一行
          },
        }}
        request={async () => {
          try {
            const { code, data } = await mockFechData();

            return {
              success: code === 200,
              total: data.total,
              data: data.lsit,
            };
          } catch (e) {
            return {
              success: false,
            };
          }
        }}
        editable={{
          onSave: async () => {
            return Promise.reject(new Error('222'));
          },
          actionRender: (row, config, defaultDoms) => {
            return [defaultDoms.save, defaultDoms.cancel];
          },
        }}
      />
    </div>
  );
}
