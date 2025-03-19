import React, { useEffect } from 'react';

export function Home() {
    useEffect(() => {
        let data = {
            "event": "page_default",
            "default": {
                "site": {
                    "name": "data layer & jsons trading",
                    "experience": "desktop",
                    "currency": "AUD",
                    "division": "datalayer&jsons",
                    "domain": "www.datalayer.com.au",
                    "env": "stg",
                    "version": "0.0.1"
                },
                "page": {
                    "type": "home",
                    "action": "view",
                    "path": "/",
                    "title": "Home Page",
                    "url": ""
                },
                "user": {
                    "user_state": "",
                    "login_status": "",
                    "uem_hashed": "",
                    "session_id": "",
                    "divison_id": ""
                }
            }
        }

        if(window.adobeDataLayer) {
            window.adobeDataLayer.push(data)
        }
    },[])

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