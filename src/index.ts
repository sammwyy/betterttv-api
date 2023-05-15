import fetch from 'isomorphic-unfetch';

import Emote from './entities/Emote';
import User from './entities/User';

type APIError = {
  message: string;
  error: string;
  statusCode: number;
}

interface APIResponse {
  data: APIError | unknown;
  status: number;
}

function fixEmoteArray(emotes: Emote[]) {
  for (const emote of emotes) {
    const base = "https://cdn.betterttv.net/emote/" + emote.id;
    emote.src = {
      low: base + "/x1",
      mid: base + "/x2",
      high: base + "/x3"
    }
  }
  return emotes;
}

export class BetterTTVClient {
  private readonly endpoint: string;

  constructor() {
    this.endpoint = 'https://api.betterttv.net/3/';
  }

  public async apiGET(
    path: string,
    headers: Record<string, string> = {},
  ): Promise<APIResponse> {
    if (!headers['X-BTTV-Client']) {
      headers['X-BTTV-Client'] = 'betterttv-api (js)';
    }

    const req = await fetch(this.endpoint + path, {
      headers,
    });
    const data = await req.json();
    return {data, status: req.status};
  }

  async getGlobalEmotes(): Promise<Emote[]> {
    const { data, status } = await this.apiGET('cached/emotes/global');
    if (status == 200) {
      const emotes = data as Emote[];
      return fixEmoteArray(emotes);
    } else {
      throw new Error((data as APIError).message);
    }
  }

  async getUser(userId: string): Promise<User> {
    const { data, status } = await this.apiGET('cached/users/twitch/' + userId);
    if (status == 200) {
      const user = data as User;
      user.channelEmotes = fixEmoteArray(user.channelEmotes);
      user.sharedEmotes = fixEmoteArray(user.sharedEmotes);
      return user;
    } else {
      throw new Error((data as APIError).message);
    }
  }

  async getUserEmotes(userId: string): Promise<Emote[]> {
    const user = await this.getUser(userId);
    return [...user.channelEmotes, ...user.sharedEmotes];
  }
}

const BetterTTV = new BetterTTVClient();
export default BetterTTV;
