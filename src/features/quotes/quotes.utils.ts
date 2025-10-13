


export async function getAllQuotes() {
    const { quotes } = await fetch(`https://dummyjson.com/quotes`).then(res => res.json())
    return quotes
};

export async function getQuote(id: number | string) {
    const quote = await fetch(`https://dummyjson.com/quotes/${id}`).then(res => res.json())
    return quote
}