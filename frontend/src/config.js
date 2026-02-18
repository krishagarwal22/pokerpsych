/**
 * Backend base URL for API and video feed. No trailing slash.
 * - Unset or empty: same-origin (dev with Vite proxy or when frontend and backend share origin).
 * - Set (e.g. https://api.example.com): used when frontend and backend are deployed separately.
 */
const API_BASE = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')

export function getApiBaseUrl() {
  return API_BASE
}

/** Full URL for the video feed (MJPEG stream). */
export function getVideoFeedUrl() {
  return `${API_BASE}/video_feed`
}
