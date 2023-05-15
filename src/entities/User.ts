import Emote from "./Emote";

export default interface User {
    id: string;
    bots: string[];
    avatar: string;
    channelEmotes: Emote[];
    sharedEmotes: Emote[];
}