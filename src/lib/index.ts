// Export all utility functions and data from the lib directory

// Export product data
import productData from './products.json';
export { productData };

// Define and export Product interface
export interface Product {
    id: number;
    available_size: string[];
    barcode: string;
    brand: string;
    category: string;
    child_sku: string;
    color: string;
    discount: number;
    feature: string[];
    full_price: number;
    gender: string;
    is_markdown: boolean;
    listed_price: number;
    model: string;
    name: string;
    parent_category: string;
    parent_sku: string;
    rating: number;
    reward_points: number;
    size: null | string;
    sku_available: boolean;
    sku_by_size: null | Record<string, any>;
    speciality: string;
    sport: string;
    story: string;
    description: string;
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