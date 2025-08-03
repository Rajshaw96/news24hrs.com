import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function WideAdWidget() {
  return (
    <div className="add-area text-center">
      <Link href="/">
        <Image src="/images/ads/banner.png" alt="" />
      </Link>
    </div>
  );
}
