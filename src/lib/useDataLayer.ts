import { useEffect } from 'react';
import { pushDataLayerEvent } from './data-layer';

/**
 * Custom hook to push events to the data layer on component mount
 * 
 * @param eventName - The name of the event to push
 * @param eventData - The data to include with the event
 * @param dependencies - Optional array of dependencies to trigger the event (defaults to empty array)
 */
export const useDataLayerEvent = (
    eventName: string,
    eventData: Record<string, any>,
    dependencies: any[] = []
): void => {
    useEffect(() => {
        pushDataLayerEvent(eventName, eventData);
    }, dependencies);
};