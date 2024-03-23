import type Emoji from "./Emoji"
interface Entry { 
    body: string; 
    emoji: Emoji
    createdAt: Date
    userId: number
}

export default Entry;