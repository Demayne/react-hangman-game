/**
 * api.js
 * API facade for external services
 * Provides a clean interface for API interactions
 */

/**
 * API service class
 * Handles all external API communications
 */
class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || '';
  }

  /**
   * Generic fetch wrapper with error handling
   * @param {string} url - Request URL
   * @param {Object} options - Fetch options
   * @returns {Promise} Response data
   */
  async request(url, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  /**
   * GET request
   * @param {string} url - Request URL
   * @returns {Promise} Response data
   */
  async get(url) {
    return this.request(url, { method: 'GET' });
  }

  /**
   * POST request
   * @param {string} url - Request URL
   * @param {Object} data - Request body
   * @returns {Promise} Response data
   */
  async post(url, data) {
    return this.request(url, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

// Export singleton instance
export const api = new ApiService();

