import { useState, useEffect } from "react";

const useDollarRate = () => {
  const [rate, setRate] = useState(0);
  const [rateError, setRateError] = useState("");

  useEffect(() => {
    fetch("/api/getDollarRate")
      .then((res) => {
        if (!res.ok) {
          if (res.status === 500) {
            throw new Error(
              "Помилка отримання, оновіть сторінку через 10 секунд"
            );
          }
        }
        return res.json();
      })
      .then((data) => {
        setRate(data.rate);
        setRateError("");
      })
      .catch((error) => {
        setRateError(error.message);
      });
  }, []);

  return { rate, rateError };
};

export default useDollarRate;
