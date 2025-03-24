"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { Check } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import IMask from "imask";
import { useModalContext } from "@/context/ModalContext";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [checkboxRequire, setCheckboxRequire] = useState(false);
  const [sending, setSending] = useState(false);
  const { setActiveModal, setLoading } = useModalContext();
  const phoneInputRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (phoneInputRef.current) {
      IMask(phoneInputRef.current, {
        mask: "+38 (000) 000-00-00",
        placeholder: "_",
      });
    }
  }, []);

  const onSubmit = async (data) => {
    if (!activeCheckbox) {
      setCheckboxRequire(true);
      return;
    }

    try {
      setActiveModal(true);
      setLoading(true);
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
        setLoading(false);
      } else {
        alert("Помилка при відправці форми.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Щось пішло не так. Спробуйте пізніше.");
      setLoading(false);
      setActiveModal(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="feedback" className={styles.container}>
      <SectionTitle
        title="Зворотній зв'язок"
        number="05"
        color="var(--background)"
      />
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "*Це поле обов’язкове" }}
            render={({ field }) => (
              <>
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
                {errors.name && (
                  <span className={styles.requiredSpan}>
                    {errors.name.message}
                  </span>
                )}
              </>
            )}
          />
        </label>
        <label className={styles.label}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "*Це поле обов’язкове",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Невірний формат email",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  {...field}
                  id="email"
                  autoComplete="email"
                  placeholder="Email*"
                />
                {errors.email && (
                  <span className={styles.requiredSpan}>
                    {errors.email.message}
                  </span>
                )}
              </>
            )}
          />
        </label>

        <label className={styles.label}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Це поле обов’язкове",
              pattern: {
                value: /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                message: "Некоректний номер",
              },
            }}
            render={({ field }) => {
              return (
                <>
                  <input
                    {...field}
                    className={`${styles.input} ${
                      errors.phone && styles.inputError
                    }`}
                    type="tel"
                    ref={phoneInputRef}
                    autoComplete="tel"
                    placeholder="Телефон* +38 "
                    onChange={(e) => {
                      field.onChange(e.target.value);
                    }}
                  />
                  {errors.phone ? (
                    <span className={styles.requiredSpan}>
                      {errors.phone.message}
                    </span>
                  ) : null}
                </>
              );
            }}
          />
        </label>

        <label className={styles.label}>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            render={({ field }) => {
              const handleChange = (e) => {
                const value = e.target.value.replace(
                  /[^a-zA-Zа-яА-Я0-9 *]/g,
                  ""
                );
                field.onChange(value);
              };

              return (
                <input
                  {...field}
                  className={styles.input}
                  placeholder="Коментар"
                  onChange={handleChange}
                />
              );
            }}
          />
        </label>
      </form>

      <div className={styles.buttonWrapper}>
        <div className={styles.personalDataWrapper}>
          <div
            className={`${styles.personalDataCheckbox} ${
              activeCheckbox && styles.active
            } ${checkboxRequire && styles.checkboxRequire}`}
            onClick={() => {
              setActiveCheckbox(!activeCheckbox);
              setCheckboxRequire(false);
            }}
          >
            {activeCheckbox && <Check className={styles.checked} />}
          </div>
          <p
            className={`${styles.personalDataText} ${
              checkboxRequire && styles.textRequire
            }`}
          >
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
