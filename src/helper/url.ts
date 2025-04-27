export function bucketUrl(image: string) {
  const host = process.env.NEXT_PUBLIC_HYPE_ASSETS_IMAGE
  return `${host}/lovetimeline/${image}`
}