'use client'

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/breadcrumbs';

import BreadcrumbItem from '@/components/ui/breadcrumbs';
import { logout } from '@/app/auth/actions';

import { useRouter } from 'next/navigation';
import { AuthModel } from 'pocketbase';

interface AppHeaderProps {
    breadcrumbs: typeof BreadcrumbItem[];
    model: AuthModel;
}

export default function AppHeader({ breadcrumbs, user }: AppHeaderProps) {
    const router = useRouter();

    const logoutAndRedirect = async () => {
        await logout();
        router.push('/auth/login');
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-between w-full mb-4">
                <Breadcrumbs items={breadcrumbs} />
                <div className="text-sm">
                    {user ? (
                        <div>
                            <span>{user.username}</span>
                            <span onClick={logoutAndRedirect} className="ml-2 cursor-pointer">logout</span>
                        </div>
                    ) : (
                        <Link href="/auth/login">
                            <span className="cursor-pointer">login</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}