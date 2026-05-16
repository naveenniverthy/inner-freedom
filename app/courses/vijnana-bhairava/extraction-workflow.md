# Vijnana Bhairava Extraction and Verification Workflow

This workflow governs how new Vijnana Bhairava dharanas are added to the
course. The course is source-first: every published practice should grow from
the uploaded source text, then move through review before being marked
verified.

No Sanskrit or verse mapping should be invented or approximated.

## Official Workflow

1. Locate the verse in the uploaded PDF.
2. Verify the verse number against the source text.
3. Extract the Sanskrit carefully, preserving the source reading.
4. Verify the transliteration against the source text or a reliable reviewed
   transliteration.
5. Add a literal translation that stays close to the source meaning.
6. Create a plain English rendering for accessibility and reflection, clearly
   separate from the literal translation.
7. Write contemplative commentary in the calm MokshaKeys tone, without
   presenting interpretation as source text.
8. Add grounded practice guidance that follows the verse without exaggeration.
9. Add source notes describing what was checked, what remains uncertain, and
   which references were consulted.
10. Mark `sourceStatus: "verified"` only after Sanskrit, verse number,
    transliteration, and literal translation have all been reviewed.

## Verification Standard

Use `sourceStatus: "needs-review"` whenever any of the following remain
uncertain:

- Verse number or verse range
- Sanskrit reading
- Transliteration
- Literal translation
- Relationship between the verse and the practice guidance

Use `sourceStatus: "verified"` only when the source record is complete and has
been checked against the uploaded PDF.

## Content Boundaries

Source text, literal translation, interpretive rendering, commentary, and
practice guidance must remain distinct. The reader should always be able to
tell what comes from the source and what is MokshaKeys commentary.

Do not add mystical, medical, psychological, or historical claims that are not
supported by the source review.
