import BetterTTV from '../src';

test('Fetch Global Emotes', async () => {
  const emotes = await BetterTTV.getGlobalEmotes();
  expect(emotes.length).toBeGreaterThanOrEqual(10);
  expect(emotes.find((v) => v.code == ":tf:")).not.toBeNull();
});
