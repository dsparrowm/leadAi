// Lead scoring utility placeholder
interface LeadData {
    title: string;
    company: string;
    source: string;
    tags: string[];
}

export function calculateLeadScore(data: LeadData): number {
    let score = 50; // Base score

    // Title-based scoring
    if (data.title.toLowerCase().includes('director') || data.title.toLowerCase().includes('vp')) {
        score += 20;
    } else if (data.title.toLowerCase().includes('manager')) {
        score += 10;
    }

    // Company-based scoring
    if (data.company.toLowerCase().includes('inc') || data.company.toLowerCase().includes('corp')) {
        score += 15;
    }

    // Source-based scoring
    const sourceScores: { [key: string]: number } = {
        LINKEDIN: 20,
        TWITTER: 10,
        FACEBOOK: 5,
        INSTAGRAM: 5,
    };
    score += sourceScores[data.source] || 0;

    // Tag-based scoring
    if (data.tags.includes('decision-maker')) {
        score += 15;
    }
    if (data.tags.includes('high-value')) {
        score += 10;
    }

    return Math.min(100, Math.max(0, score));
}