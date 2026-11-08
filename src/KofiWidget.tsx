import { useEffect, useRef } from 'react';

const KOFI_SCRIPT_SRC = 'https://storage.ko-fi.com/cdn/widget/Widget_2.js';

type KofiWindow = Window & {
  kofiwidget2?: {
    init: (text: string, color: string, id: string) => void;
    getHTML: () => string;
  };
};

function KofiWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const render = () => {
      const widget = (window as KofiWindow).kofiwidget2;
      if (!widget) return;
      widget.init('Support me', '#794bc4', 'robifazio');
      container.innerHTML = widget.getHTML();
    };

    if ((window as KofiWindow).kofiwidget2) {
      render();
      return undefined;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${KOFI_SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement('script');
      script.src = KOFI_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    const loadedScript = script;
    loadedScript.addEventListener('load', render);
    return () => loadedScript.removeEventListener('load', render);
  }, []);

  return <div className="kofi-inline" ref={containerRef} />;
}

export default KofiWidget;
