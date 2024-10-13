'use client'

import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from "@/components/ui/button";
import { getPocketBase } from '@/lib/pocketbase';

import BreadcrumbItem from '@/components/ui/breadcrumbs';

import { useRouter } from 'next/navigation';

interface AppHeaderProps {
  breadcrumbs: {
    label: string;
    href?: string;
  }[];
}

export default function AppHeader({ breadcrumbs }: AppHeaderProps) {
  const router = useRouter();
  const pb = getPocketBase();

  const handleLogout = async () => {
    pb.authStore.clear();
    router.push('/auth?type=login');
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between w-full mb-4">
        <Breadcrumbs items={breadcrumbs} />
        <div className="text-sm">
          {pb.authStore.isValid ? (
            <div>
              <span>{pb.authStore.model?.username}</span>
              <span onClick={handleLogout} className="ml-2 cursor-pointer">Logout</span>
            </div>
          ) : (
            <Link href="/auth?type=login">
              <span className="cursor-pointer">login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}