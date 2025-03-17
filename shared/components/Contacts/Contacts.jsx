import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import ContactsForm from "../ContactsForm/ContactsForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.container}>
      <SectionTitle
        title="Контакти"
        number="06"
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
                  href="https://www.google.com/maps/place/%D0%A1%D1%83%D0%BC%D0%B8,+%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+40000/"
                  className={styles.contactsItemsSubtitle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  01001 Україні, Київ, проспект Незалежності, 1
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Phone className={styles.icon} />
              </div>
              <address className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Phone:</h2>
                <a
                  href="tel:+380660084031"
                  className={styles.contactsItemsSubtitle}
                >
                  +380 (XX) XXX-XX-XX
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Mail className={styles.icon} />
              </div>
              <address className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Email:</h2>
                <a
                  href="mailto:vlad.ustimenko@gmail.com"
                  className={styles.contactsItemsSubtitle}
                >
                  line.up@gmail.com
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <ul className={styles.socialList}>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100002126700664"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="facebook page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.socialImage}
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vlad-ustymenko"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="github page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.socialImage}
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ustymenko-dev/"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="linkedin page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.socialImage}
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </li>
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
