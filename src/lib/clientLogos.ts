import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { ClientLogo } from "@/components/sections/TrustedLogos";

const LOGO_WALL_QUERY = `*[_type == "logoWall"][0] {
  logos
}`;

type LogoWallImage = Parameters<typeof urlFor>[0] & {
  _key: string;
  name?: string;
  alt?: string;
};

type LogoWallDoc = {
  logos?: LogoWallImage[];
};

/**
 * Client logos managed in Sanity Studio. Returns an empty array when Sanity is
 * unreachable or nothing is published, so callers render without logos rather
 * than with broken images.
 */
export async function getClientLogos(limit?: number): Promise<ClientLogo[]> {
  try {
    const doc = await client.fetch<LogoWallDoc | null>(LOGO_WALL_QUERY);
    const logos = (doc?.logos ?? [])
      .filter((logo) => logo.name)
      .map((logo) => ({
        id: logo._key,
        name: logo.name ?? logo.alt ?? "Client logo",
        src: urlFor(logo).width(300).url(),
      }));

    return typeof limit === "number" ? logos.slice(0, limit) : logos;
  } catch {
    return [];
  }
}
