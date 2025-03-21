"use client";
import { useModalContext } from "@/context/ModalContext";
import { useEffect } from "react";
import { X } from "lucide-react";
import useClickOutside from "@/hooks/useClickOutside";
import styles from "./Modal.module.css";

const Modal = () => {
  const { activeModal, setActiveModal, loading } = useModalContext();

  useEffect(() => {
    const isModalOpen = activeModal;
    document.documentElement.style.overflow = isModalOpen ? "hidden" : "";
  }, [activeModal]);

  const modalRef = useClickOutside(() => setActiveModal(false));

  return (
    <div
      className={
        activeModal
          ? `${styles.container} ${styles.active}`
          : `${styles.container}`
      }
    >
      {loading ? (
        <div className={styles.loader}>
          <div className={styles.loaderOuter}></div>
          <div className={styles.loaderInner}></div>
        </div>
      ) : (
        <div className={styles.contentWrapper} ref={modalRef}>
          <h2 className={styles.title}>Заявку надіслано</h2>
          <p className={styles.content}>
            Дякуємо Вам!
            <br /> Найближчим часом наш менеджер зв'яжеться з Вами.
          </p>
          <X
            className={styles.closeIcon}
            onClick={() => setActiveModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Modal;
