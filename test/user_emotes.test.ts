import BetterTTV from '../src';

test('Fetch User Emotes', async () => {
  const emotes = await BetterTTV.getUserEmotes('280803646');
  expect(emotes.length).toBeGreaterThanOrEqual(40);
  expect(emotes.find((v) => v.code == "PETTHESAMMWY")).not.toBeNull();
});
