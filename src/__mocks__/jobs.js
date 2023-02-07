import mock from 'src/utils/mock';
import wait from 'src/utils/wait';
import jobs from './data.json';

mock.onGet('/api/jobs').reply(async config => {
  try {
    await wait(300);

    return [200, jobs];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
