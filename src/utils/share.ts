/**
 * Share utility for articles
 * Uses Web Share API when available, falls back to clipboard copy or manual selection
 */

export interface ShareData {
  title: string;
  text?: string;
  url?: string;
}

// Show toast notification
function showToast(message: string, duration: number = 2000) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #665f55;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Fallback copy using temporary input (works when clipboard API is blocked)
function fallbackCopyToClipboard(text: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.cssText = `
    position: fixed;
    top: -9999px;
    left: -9999px;
    opacity: 0;
  `;
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    document.body.removeChild(textArea);
    return false;
  }
}

export async function shareArticle(data: ShareData): Promise<void> {
  const shareData: ShareData = {
    title: data.title,
    text: data.text || data.title,
    url: data.url || window.location.href,
  };

  // Check if Web Share API is available (mobile, some desktop browsers)
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      // User cancelled or error occurred, fall through to clipboard
      if ((error as Error).name === 'AbortError') {
        return; // User cancelled, do nothing
      }
    }
  }

  // Try Clipboard API first
  try {
    await navigator.clipboard.writeText(shareData.url);
    showToast('Link copied to clipboard!');
    return;
  } catch (error) {
    // Clipboard API blocked, try fallback method
    console.log('Clipboard API blocked, trying fallback method');
  }

  // Fallback: Use execCommand (works in more restrictive environments)
  const success = fallbackCopyToClipboard(shareData.url);
  if (success) {
    showToast('Link copied to clipboard!');
    return;
  }

  // Last resort: Show a modal with the URL to copy manually
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.2s ease-out;
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 32px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  `;
  
  modalContent.innerHTML = `
    <h3 style="margin: 0 0 16px 0; font-size: 20px; font-weight: bold; color: #1a1a1a;">Share this article</h3>
    <p style="margin: 0 0 16px 0; color: #666; font-size: 14px;">Copy the link below:</p>
    <input 
      type="text" 
      value="${shareData.url}" 
      readonly
      style="
        width: 100%;
        padding: 12px;
        border: 2px solid #665f55;
        border-radius: 6px;
        font-size: 14px;
        margin-bottom: 16px;
        box-sizing: border-box;
      "
      id="share-url-input"
    />
    <button 
      id="share-close-btn"
      style="
        background: #665f55;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
      "
    >Close</button>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Auto-select the URL
  const input = document.getElementById('share-url-input') as HTMLInputElement;
  if (input) {
    input.select();
    input.focus();
  }
  
  // Close button
  const closeBtn = document.getElementById('share-close-btn');
  const closeModal = () => {
    modal.style.animation = 'fadeOut 0.2s ease-out';
    setTimeout(() => {
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    }, 200);
  };
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Add animations to head if not already present
if (typeof window !== 'undefined') {
  const styleId = 'share-animations';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}