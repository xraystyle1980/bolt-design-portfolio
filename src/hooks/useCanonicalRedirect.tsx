import { useEffect } from 'react';

const CANONICAL_HOST = 'www.trice.design';
const HTTPS_BASE_URL = `https://${CANONICAL_HOST}`;

export const useCanonicalRedirect = () => {
  useEffect(() => {
    const currentHost = window.location.hostname;
    const currentProtocol = window.location.protocol;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    let shouldRedirect = false;
    let redirectUrl = '';
    
    // Check if we need to redirect to canonical host
    if (currentHost !== CANONICAL_HOST) {
      shouldRedirect = true;
    }
    
    // Check if we need to redirect to HTTPS
    if (currentProtocol !== 'https:') {
      shouldRedirect = true;
    }
    
    // Check if we need to remove trailing slash (but keep the root / as is)
    if (currentPath !== '/' && currentPath.endsWith('/')) {
      shouldRedirect = true;
    }
    
    if (shouldRedirect) {
      // Build canonical URL
      const cleanPath = currentPath !== '/' && currentPath.endsWith('/') 
        ? currentPath.slice(0, -1) 
        : currentPath;
      
      redirectUrl = `${HTTPS_BASE_URL}${cleanPath}${currentSearch}${currentHash}`;
      
      // Only redirect if we're not already on localhost (for development)
      if (!currentHost.includes('localhost') && !currentHost.includes('127.0.0.1')) {
        window.location.replace(redirectUrl);
        return;
      }
    }
    
    // Handle legacy /case-studies/* redirects to /case-study/*
    if (currentPath.startsWith('/case-studies/')) {
      const newPath = currentPath.replace('/case-studies/', '/case-study/');
      redirectUrl = `${HTTPS_BASE_URL}${newPath}${currentSearch}${currentHash}`;
      
      if (!currentHost.includes('localhost') && !currentHost.includes('127.0.0.1')) {
        window.location.replace(redirectUrl);
      }
    }
  }, []);
};