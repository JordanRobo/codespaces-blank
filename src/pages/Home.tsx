import React from 'react';
import { useDataLayerEvent } from '../lib/useDataLayer';
import { cleanValue } from '@/lib/data-layer';

export function Home() {

    useDataLayerEvent('page_default', {
        default: {
            page: {
                type: "home",
                action: "view",
                path: window.location.pathname,
                title: cleanValue(document.title),
                url: window.location.href
            }
        }
    });

    return (
        <div className="hero bg-base-200 min-h-[620px]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}