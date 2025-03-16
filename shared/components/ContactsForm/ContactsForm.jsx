import React from "react";
import { Mail, Phone, CircleUserRound, MessageCircleMore } from "lucide-react";
import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formWrapper}>
        <label htmlFor="name" className={styles.formLabel}>
          Ім'я
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="text"
            name="name"
            required
            placeholder="Ваше ім'я"
            className={styles.formInputField}
            id="name"
            autoComplete="off"
          />
          <CircleUserRound className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <div className={styles.formInputWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Ваш Email"
            className={styles.formInputField}
            id="email"
            autoComplete="off"
          />
          <Mail className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="phone" className={styles.formLabel}>
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
            id="phone"
            autoComplete="off"
          />
          <Phone className={styles.formIcon} />
        </div>
      </div>

      <div className={styles.formWrapper}>
        <label htmlFor="message" className={styles.formLabel}>
          Коментар
        </label>
        <div className={styles.formInputWrapper}>
          <textarea
            name="message"
            placeholder="Ваш коментар..."
            className={styles.formInputField}
            id="message"
          ></textarea>
          <MessageCircleMore className={styles.formIcon} />
        </div>
      </div>

      <button type="submit" className={styles.formButton}>
        Замовити проект
      </button>
    </form>
  );
};

export default ContactsForm;
