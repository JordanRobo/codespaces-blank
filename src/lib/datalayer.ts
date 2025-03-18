export interface DataLayerObject {
    [key: string]: any;
}

// Create a custom array type that extends Array
export class DataLayerArray extends Array<DataLayerObject> {
    constructor() {
        super();
    }

    // Override push to add logging
    push(...items: DataLayerObject[]): number {
        console.log('DataLayer updated:', items[0]);
        return super.push(...items);
    }

    // Add getState method to return the latest object
    getState(): DataLayerObject {
        return this.length > 0 ? this[this.length - 1] : {};
    }
}

// Initialize as a global variable
declare global {
    interface Window {
        dataLayer: DataLayerArray;
    }
}

// Create and expose the dataLayer instance
const dataLayer = new DataLayerArray();

// Attach to window object for global access
if (typeof window !== 'undefined') {
    window.dataLayer = dataLayer;
}

export default dataLayer;