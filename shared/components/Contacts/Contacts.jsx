"use client";
import { useMemo } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactsForm from "../ContactsForm/ContactsForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import { socialLinks } from "../../../assets/socialLinks/socialLinks.js";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.container}>
      <SectionTitle
        title="Контакти"
        number="08"
        color="white"
        lineColor="var(--secondAccent)"
      />
      <section className={styles.contacts}>
        <div className={styles.content}>
          <div className={styles.title}>
            Ми на зв’язку 12/7 з 9.00 до 21.00 по буднях та вихідних. Зв’яжіться
            з нами і ми запропонуємо найкращі рішення за вашими бажаннями.
          </div>

          <ul className={styles.contactsList}>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <MapPin className={styles.icon} />
              </div>
              <address className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Адреса:</h2>
                <a
                  href="https://maps.app.goo.gl/MSd2sphvoWWAEeDd7"
                  className={styles.contactsItemsSubtitle}
                  target="_blank"
                >
                  Київ , пр-т Лобановського, 4Ж, офіс 198
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Phone className={styles.icon} />
              </div>
              <div className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Телефон:</h2>
                <a
                  href="tel:+380953195758"
                  className={styles.contactsItemsSubtitle}
                >
                  +38 (095) 319-57-58
                </a>
              </div>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Mail className={styles.icon} />
              </div>
              <div className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Email:</h2>
                <a
                  href="mailto:lineup.kyiv@gmail.com"
                  className={styles.contactsItemsSubtitle}
                >
                  lineup.kyiv@gmail.com
                </a>
              </div>
            </li>
            <li className={styles.contactsItems}>
              <ul className={styles.socialList}>
                {socialLinks.map(({ href, label, icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={styles.socialLink}
                      target="_blank"
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <ContactsForm />
      </section>
    </section>
  );
};

export default Contacts;
