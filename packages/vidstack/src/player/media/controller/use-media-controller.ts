import { provideContext, ReadSignal } from 'maverick.js';

import { UseFullscreen, useFullscreen } from '../../../foundation/fullscreen/use-fullscreen';
import type { LogLevel } from '../../../foundation/logger/log-level';
import { useLogPrinter } from '../../../foundation/logger/use-log-printer';
import type { ScreenOrientationLockType } from '../../../foundation/orientation/screen-orientation';
import {
  useScreenOrientation,
  UseScreenOrientation,
} from '../../../foundation/orientation/use-screen-orientation';
import { withMediaFullscreenOptions } from '../provider/media-fullscreen';
import type { MediaProviderElement } from '../provider/types';
import { MediaProviderContext } from '../provider/use-media-provider';
import { MediaStoreContext } from '../store';
import { UseMediaUser, useMediaUser } from '../user';
import type { MediaControllerEventTarget } from './events';
import { useMediaRequestManager } from './use-media-request-manager';
import { useMediaStateManager } from './use-media-state-manager';

/**
 * The media controller acts as a message bus between the media provider and all other components
 * (e.g., UI components).
 *
 * The controller's main responsibilities are:
 *
 * - Providing the media state context down to all child consumers (i.e., UI elements) so they can
 * subscribe to media state signals.
 *
 * - Listening for media request events so it can try and satisfy them (e.g., accepting a play
 * request and satisfying it by calling play on the media provider).
 *
 * - Listening to media events and updating state in the media store.
 */
export function useMediaController(
  $target: ReadSignal<MediaControllerEventTarget | null>,
  { $fullscreenOrientation }: UseMediaControllerProps,
): UseMediaController {
  provideContext(MediaStoreContext);
  provideContext(MediaProviderContext);

  const user = useMediaUser($target),
    orientation = useScreenOrientation($target),
    fullscreen = useFullscreen(
      $target,
      withMediaFullscreenOptions({
        $lockType: $fullscreenOrientation,
        orientation,
      }),
    ),
    logPrinter = __DEV__ ? useLogPrinter($target) : undefined,
    requestManager = useMediaRequestManager($target, user, fullscreen),
    { $mediaProvider } = useMediaStateManager($target, requestManager);

  return {
    user,
    orientation,
    fullscreen,
    get provider() {
      return $mediaProvider();
    },
    get logLevel() {
      return __DEV__ ? logPrinter!.logLevel : 'silent';
    },
    set logLevel(level) {
      if (__DEV__) logPrinter!.logLevel = level;
    },
    enterFullscreen: fullscreen.requestFullscreen,
    exitFullscreen: fullscreen.exitFullscreen,
  };
}

export interface UseMediaControllerProps {
  $fullscreenOrientation: ReadSignal<ScreenOrientationLockType | undefined>;
}

export interface UseMediaController {
  /**
   * The current log level. Values in order of priority are: `silent`, `error`, `warn`, `info`,
   * and `debug`.
   */
  logLevel: LogLevel;
  /**
   * Media user settings which currently supports configuring user idling behavior.
   */
  readonly user: UseMediaUser;
  /**
   * The current media provider element.
   */
  readonly provider: MediaProviderElement | null;
  /**
   * Controls the screen orientation of the current browser window and dispatches orientation
   * change events on this element.
   */
  readonly orientation: UseScreenOrientation;
  /**
   * Controls the fullscreen state of this element and dispatches fullscreen change/error
   * events on this element.
   */
  readonly fullscreen: UseFullscreen;
  /**
   * Attempts to display this element in fullscreen. The promise will resolve if successful, and
   * reject if not.
   */
  enterFullscreen(): Promise<void>;
  /**
   * Attempts to display this element inline by exiting fullscreen.
   */
  exitFullscreen(): Promise<void>;
}