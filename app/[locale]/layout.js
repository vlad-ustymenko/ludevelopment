import { MenuProvider } from "@/context/MenuContext";
import { ModalProvider } from "@/context/ModalContext";

export default async function LocaleLayout({ children }) {
  return (
    <ModalProvider>
      <MenuProvider>{children}</MenuProvider>
    </ModalProvider>
  );
}
