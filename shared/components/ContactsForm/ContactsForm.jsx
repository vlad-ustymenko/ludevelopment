"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { Mail, Phone, CircleUserRound, MessageCircleMore } from "lucide-react";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);
  const [checkboxRequire, setCheckboxRequire] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!activeCheckbox) {
      setCheckboxRequire(true);
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
                value: /^\+38\d{10}$/,
                message: "Некоректний номер",
              },
            }}
            render={({ field }) => {
              const phoneLength = field.value?.length || 0;

              const formatPhoneNumber = (input) => {
                let formatted = "+38";
                formatted += input.slice(3, 20).replace(/\D/g, "");
                return formatted;
              };

              const handleChange = (e) => {
                const rawValue = e.target.value;
                field.onChange(formatPhoneNumber(rawValue));
              };

              const handleFocus = () => {
                if (!field.value) {
                  field.onChange("+38");
                }
              };

              const handleBlur = () => {
                if (field.value === "+38") {
                  field.onChange("");
                }
              };

              return (
                <>
                  <input
                    {...field}
                    className={styles.formInputField}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Телефон* +38 "
                    maxLength={13}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.phone ? (
                    <span className={styles.requiredSpan}>
                      {field.value.length < 13
                        ? `*Не вистачає ${13 - phoneLength} ${
                            13 - phoneLength > 4 ? "цифр" : "цифри"
                          }`
                        : errors.phone.message}
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
