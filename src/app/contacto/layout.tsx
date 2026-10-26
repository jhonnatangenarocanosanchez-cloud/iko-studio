import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — IKO+ STUDIO",
  description:
    "Cuéntanos tu proyecto. Respondemos en un máximo de 48 horas hábiles.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
