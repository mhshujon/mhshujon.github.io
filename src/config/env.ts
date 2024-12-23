// Environment configuration with type safety
export const env = {
    emailjs: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
    },
} as const;

// Validation function to ensure all required env vars are present
export function validateEnvVariables(): void {
    const required = [
        ['VITE_EMAILJS_SERVICE_ID', env.emailjs.serviceId],
        ['VITE_EMAILJS_TEMPLATE_ID', env.emailjs.templateId],
        ['VITE_EMAILJS_PUBLIC_KEY', env.emailjs.publicKey],
    ] as const;

    const missing = required.filter(([_, value]) => !value);

    if (missing.length > 0) {
        console.warn(
            'Missing environment variables:\n' +
            missing.map(([name]) => `- ${name}`).join('\n')
        );
    }
}