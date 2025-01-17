import type { ReadSignal } from 'maverick.js';

export type DefaultLayoutWord =
  | 'AirPlay'
  | 'Audio'
  | 'Auto'
  | 'Background Color'
  | 'Background Opacity'
  | 'Black'
  | 'Blue'
  | 'Captions'
  | 'Chapters'
  | 'Closed-Captions Off'
  | 'Closed-Captions On'
  | 'Connected'
  | 'Continue'
  | 'Connecting'
  | 'Cyan'
  | 'Default'
  | 'Disconnected'
  | 'Display Background Color'
  | 'Display Background Opacity'
  | 'Enter Fullscreen'
  | 'Enter PiP'
  | 'Exit Fullscreen'
  | 'Exit PiP'
  | 'Font Family'
  | 'Font Size'
  | 'Font Styles'
  | 'Google Cast'
  | 'Green'
  | 'LIVE'
  | 'Magenta'
  | 'Mute'
  | 'Normal'
  | 'Off'
  | 'Pause'
  | 'Play'
  | 'Quality'
  | 'Red'
  | 'Replay'
  | 'Reset'
  | 'Seek Backward'
  | 'Seek Forward'
  | 'Seek'
  | 'Settings'
  | 'Skip To Live'
  | 'Speed'
  | 'Text Color'
  | 'Text Opacity'
  | 'Text Shadow'
  | 'Unmute'
  | 'Volume'
  | 'White'
  | 'Yellow';

export type DefaultLayoutTranslations = {
  [word in DefaultLayoutWord]: string;
};

export function i18n(
  translations: ReadSignal<Partial<DefaultLayoutTranslations> | null>,
  word: string,
) {
  return translations()?.[word] ?? word;
}
