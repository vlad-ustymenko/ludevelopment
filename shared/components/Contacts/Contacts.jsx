import { MapPin, Mail, Phone } from "lucide-react";
import ContactsForm from "../ContactsForm/ContactsForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import { socialLinks } from "../../../assets/socialLinks/socialLinks.js";
import { useTranslations } from "next-intl";
import styles from "./Contacts.module.css";

const Contacts = () => {
  const t = useTranslations("Contacts");
  return (
    <section id="contacts" className={styles.container}>
      <SectionTitle title={t("title")} number="08" blackBG />
      <section className={styles.contacts}>
        <div className={styles.content}>
          <div className={styles.title}>{t("subtitle")}</div>

          <ul className={styles.contactsList}>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <MapPin className={styles.icon} />
              </div>
              <address className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>
                  {t("addressTitle")}
                </h2>
                <a
                  href="https://maps.app.goo.gl/MSd2sphvoWWAEeDd7"
                  className={styles.contactsItemsSubtitle}
                  target="_blank"
                >
                  {t("address")}
                </a>
              </address>
            </li>
            <li className={styles.contactsItems}>
              <div className={styles.contactsItemsIcon}>
                <Phone className={styles.icon} />
              </div>
              <div className={styles.contactsItemsWrapper}>
                <h2 className={styles.contactsItemsTitle}>{t("phoneTitle")}</h2>
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
