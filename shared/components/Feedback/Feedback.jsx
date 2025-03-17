"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Check } from "lucide-react";
import styles from "./Feedback.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Feedback = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!activeCheckbox) {
      alert("Ви повинні погодитися на обробку персональних даних!");
      return;
    }

    try {
      setSending(true);
      const formData = { ...data };
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        reset();
        setActiveCheckbox(false);
        // setActiveFormModal(false);
      } else {
        alert("Помилка при відправці форми.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Щось пішло не так. Спробуйте пізніше.");
      // setActiveFormModal(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="feedback" className={styles.container}>
      <SectionTitle
        title="Зворотній зв'язок"
        number="03"
        color="var(--background)"
      />
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <label
          className={`${styles.label} ${errors.name ? styles.required : ""}`}
        >
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Це поле обов’язкове" }}
            render={({ field }) => (
              <input
                {...field}
                className={`${styles.input} ${
                  errors.name && styles.inputError
                }`}
                id="name"
                autoComplete="name"
                placeholder="Ім’я*"
                onChange={(e) => {
                  const value = e.target.value.replace(
                    /[^a-zA-Zа-яА-ЯіІїЇєЄґҐ' ]/g,
                    ""
                  );
                  field.onChange(value);
                }}
              />
            )}
          />
        </label>
        <label
          className={`${styles.label} ${errors.email ? styles.required : ""}`}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Це поле обов’язкове",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Невірний формат email",
              },
            }}
            render={({ field }) => (
              <input
                className={`${styles.input} ${
                  errors.email && styles.inputError
                }`}
                {...field}
                id="email"
                autoComplete="email"
                placeholder="Email"
              />
            )}
          />
        </label>

        <label
          className={`${styles.label} ${errors.phone ? styles.required : ""}`}
        >
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Це поле обов’язкове",
              pattern: {
                value: /^\+38 \(0\d{2}\) \d{3}-\d{2}-\d{2}$/,
                message: "Некоректний номер",
              },
            }}
            render={({ field }) => {
              const [isFocused, setIsFocused] = useState(false);

              const formatPhoneNumber = (input) => {
                // Видаляємо всі нецифрові символи
                let numbers = input.replace(/\D/g, "");

                if (numbers.length === 0) return "";

                // Додаємо початковий код країни
                let formatted = "+38 (0";

                // Додаємо код оператора (XXX)
                if (numbers.length > 3) {
                  formatted += numbers.slice(3, 5);
                }

                // Додаємо першу групу (XXX)
                if (numbers.length > 5) {
                  formatted += ") " + numbers.slice(5, 8);
                }

                // Додаємо другу групу (XX)
                if (numbers.length > 8) {
                  formatted += "-" + numbers.slice(8, 10);
                }

                // Додаємо третю групу (XX)
                if (numbers.length > 10) {
                  formatted += "-" + numbers.slice(10, 12);
                }

                return formatted;
              };

              const handleChange = (e) => {
                const rawValue = e.target.value;
                field.onChange(formatPhoneNumber(rawValue));
              };

              const handleFocus = () => {
                setIsFocused(true);
                if (!field.value) {
                  field.onChange("+38 (0");
                }
              };

              const handleBlur = () => {
                setIsFocused(false);
                if (field.value === "+38 (0") {
                  field.onChange("");
                }
              };

              return (
                <input
                  {...field}
                  className={`${styles.input} ${
                    errors.email && styles.inputError
                  }`}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+38 (0__) ___-__-__"
                  maxLength={19}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              );
            }}
          />
        </label>

        <label className={styles.label}>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                className={styles.input}
                placeholder="Коментар"
              />
            )}
          />
        </label>
      </form>

      <div className={styles.buttonWrapper}>
        <div className={styles.personalDataWrapper}>
          <div
            className={`${styles.personalDataCheckbox} ${
              activeCheckbox && styles.active
            }`}
            onClick={() => setActiveCheckbox(!activeCheckbox)}
          >
            {activeCheckbox && <Check className={styles.checked} />}
          </div>
          <p className={styles.personalDataText}>
            Даю згоду на обробку
            <a href="#" className={styles.personalDataLink}>
              персональних даних
            </a>
          </p>
        </div>

        <button
          type="button"
          className={styles.button}
          onClick={() => handleSubmit(onSubmit)()}
          disabled={sending}
          style={{
            backgroundColor: sending && "gray",
          }}
        >
          {sending ? "Відправка..." : "Замовити проект"}
        </button>
      </div>
    </section>
  );
};

export default Feedback;
