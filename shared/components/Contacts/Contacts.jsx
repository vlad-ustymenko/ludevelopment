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
                  rel="noopener noreferrer"
                >
                  Київ , пр-т Лобановського, 4Ж, офіс 198
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Phone className={styles.icon} />
              </div>
              <address className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>Телефон:</h2>
                <a
                  href="tel:+380953195758"
                  className={styles.contactsItemsSubtitle}
                >
                  +38 (095) 319-57-58
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
                  href="mailto:lineup.kyiv@gmail.com"
                  className={styles.contactsItemsSubtitle}
                >
                  lineup.kyiv@gmail.com
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <ul className={styles.socialList}>
                <li>
                  <a
                    href="https://facebook.com/lineupdesignstudio/"
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
                    href="https://www.instagram.com/lineup_kyiv/?igshid=udhv2um4b8oc"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="instagram page"
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
                    href="https://t.me/linup_kyiv"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="telegram"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.socialImage}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://vm.tiktok.com/ZMeVgjmnL/"
                    className={styles.socialLink}
                    target="_blank"
                    aria-label="tiktiok page"
                  >
                    <svg
                      fill="#000000"
                      width="24px"
                      height="24px"
                      viewBox="0 0 512 512"
                      id="icons"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.socialImage}
                    >
                      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
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
