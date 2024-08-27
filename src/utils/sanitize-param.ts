export const sanitizeParam = (input: string): string => {
    let sanitized = input.replace(/\s+/g, '-');
    
    sanitized = sanitized.replace(/[/.]+/g, '');
    
    sanitized = sanitized.toLowerCase();
    
    return sanitized;
}