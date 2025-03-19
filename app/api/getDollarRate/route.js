export async function GET() {
  try {
    const res = await fetch("https://api.monobank.ua/bank/currency");
    if (!res.ok) throw new Error("Помилка отримання даних");

    const data = await res.json();

    // Код валюти USD: 840, UAH: 980
    const usd = data.find(
      (item) => item.currencyCodeA === 840 && item.currencyCodeB === 980
    );

    return Response.json({ rate: usd?.rateSell || usd?.rateBuy });
  } catch (error) {
    return Response.json(
      { error: "Не вдалося отримати курс" },
      { status: 500 }
    );
  }
}
