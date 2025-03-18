// Export all utility functions and data from the lib directory

// Export product data
import productData from './products.json';
export { productData };

// Export DataLayer
export * from './datalayer';

// Define and export Product interface
export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    features: string[];
    image: string;
}

export interface Site {
    name: string;
    experience: string;
    currency: string;
    division: string;
    domain: string;
    env: string;
    version: string;
};

export interface Page {
    type: string;
    action: string;
    path: string;
    title: string;
    url: string;
};

export interface User {
    user_state: string;
    login_status: string;
    uem_hashed: string;
    session_id: string;
    divison_id: string;
}

export interface Default {
    site: Site;
    page: Page;
    user: User;
}