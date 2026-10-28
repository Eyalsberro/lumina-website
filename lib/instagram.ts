export const instagramProfile = "https://www.instagram.com/luminaspeechanddevelopment/";

// Public widget identifier from Elfsight's installation code; no Instagram credentials.
const configuredWidgetId = process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID?.trim()
  ?? "2357ab5a-c85c-4a1f-9bd0-f473866619cb";
export const instagramWidgetId = /^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(configuredWidgetId)
  ? configuredWidgetId
  : "";
