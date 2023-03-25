import reader from '../reader';

test('check function json', async (done) => {
  const result = await reader().then((data) => reader(data));
  expect(result).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
  done();
});
