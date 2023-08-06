import { Component } from 'maverick.js';

import { useMediaContext, type MediaContext } from '../../../core/api/media-context';
import { setARIALabel } from '../../../utils/dom';
import { Slots } from '../utils/slots';
import {
  ToggleButtonController,
  type ToggleButtonControllerProps,
} from './toggle-button-controller';

export interface PlayButtonProps extends ToggleButtonControllerProps {}

/**
 * A button for toggling the playback state (play/pause) of the current media.
 *
 * @docs {@link https://www.vidstack.io/docs/player/components/buttons/play-button}
 */
export class PlayButton extends Component<PlayButtonProps> {
  static props: PlayButtonProps = ToggleButtonController.props;

  private _media!: MediaContext;

  constructor() {
    super();

    new ToggleButtonController({
      _isPressed: this._isPressed.bind(this),
      _keyShortcut: 'togglePaused',
      _onPress: this._onPress.bind(this),
    });
  }

  protected override onSetup(): void {
    this._media = useMediaContext();
    const { paused, ended } = this._media.$state;

    this.setAttributes({
      'data-paused': paused,
      'data-ended': ended,
    });

    new Slots(() => {
      const isPaused = paused(),
        hasEnded = ended();
      return {
        play: isPaused && !hasEnded,
        pause: !isPaused,
        replay: hasEnded,
      };
    }).attach(this);
  }

  protected override onAttach(el: HTMLElement): void {
    setARIALabel(el, this._getLabel.bind(this));
  }

  private _onPress(event: Event) {
    const remote = this._media.remote;
    this._isPressed() ? remote.pause(event) : remote.play(event);
  }

  private _isPressed() {
    const { paused } = this._media.$state;
    return !paused();
  }

  private _getLabel() {
    const { paused } = this._media.$state;
    return paused() ? 'Play' : 'Pause';
  }
}