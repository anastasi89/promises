import parser from '../parser';

test('check function parser', async (done) => {
  const data = await parser();
  expect(data.byteLength).toBe(180);
  done();
});
