declare global {
    interface Window {
        adobeDataLayer: Array<any> & {
            getState: () => {
                site: any;
                page: any;
                user: any;
            } | null;
            push: (data: any) => void;
        };
    }
}

export { };