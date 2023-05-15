import BetterTTV from '../src';

test('Fetch User Info', async () => {
  const user = await BetterTTV.getUser('280803646');
  expect(user.id).toBe('5f8e0b421b017902db146754');
  expect(user.bots).toContain("streamelements");
});
