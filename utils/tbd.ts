import type { Info } from '~/types/portfolio';

/** Marks a value as "to be confirmed" so it renders with a yellow tag. */
export const tbd = (text: string): Info => ({ tbd: text });

export const isTbd = (value: Info): value is { tbd: string } => typeof value === 'object' && 'tbd' in value;

export const infoText = (value: Info): string => (isTbd(value) ? value.tbd : value);
