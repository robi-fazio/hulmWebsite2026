import { useEffect } from 'react';

const KOFI_SCRIPT_SRC = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';

type KofiWindow = Window & {
  kofiWidgetOverlay?: {
    draw: (username: string, options: Record<string, string>) => void;
  };
};

let widgetDrawn = false;

function drawWidget() {
  const kofiWindow = window as KofiWindow;
  if (widgetDrawn || !kofiWindow.kofiWidgetOverlay) return;
  widgetDrawn = true;
  kofiWindow.kofiWidgetOverlay.draw('robifazio', {
    type: 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#794bc4',
    'floating-chat.donateButton.text-color': '#fff',
  });
}

function KofiWidget() {
  useEffect(() => {
    if (widgetDrawn) return undefined;

    if ((window as KofiWindow).kofiWidgetOverlay) {
      drawWidget();
      return undefined;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${KOFI_SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener('load', drawWidget);
      return () => existing.removeEventListener('load', drawWidget);
    }

    const script = document.createElement('script');
    script.src = KOFI_SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', drawWidget);
    document.body.appendChild(script);
    return () => script.removeEventListener('load', drawWidget);
  }, []);

  return null;
}

export default KofiWidget;
