'use client';

import { usePathname } from 'next/navigation';
import MatrixRain from './home/MatrixRain';

export default function PageMatrix() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/home') {
    return null;
  }

  return (
    <div className="global-matrix" aria-hidden="true">
      <MatrixRain />
    </div>
  );
}
