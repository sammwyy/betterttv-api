export default interface Emote {
    id: string;
    code: string;
    imageType: "png" | "gif";
    animated: boolean;
    src: {
        low: string;
        mid: string;
        high: string;
    };
    userId?: string;
    user?: {
        id: string;
        name: string;
        displayName: string;
        providerId: string;
    }
}