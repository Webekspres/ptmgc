export const LOGO_URL = "/logo-mgc-transparent.png";
export const LOGO_MARK_URL = "/logo-mgc.png";
export const PHONE = "+62-267-4871905";
export const PHONE_URL = "tel:+622674871905";
export const EMAIL = "info@ptmgc.co.id";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const WHATSAPP = "622674871905";
export const WHATSAPP_TEXT =
  "Halo, saya tertarik dengan layanan PT Mustika Galuh Cakrawala (MGC). Saya ingin berkonsultasi mengenai proyek. Mohon informasinya lebih lanjut. Terima kasih.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
export const CONTACT_URL = WHATSAPP_URL;

export const NAV = [
  { id: "about", label: "Perusahaan" },
  { id: "services", label: "Layanan" },
  { id: "industries", label: "Industri" },
  { id: "projects", label: "Proyek" },
  { id: "process", label: "Proses Kerja" },
  { id: "contact", label: "Kontak" },
] as const;
