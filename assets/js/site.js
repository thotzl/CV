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
      // fall through to clipboard
    }

    try {
      await navigator.clipboard.writeText(url);
      shareButton.textContent = 'Link kopiert';
      window.setTimeout(() => {
        shareButton.innerHTML = '<i class="fas fa-share-nodes"></i> Share';
      }, 1500);
    } catch {
      window.prompt('Link kopieren:', url);
    }
  });
})();

