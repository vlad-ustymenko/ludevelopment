import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section id="services" className={styles.container}>
      <SectionTitle
        title="Послуги"
        number="07"
        lineColor="var(--accent)"
      ></SectionTitle>
      <div className={styles.servicesWrapper}>
        <Image
          src="/images/services/3.webp"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
          loading="lazy"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>Девелопмент та інвестиційний аналіз</h2>
          <div className={styles.text}>
            Ми проводимо глибокий аналіз ринку та оцінку інвестиційної
            привабливості проєктів, допомагаючи ефективно планувати їх
            реалізацію.
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>Аналіз ринку та вибір оптимальної локації:</p>
                <span>
                  Визначаємо перспективні місця для інвестування, враховуючи
                  демографічні та економічні фактори.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Оцінка інвестиційної привабливості проєкту:</p>
                <span>
                  Аналізуємо фінансові ризики та прибутковість, щоб мінімізувати
                  можливі втрати.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Розробка бізнес-плану та фінансової моделі:</p>
                <span>
                  Створюємо прогнози доходів, витрат і рентабельності для
                  стратегічного розвитку.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Проєктування та архітектура</h2>
          <div className={styles.text}>
            Ми створюємо ефективні та естетичні рішення для будівництва,
            поєднуючи функціональність, сучасні технології та естетику.
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>Концептуальне проєктування:</p>
                <span>
                  Розробляємо ідею майбутнього об’єкта, визначаючи його стиль,
                  функціональність та відповідність потребам.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Архітектурне та інженерне проєктування:</p>
                <span>
                  Створюємо детальні креслення та технічну документацію для
                  реалізації проєкту.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Дизайн інтер’єру та благоустрій територій:</p>
                <span>
                  Формуємо комфортний внутрішній простір і гармонійне зовнішнє
                  середовище.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/images/services/1.webp"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
          loading="lazy"
        ></Image>
      </div>
      <div className={styles.servicesWrapper}>
        <Image
          src="/images/services/4.webp"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
          loading="lazy"
        ></Image>
        <div className={styles.content}>
          <h2 className={styles.title}>Отримання дозвільної документації</h2>
          <div className={styles.text}>
            Забезпечуємо повний супровід у процесі оформлення необхідних
            документів для реалізації будівельних проєктів.
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>Узгодження містобудівних умов та обмежень:</p>
                <span>
                  Готуємо та подаємо документи для отримання містобудівних умов,
                  відповідно до законодавчих норм.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Отримання дозволів на будівництво:</p>
                <span>
                  Супроводжуємо процес отримання всіх необхідних дозволів для
                  початку будівельних робіт.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Взаємодія з державними органами:</p>
                <span>
                  Координуємо комунікацію з держструктурами для прискорення та
                  спрощення бюрократичних процедур.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.servicesWrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>Будівництво та генеральний підряд</h2>
          <div className={styles.text}>
            Забезпечуємо якісну та ефективну реалізацію будівельних проєктів на
            всіх етапах.
            <ul className={styles.contentList}>
              <li className={styles.contentListItem}>
                <p>Управління будівельним процесом:</p>
                <span>
                  Організовуємо та контролюємо всі роботи для дотримання
                  термінів і бюджету.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Контроль якості та відповідності проєкту:</p>
                <span>
                  Перевіряємо кожен етап будівництва на відповідність проєктній
                  документації та стандартам.
                </span>
              </li>
              <li className={styles.contentListItem}>
                <p>Використання сучасних технологій і матеріалів:</p>
                <span>
                  Застосовуємо інноваційні рішення для підвищення довговічності
                  та енергоефективності будівель.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/images/services/2.webp"
          alt="services"
          className={styles.image}
          width={500}
          height={400}
          loading="lazy"
        ></Image>
      </div>
    </section>
  );
};

export default Services;
