(() => {
  const shareButton = document.querySelector('[data-share]');
  if (!shareButton) return;

  shareButton.addEventListener('click', async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url });
        return;
      }
    } catch {
      // fall through to clipboard/prompt
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        const prev = shareButton.textContent;
        shareButton.textContent = 'Link kopiert';
        window.setTimeout(() => {
          shareButton.textContent = prev;
        }, 1500);
        return;
      }
    } catch {
      // fall through to prompt
    }

    window.prompt('Link kopieren:', url);
  });
})();

