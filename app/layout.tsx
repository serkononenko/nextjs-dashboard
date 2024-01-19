import {clsx} from 'clsx';

import {inter} from '@/app/ui/fonts';

import '@/app/ui/global.css';

import type {FC, ReactNode} from 'react';


type Props = {
    children: ReactNode;
}

const RootLayout: FC<Props> = ({children}) => (
    <html lang="en">
    <body className={clsx(inter.className, 'antialiased')}>{children}</body>
    </html>
)

export default RootLayout;
