// Declare window types for TypeScript
declare global {
    interface Window {
        adobeDataLayer: any[];
    }
}

/**
 * DataLayerManager - A utility for managing Adobe Data Layer events
 * without requiring flush events.
 */
class DataLayerManager {
    private dataLayer: any[];
    private previousEvent: any | null;
    private propertiesToNullify: Record<string, string[]>;

    constructor(dataLayer: any[]) {
        this.dataLayer = dataLayer;
        this.previousEvent = null;

        // Track specific properties that should be nullified in nested objects
        this.propertiesToNullify = {
            'default': ['error'] // Only nullify default.error, not other default properties
        };
    }

    /**
     * Pushes an event to the data layer with smart nullification
     * @param eventName - The name of the event
     * @param data - The data to include in this event
     * @returns The complete event object that was pushed
     */
    pushEvent(eventName: string, data: Record<string, any> = {}): Record<string, any> {
        // Create the base event object
        const eventObj: Record<string, any> = {
            event: eventName,
            ...data
        };

        // If we have a previous event, check for keys to nullify
        if (this.previousEvent) {
            // Handle top-level keys
            Object.keys(this.previousEvent).forEach(key => {
                if (key === 'event') return; // Skip event name

                if (key === 'default') {
                    // Special handling for default object - only nullify specific properties
                    if (
                        typeof this.previousEvent[key] === 'object' &&
                        this.previousEvent[key] !== null &&
                        !Array.isArray(this.previousEvent[key])
                    ) {
                        // Ensure the default object exists in the new event
                        if (!(key in eventObj) || typeof eventObj[key] !== 'object' || eventObj[key] === null) {
                            eventObj[key] = {};
                        }

                        // Only nullify the specific properties in default that we care about
                        const propertiesToCheck = this.propertiesToNullify[key] || [];
                        propertiesToCheck.forEach(nestedKey => {
                            if (
                                nestedKey in this.previousEvent[key] &&
                                !(nestedKey in eventObj[key])
                            ) {
                                eventObj[key][nestedKey] = null;
                            }
                        });
                    }
                } else if (!(key in eventObj)) {
                    // For all other top-level keys, nullify if missing
                    eventObj[key] = null;
                }
            });
        }

        // Push to data layer
        this.dataLayer.push(eventObj);

        // Store as previous event
        this.previousEvent = JSON.parse(JSON.stringify(eventObj));

        return eventObj;
    }
}

// Create a singleton instance of the manager
let dataLayerManagerInstance: DataLayerManager | null = null;

// In-memory flag that will reset on page refresh
// This creates a module-level variable that persists during SPA navigation but resets on refresh
let isFirstEventAfterRefresh = true;

/**
 * Initialize the Adobe Data Layer and DataLayerManager
 */
export const initializeDataLayer = (): void => {
    // Only initialize if not already initialized
    if (typeof window.adobeDataLayer === 'undefined') {
        window.adobeDataLayer = [];
    }

    // Initialize the DataLayerManager instance if not already done
    if (!dataLayerManagerInstance) {
        dataLayerManagerInstance = new DataLayerManager(window.adobeDataLayer);
    }
};

/**
 * Pushes an event to the Adobe Data Layer with properly formatted data
 * 
 * @param eventName - The name of the event (e.g., 'home_view', 'product_list_view')
 * @param eventData - Object containing the event data
 */
export const pushDataLayerEvent = (eventName: string, eventData: Record<string, any>): void => {
    // Initialize Adobe Data Layer if it doesn't exist
    window.adobeDataLayer = window.adobeDataLayer || [];

    // Initialize the DataLayerManager instance if not already done
    if (!dataLayerManagerInstance) {
        dataLayerManagerInstance = new DataLayerManager(window.adobeDataLayer);
    }

    // Create a copy of the event data to avoid modifying the original
    const dataToSend = { ...eventData };

    // Check if this is the first event after page refresh
    if (isFirstEventAfterRefresh) {
        // Make sure default object exists
        dataToSend.default = dataToSend.default || {};

        // Add site info to the appropriate location in the structure
        dataToSend.default.site = {
            name: "dlt",
            experience: "desktop",
            currency: "AUD",
            division: "datalayertest",
            domain: window.location.host,
            env: "dev",
            version: "1.0.0"
        };

        // Mark first event as sent
        isFirstEventAfterRefresh = false;
    }

    // Use our DataLayerManager to push the event
    dataLayerManagerInstance.pushEvent(eventName, dataToSend);
};


/**
 * Cleans a string by converting to lowercase and replacing spaces and certain 
 * special characters with hyphens while preserving apostrophes
 * 
 * @param value - The string to clean
 * @returns The cleaned string
 */
export function cleanValue(value: string): string {
    if (!value) return '';

    // Convert to lowercase
    let cleaned = value.toLowerCase();

    // Replace pipe characters with hyphens
    cleaned = cleaned.replace(/\|/g, '-');

    // Replace spaces with hyphens
    cleaned = cleaned.replace(/\s+/g, '-');

    return cleaned;
}