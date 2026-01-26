// Source - https://stackoverflow.com/a/75145528
// Posted by Daher, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-25, License - CC BY-SA 4.0

import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes))
