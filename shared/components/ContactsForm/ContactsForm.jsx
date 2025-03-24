"use client";
import React, { useState, useRef, useEffect } from "react";
import IMask from "imask";
import { Check } from "lucide-react";
import { useModalContext } from "@/context/ModalContext";
import { useForm, Controller } from "react-hook-form";
import { Mail, Phone, CircleUserRound, MessageCircleMore } from "lucide-react";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
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
    <form className={styles.form}>
      <div className={styles.formWrapper}>
        <label htmlFor="contactName" className={styles.formLabel}>
          Ім'я
        </label>
        <div className={styles.formInputWrapper}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "*Це поле обов’язкове" }}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  className={styles.formInputField}
                  id="contactName"
                  autoComplete="name"
                  placeholder="Ваше ім'я*"
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
          <CircleUserRound className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactEmail" className={styles.formLabel}>
          Email
        </label>
        <div className={styles.formInputWrapper}>
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
                  className={styles.formInputField}
                  {...field}
                  id="contactEmail"
                  autoComplete="email"
                  placeholder="Ваш email*"
                />
                {errors.email && (
                  <span className={styles.requiredSpan}>
                    {errors.email.message}
                  </span>
                )}
              </>
            )}
          />
          <Mail className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactPhone" className={styles.formLabel}>
          Телефон
        </label>
        <div className={styles.formInputWrapper}>
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
                    id="contactPhone"
                    className={styles.formInputField}
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
          <Phone className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactMessage" className={styles.formLabel}>
          Коментар
        </label>
        <div className={styles.formInputWrapper}>
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
                <textarea
                  {...field}
                  id="contactMessage"
                  className={styles.formInputField}
                  placeholder="Коментар"
                  onChange={handleChange}
                />
              );
            }}
          />
          <MessageCircleMore className={styles.formIcon} />
        </div>
      </div>
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
        aria-label="submit"
        type="button"
        className={styles.formButton}
        onClick={() => handleSubmit(onSubmit)()}
        disabled={sending}
        style={{
          backgroundColor: sending && "gray",
        }}
      >
        {sending ? "Відправка..." : "Замовити проект"}
      </button>
    </form>
  );
};

export default ContactsForm;
