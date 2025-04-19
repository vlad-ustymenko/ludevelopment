"use client";
import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Check } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";
import IMask from "imask";
import { useModalContext } from "@/context/ModalContext";
import { useTranslations } from "next-intl";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const t = useTranslations("Feedback");
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [checkboxRequire, setCheckboxRequire] = useState(false);
  const [sending, setSending] = useState(false);
  const { setActiveModal, setLoading } = useModalContext();
  const phoneInputRef = useRef(null);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (phoneInputRef.current) {
      const mask = IMask(phoneInputRef.current, {
        mask: "+38 (000) 000-00-00",
      });

      mask.on("accept", () => {
        setValue("phone", mask.value, { shouldValidate: true });
      });

      return () => mask.destroy();
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    if (!activeCheckbox) {
      setCheckboxRequire(true);
      return;
    }

    setActiveModal(true);
    setLoading(true);
    setSending(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setActiveCheckbox(false);
        setLoading(false);
      } else {
        alert(t("error"));
        setSending(false);
        setLoading(false);
      }
    } catch (error) {
      alert("Щось пішло не так. Спробуйте пізніше.");
    } finally {
      setSending(false);
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "name",
      placeholder: t("name"),
      autoComplete: "name",
      rules: { required: t("required") },
    },
    {
      name: "email",
      placeholder: t("email"),
      autoComplete: "email",
      rules: {
        required: t("required"),
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: t("emailFormat"),
        },
      },
    },
    {
      name: "phone",
      placeholder: t("phone"),
      autoComplete: "tel",
      isPhone: true,
      rules: {
        required: t("required"),
        pattern: {
          value: /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
          message: t("phoneFormat"),
        },
      },
    },
    {
      name: "comment",
      placeholder: t("comment"),
      autoComplete: "off",
    },
  ];

  return (
    <section id="feedback" className={styles.container}>
      <SectionTitle title={t("title")} number="05" />
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ name, placeholder, autoComplete, rules, isPhone }) => (
          <label key={name} className={styles.label}>
            <Controller
              name={name}
              control={control}
              defaultValue=""
              rules={rules}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`${styles.input} ${
                      errors[name] ? styles.inputError : ""
                    }`}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    ref={isPhone ? phoneInputRef : null}
                    onChange={(e) => {
                      if (name === "comment") {
                        const sanitizedValue = e.target.value.replace(
                          /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ0-9\s.,!?()'"-]/g,
                          ""
                        );
                        field.onChange(sanitizedValue);
                      } else {
                        field.onChange(e);
                      }
                    }}
                  />
                  {errors[name] && (
                    <span className={styles.requiredSpan}>
                      {errors[name].message}
                    </span>
                  )}
                </>
              )}
            />
          </label>
        ))}
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
            {t("checkbox")}
            <a href="#" className={styles.personalDataLink}>
              {t("privacy")}
            </a>
          </p>
        </div>

        <button
          type="button"
          className={styles.button}
          onClick={() => handleSubmit(onSubmit)()}
          disabled={sending}
          style={{ backgroundColor: sending && "gray" }}
        >
          {sending ? t("sending") : t("button")}
        </button>
      </div>
    </section>
  );
};

export default Feedback;
