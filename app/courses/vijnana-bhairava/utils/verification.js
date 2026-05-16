function hasText(value) {
  if (Array.isArray(value)) {
    return value.some((item) => hasText(item));
  }

  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  return typeof value === "string" && value.trim().length > 0;
}

export function isVerified(dharana) {
  return dharana?.sourceStatus === "verified";
}

export function hasLiteralTranslation(dharana) {
  const literalTranslation = dharana?.literalTranslation;
  const literalText = Array.isArray(literalTranslation)
    ? literalTranslation.join(" ")
    : literalTranslation;

  return (
    hasText(literalText) &&
    !literalText.toLowerCase().includes("pending source verification")
  );
}

export function hasCompleteSourceData(dharana) {
  return Boolean(
    hasText(dharana?.sanskrit) &&
      hasText(dharana?.transliteration) &&
      (hasText(dharana?.verseNumber) || hasText(dharana?.verseRange)) &&
      hasText(dharana?.sourceNote),
  );
}

export function needsReview(dharana) {
  return !isVerified(dharana) || !hasCompleteSourceData(dharana);
}
