export function getRarityDisplayText(rarity: string) {
    if(rarity.toLowerCase() === "veryrare") {
        return "Very Rare";
    }
    return rarity;
}