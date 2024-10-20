'use client'

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/breadcrumbs';

import { BreadcrumbItem } from '@/components/ui/breadcrumbs';
import { logout } from '@/app/auth/actions';

import { useRouter } from 'next/navigation';
import { AuthModel } from 'pocketbase';

interface AppHeaderProps {
    breadcrumbs: BreadcrumbItem[];
    user: AuthModel;
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
                        <div className="flex flex-col items-end">
                            <span>{user.username}</span>
                            <span onClick={logoutAndRedirect} className="mt-1 cursor-pointer text-gray-500 hover:text-gray-700">logout</span>
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
