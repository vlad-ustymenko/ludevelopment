"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "../../../src/assets/checkbox.svg";
import styles from "./Feedback.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Feedback = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Форма відправлена:", data);
  };

  return (
    <div id="feedback" className={styles.container}>
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
                className={styles.input}
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
                style={{ borderBottom: errors.name ? "2px solid red" : "" }}
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
              pattern: { value: /^\d{10}$/, message: "Некоректний номер" },
            }}
            render={({ field }) => (
              <input
                {...field}
                className={styles.input}
                id="phone"
                autoComplete="tel"
                type="tel"
                placeholder="Телефон*: 0XX1112233"
                maxLength={10}
                style={{ borderBottom: errors.phone ? "2px solid red" : "" }}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  field.onChange(value);
                }}
              />
            )}
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

      {/* Кнопка під формою */}
      <div className={styles.buttonWrapper}>
        <div className={styles.personalDataWrapper}>
          <div
            className={`${styles.personalDataCheckbox} ${
              activeCheckbox && styles.active
            }`}
            onClick={() => setActiveCheckbox(!activeCheckbox)}
          >
            {activeCheckbox && (
              <Checkbox
                width={24}
                height={24}
                style={{ fill: "var(--accent)" }}
              />
            )}
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
    </div>
  );
};

export default Feedback;
