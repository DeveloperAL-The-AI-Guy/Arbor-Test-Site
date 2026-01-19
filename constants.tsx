
import React from 'react';
import { NavItem, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Growth Strategy',
    description: 'We help organizations identify untapped opportunities and create actionable roadmaps for sustainable scaling.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    id: 'ops',
    title: 'Operational Excellence',
    description: 'Streamlining processes and optimizing workflows to increase efficiency and reduce overhead costs.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    id: 'tech',
    title: 'Digital Integration',
    description: 'Modernizing your tech stack to ensure your business stays competitive in an increasingly digital world.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
];
