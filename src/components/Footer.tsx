import { CodeSandboxLogoIcon, FigmaLogoIcon, GitHubLogoIcon, LayersIcon } from '@radix-ui/react-icons';
import React from 'react';

export function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <div className="container mx-auto max-w-[1200px] w-full px-4">
                <div className="flex justify-between w-full">
                    <aside>
                        <LayersIcon className='h-12 w-12 mb-2' />
                        <p>
                            DataLayer Testing Pty. Ltd.
                            <br />
                            Providing reliable dataLayer implementation since 2025
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Social</h6>
                        <div className="grid grid-flow-col gap-4">
                            <GitHubLogoIcon className='w-8 h-8' />
                            <CodeSandboxLogoIcon className='w-8 h-8' />
                            <FigmaLogoIcon className='w-8 h-8' />
                        </div>
                    </nav>
                </div>
            </div>
        </footer >
    );
    
}