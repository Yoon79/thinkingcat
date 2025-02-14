import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '띵킹캣 - 앱 ・ 프로그램 개발 전문',
        short_name: '띵킹캣',
        description: '소프트웨어를 통해 더 편리한 일상과 새로운 가치를 제공합니다',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait-primary',
        lang: 'ko',
        categories: ['solution', 'it', 'utilities', 'technology'],
        background_color: '#0A0A1B',
        theme_color: '#0A0A1B',
        icons: [
            { "src": "/favicon.ico", "type": "image/x-icon", "sizes": "16x16 32x32" },
            { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
            { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" },
            { "src": "/icon-192-maskable.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
            { "src": "/icon-512-maskable.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
        ]
    }
} 