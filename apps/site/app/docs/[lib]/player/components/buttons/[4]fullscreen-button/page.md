---
description: This component is used to enter and exit fullscreen.
---

## Usage

The `$tag:media-fullscreen-button` component will toggle the `fullscreen` state of media as it's
pressed by dispatching a `media-enter-fullscreen-request`, and `media-exit-fullscreen-request`
event to the media controller.

{% code_preview name="usage" copyHighlight=true highlight="html:3|react:6" /%}

{% callout type="danger" %}
The `hidden` attribute will be present on this element in the event fullscreen cannot be
requested (not supported by environment or provider). The button's `display` property will be
set to `none`, so it'll be removed from the layout; therefore, you should account for the button
not being displayed in your design.
{% /callout %}

## Fullscreen Target

By default, the `$tag:media-fullscreen-button` component will fire a request to enter fullscreen
on the player (i.e., `$tag:media-player`). The request handler will naturally fallback to the
current media provider if the native
[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) is not available.

You can specify that you only want to display the provider in fullscreen and not the entire media
player like so:

{% code_snippet name="fullscreen-target" /%}

{% callout type="warning" %}
By setting `target` to `provider`, the controller will only request fullscreen on the media provider,
meaning your custom UI will _not_ be displayed when in fullscreen.
{% /callout %}

## Styling

You can override the default styles with CSS like so:

```css
media-fullscreen-button {
  color: pink;
  transition: opacity 0.2s ease-in;
}

/* Apply styles when media is fullscreened. */
media-fullscreen-button[fullscreen] {
}

/* Apply styles when media is _not_ fullscreened. */
media-fullscreen-button:not([fullscreen]) {
}

/* Style default icons. */
media-fullscreen-button [slot='enter'] {
}
media-fullscreen-button [slot='exit'] {
}
```

## Custom Icons

Here's an example containing a custom enter and exit icon:

{% code_snippet name="custom-icons" copyHighlight=true highlight="html:3-10|react:6-9" /%}