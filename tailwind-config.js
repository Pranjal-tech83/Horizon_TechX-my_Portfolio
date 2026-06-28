tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-secondary-fixed-variant": "#00497e",
                "on-tertiary": "#ffffff",
                "primary": "#002045",
                "tertiary-container": "#2c383d",
                "background": "#f9f9ff",
                "surface-tint": "#455f88",
                "on-tertiary-container": "#94a1a8",
                "surface-dim": "#d0daf0",
                "surface-container-lowest": "#ffffff",
                "on-primary-fixed": "#001b3c",
                "on-tertiary-fixed-variant": "#3c494e",
                "error-container": "#ffdad6",
                "inverse-surface": "#273141",
                "tertiary-fixed": "#d8e4eb",
                "secondary-fixed-dim": "#9fcaff",
                "on-secondary": "#ffffff",
                "surface-container-highest": "#d9e3f9",
                "outline-variant": "#c4c6cf",
                "outline": "#74777f",
                "secondary": "#0061a5",
                "primary-fixed": "#d6e3ff",
                "on-background": "#121c2c",
                "tertiary-fixed-dim": "#bcc8cf",
                "primary-fixed-dim": "#adc7f7",
                "on-error": "#ffffff",
                "surface": "#f9f9ff",
                "on-primary": "#ffffff",
                "surface-variant": "#d9e3f9",
                "surface-container-high": "#dee8ff",
                "tertiary": "#172328",
                "on-error-container": "#93000a",
                "on-surface-variant": "#43474e",
                "error": "#ba1a1a",
                "on-primary-fixed-variant": "#2d476f",
                "secondary-fixed": "#d2e4ff",
                "surface-container": "#e7eeff",
                "primary-container": "#1a365d",
                "surface-bright": "#f9f9ff",
                "on-tertiary-fixed": "#111d22",
                "inverse-primary": "#adc7f7",
                "on-surface": "#121c2c",
                "on-secondary-fixed": "#001d37",
                "on-primary-container": "#86a0cd",
                "surface-container-low": "#f0f3ff",
                "on-secondary-container": "#004172",
                "secondary-container": "#66affe",
                "inverse-on-surface": "#ebf1ff"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "margin-desktop": "64px",
                "margin-mobile": "20px",
                "component-gap": "16px",
                "container-max": "1200px",
                "gutter": "24px",
                "section-gap": "120px"
            },
            fontFamily: {
                "headline-lg": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"],
                "body-md": ["Inter"],
                "body-lg": ["Inter"],
                "headline-xl": ["Hanken Grotesk"],
                "label-code": ["JetBrains Mono"],
                "headline-xl-mobile": ["Hanken Grotesk"]
            },
            fontSize: {
                "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "headline-xl": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "label-code": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                "headline-xl-mobile": ["36px", { "lineHeight": "44px", "fontWeight": "700" }]
            }
        }
    }
};
