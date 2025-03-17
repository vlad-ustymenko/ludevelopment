"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Mail, Phone, CircleUserRound, MessageCircleMore } from "lucide-react";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [activeCheckbox, setActiveCheckbox] = useState(false);

  return (
    <form className={styles.form}>
      <div className={styles.formWrapper}>
        <label htmlFor="contactName" className={styles.formLabel}>
          Ім'я
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="text"
            id="contactName"
            name="name"
            required
            placeholder="Ваше ім'я"
            className={styles.formInputField}
            autoComplete="off"
          />
          <CircleUserRound className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactEmail" className={styles.formLabel}>
          Email
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Ваш Email"
            className={styles.formInputField}
            id="contactEmail"
            autoComplete="off"
          />
          <Mail className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactPhone" className={styles.formLabel}>
          Телефон
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+38 (XXX) XXX-XX-XX"
            maxLength="19"
            className={styles.formInputField}
            id="contactPhone"
            autoComplete="off"
          />
          <Phone className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="contactMessage" className={styles.formLabel}>
          Коментар
        </label>
        <div className={styles.formInputWrapper}>
          <textarea
            name="message"
            placeholder="Ваш коментар..."
            className={styles.formInputField}
            id="contactMessage"
          ></textarea>
          <MessageCircleMore className={styles.formIcon} />
        </div>
      </div>
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

      <button type="submit" className={styles.formButton}>
        Замовити проект
      </button>
    </form>
  );
};

export default ContactsForm;
