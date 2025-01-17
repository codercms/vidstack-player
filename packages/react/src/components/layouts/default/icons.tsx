import * as React from 'react';

import airPlayPaths from 'media-icons/dist/icons/airplay.js';
import arrowLeftPaths from 'media-icons/dist/icons/arrow-left.js';
import chaptersIconPaths from 'media-icons/dist/icons/chapters.js';
import arrowRightPaths from 'media-icons/dist/icons/chevron-right.js';
import googleCastPaths from 'media-icons/dist/icons/chromecast.js';
import ccOnIconPaths from 'media-icons/dist/icons/closed-captions-on.js';
import ccIconPaths from 'media-icons/dist/icons/closed-captions.js';
import exitFullscreenIconPaths from 'media-icons/dist/icons/fullscreen-exit.js';
import enterFullscreenIconPaths from 'media-icons/dist/icons/fullscreen.js';
import musicIconPaths from 'media-icons/dist/icons/music.js';
import muteIconPaths from 'media-icons/dist/icons/mute.js';
import odometerIconPaths from 'media-icons/dist/icons/odometer.js';
import pauseIconPaths from 'media-icons/dist/icons/pause.js';
import exitPIPIconPaths from 'media-icons/dist/icons/picture-in-picture-exit.js';
import enterPIPIconPaths from 'media-icons/dist/icons/picture-in-picture.js';
import playIconPaths from 'media-icons/dist/icons/play.js';
import replayIconPaths from 'media-icons/dist/icons/replay.js';
import seekBackwardIconPaths from 'media-icons/dist/icons/seek-backward-10.js';
import seekForwardIconPaths from 'media-icons/dist/icons/seek-forward-10.js';
import qualityIconPaths from 'media-icons/dist/icons/settings-menu.js';
import settingsIconPaths from 'media-icons/dist/icons/settings.js';
import volumeHighIconPaths from 'media-icons/dist/icons/volume-high.js';
import volumeLowIconPaths from 'media-icons/dist/icons/volume-low.js';

import { Icon } from '../../../icon';

function createIcon(paths: string) {
  function DefaultLayoutIcon(props: DefaultLayoutIconProps) {
    return <Icon paths={paths} {...props} />;
  }

  DefaultLayoutIcon.displayName = 'DefaultLayoutIcon';
  return DefaultLayoutIcon;
}

export const defaultLayoutIcons: DefaultLayoutIcons = {
  AirPlayButton: {
    Default: createIcon(airPlayPaths),
  },
  GoogleCastButton: {
    Default: createIcon(googleCastPaths),
  },
  PlayButton: {
    Play: createIcon(playIconPaths),
    Pause: createIcon(pauseIconPaths),
    Replay: createIcon(replayIconPaths),
  },
  MuteButton: {
    Mute: createIcon(muteIconPaths),
    VolumeLow: createIcon(volumeLowIconPaths),
    VolumeHigh: createIcon(volumeHighIconPaths),
  },
  CaptionButton: {
    On: createIcon(ccOnIconPaths),
    Off: createIcon(ccIconPaths),
  },
  PIPButton: {
    Enter: createIcon(enterPIPIconPaths),
    Exit: createIcon(exitPIPIconPaths),
  },
  FullscreenButton: {
    Enter: createIcon(enterFullscreenIconPaths),
    Exit: createIcon(exitFullscreenIconPaths),
  },
  SeekButton: {
    Backward: createIcon(seekBackwardIconPaths),
    Forward: createIcon(seekForwardIconPaths),
  },
  Menu: {
    ArrowLeft: createIcon(arrowLeftPaths),
    ArrowRight: createIcon(arrowRightPaths),
    Audio: createIcon(musicIconPaths),
    Chapters: createIcon(chaptersIconPaths),
    Quality: createIcon(qualityIconPaths),
    Captions: createIcon(ccIconPaths),
    Settings: createIcon(settingsIconPaths),
    Speed: createIcon(odometerIconPaths),
    Font: createIcon(
      `<path d="M22.6667 10.6667H26.6667V26.6667H28V28H22.6667V26.6667H24V22.6667H18.6667L16.6667 26.6667H18.6667V28H13.3333V26.6667H14.6667L22.6667 10.6667ZM24 12L19.3333 21.3333H24V12ZM6.66667 4H13.3333C14.8133 4 16 5.18667 16 6.66667V21.3333H12V14.6667H8V21.3333H4V6.66667C4 5.18667 5.18667 4 6.66667 4ZM8 6.66667V12H12V6.66667H8Z" fill="currentColor" />`,
    ),
  },
  KeyboardAction: {
    Play: createIcon(playIconPaths),
    Pause: createIcon(pauseIconPaths),
    Mute: createIcon(muteIconPaths),
    VolumeUp: createIcon(volumeHighIconPaths),
    VolumeDown: createIcon(volumeLowIconPaths),
    EnterFullscreen: createIcon(enterFullscreenIconPaths),
    ExitFullscreen: createIcon(exitFullscreenIconPaths),
    EnterPiP: createIcon(enterPIPIconPaths),
    ExitPiP: createIcon(exitPIPIconPaths),
    CaptionsOn: createIcon(ccOnIconPaths),
    CaptionsOff: createIcon(ccIconPaths),
  },
};

export interface DefaultLayoutIconProps
  extends React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> {}

export interface DefaultLayoutIcon {
  (props: DefaultLayoutIconProps): React.ReactNode;
}

export interface DefaultLayoutIcons {
  AirPlayButton: {
    Default: DefaultLayoutIcon;
    Connecting?: DefaultLayoutIcon;
    Connected?: DefaultLayoutIcon;
  };
  GoogleCastButton: {
    Default: DefaultLayoutIcon;
    Connecting?: DefaultLayoutIcon;
    Connected?: DefaultLayoutIcon;
  };
  PlayButton: {
    Play: DefaultLayoutIcon;
    Pause: DefaultLayoutIcon;
    Replay: DefaultLayoutIcon;
  };
  MuteButton: {
    Mute: DefaultLayoutIcon;
    VolumeLow: DefaultLayoutIcon;
    VolumeHigh: DefaultLayoutIcon;
  };
  CaptionButton: {
    On: DefaultLayoutIcon;
    Off: DefaultLayoutIcon;
  };
  PIPButton: {
    Enter: DefaultLayoutIcon;
    Exit: DefaultLayoutIcon;
  };
  FullscreenButton: {
    Enter: DefaultLayoutIcon;
    Exit: DefaultLayoutIcon;
  };
  SeekButton: {
    Backward: DefaultLayoutIcon;
    Forward: DefaultLayoutIcon;
  };
  Menu: {
    ArrowLeft: DefaultLayoutIcon;
    ArrowRight: DefaultLayoutIcon;
    Audio: DefaultLayoutIcon;
    Chapters: DefaultLayoutIcon;
    Quality: DefaultLayoutIcon;
    Captions: DefaultLayoutIcon;
    Settings: DefaultLayoutIcon;
    Speed: DefaultLayoutIcon;
    Font: DefaultLayoutIcon;
  };
  KeyboardAction?: {
    Play: DefaultLayoutIcon;
    Pause: DefaultLayoutIcon;
    Mute: DefaultLayoutIcon;
    VolumeUp: DefaultLayoutIcon;
    VolumeDown: DefaultLayoutIcon;
    EnterFullscreen: DefaultLayoutIcon;
    ExitFullscreen: DefaultLayoutIcon;
    EnterPiP: DefaultLayoutIcon;
    ExitPiP: DefaultLayoutIcon;
    CaptionsOn: DefaultLayoutIcon;
    CaptionsOff: DefaultLayoutIcon;
  };
}
