export const contactBasic = {
  headline: "Hafðu samband",
  subheading: "Sendu okkur línu og við svörum eins fljótt og hægt er.",
  phone: { label: "Sími:", value: "555 1234", href: "tel:5551234" },
  email: {
    label: "Netfang:",
    value: "birkir@mtorg.is",
    href: "mailto:birkir@mtorg.is",
  },
  form: {
    nameLabel: "Nafn",
    emailLabel: "Netfang",
    phoneLabel: "Símanúmer",
    messageLabel: "Skilaboð",
    submitLabel: "Senda skilaboð",
  },
};

export type ContactBasicType = typeof contactBasic;
