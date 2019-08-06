// Simple React Native specific changes

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
}

export const USER_IMAGE_DIR = "avatars"
export const PAYMENT_METHODS = [
  {
    key: "PAYMENT_CASH",
    label: "Cash",
    disabled: false,
  },
  {
    key: "PAYMENT_WALLET",
    label: "Wallet",
    disabled: true,
  },
  {
    key: "PAYMENT_CARD",
    label: "Credit Card",
  },
]
