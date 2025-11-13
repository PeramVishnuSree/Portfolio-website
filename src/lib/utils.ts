export function cn(
  ...values: Array<string | undefined | null | false | Record<string, boolean>>
) {
  return values
    .flatMap((value) => {
      if (!value) return [];
      if (typeof value === "string") return value.split(" ");
      return Object.entries(value)
        .filter(([, flag]) => Boolean(flag))
        .map(([token]) => token);
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

