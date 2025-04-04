"use client";
import React, { useState, useRef, useMemo, useEffect } from "react";
import IMask from "imask";
import {
  Check,
  Mail,
  Phone,
  CircleUserRound,
  MessageCircleMore,
} from "lucide-react";
import { useModalContext } from "@/context/ModalContext";
import { useForm, Controller } from "react-hook-form";
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
    setValue,
  } = useForm();

  useEffect(() => {
    if (phoneInputRef.current) {
      const mask = IMask(phoneInputRef.current, {
        mask: "+38 (000) 000-00-00",
      });

      mask.on("accept", () => {
        setValue("phoneContact", mask.value, { shouldValidate: true });
      });

      return () => mask.destroy();
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    if (!activeCheckbox) {
      setCheckboxRequire(true);
      return;
    }

    try {
      setActiveModal(true);
      setLoading(true);
      setSending(true);
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nameContact,
          email: data.emailContact,
          phone: data.phoneContact,
          comment: data.commentContact,
        }),
      });

      if (response.ok) {
        reset();
        setActiveCheckbox(false);
      } else {
        alert("Помилка при відправці форми.");
      }
    } catch (error) {
      console.error("Помилка:", error);
      alert("Щось пішло не так. Спробуйте пізніше.");
    } finally {
      setLoading(false);
      setSending(false);
    }
  };

  const formFields = useMemo(
    () => [
      {
        name: "nameContact",
        label: "Ім'я",
        icon: CircleUserRound,
        pattern: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ' ]+$/,
        error: "Введіть коректне ім'я",
      },
      {
        name: "emailContact",
        label: "Email",
        icon: Mail,
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        error: "Невірний формат email",
      },
      {
        name: "phoneContact",
        label: "Телефон",
        icon: Phone,
        ref: phoneInputRef,
        pattern: /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        error: "Некоректний номер",
      },
    ],
    []
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, label, icon: Icon, pattern, error, ref }) => (
        <div key={name} className={styles.formWrapper}>
          <label htmlFor={name} className={styles.formLabel}>
            {label}
          </label>
          <div className={styles.formInputWrapper}>
            <Controller
              name={name}
              control={control}
              defaultValue=""
              rules={{
                required: `*Це поле обов’язкове`,
                pattern: { value: pattern, message: error },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id={name}
                  ref={ref}
                  className={styles.formInputField}
                  placeholder={`${label}*`}
                />
              )}
            />
            {errors[name] && (
              <span className={styles.requiredSpan}>
                {errors[name].message}
              </span>
            )}
            <Icon className={styles.formIcon} />
          </div>
        </div>
      ))}

      <div className={styles.formWrapper}>
        <label htmlFor="commentContact" className={styles.formLabel}>
          Коментар
        </label>
        <div className={styles.formInputWrapper}>
          <Controller
            name="commentContact"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                id="commentContact"
                className={styles.formInputField}
                placeholder="Коментар"
              />
            )}
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
          Даю згоду на обробку{" "}
          <a href="#" className={styles.personalDataLink}>
            персональних даних
          </a>
        </p>
      </div>

      <button
        aria-label="submit"
        type="submit"
        className={styles.formButton}
        disabled={sending}
        style={{ backgroundColor: sending ? "gray" : "" }}
      >
        {sending ? "Відправка..." : "Замовити проект"}
      </button>
    </form>
  );
};

export default ContactsForm;
