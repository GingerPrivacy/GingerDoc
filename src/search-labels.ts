// Keep the new UI strings together for the future documentation locales.
const en = {
  scope: 'Search in',
  everyday: 'Beginner & everyday guides',
  advanced: 'Advanced guides',
  all: 'All guides',
  hint: 'Start with everyday guides. Choose Advanced guides for technical details.',
  loading: 'Loading search…',
  error: 'Search could not load. Check your connection and try again.',
  retry: 'Try again',
  level: { beginner: 'Beginner', everyday: 'Everyday use', advanced: 'Advanced' },
}

export function searchLabels(_locale: string) {
  return en
}
