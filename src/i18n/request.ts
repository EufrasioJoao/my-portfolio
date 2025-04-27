import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Determine the locale from cookies or default to 'en'
  const cookieStore = cookies();
  const localeCookie = (await cookieStore).get("NEXT_LOCALE");
  const locale = localeCookie?.value || "en";

  // Import and return messages for the determined locale
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
