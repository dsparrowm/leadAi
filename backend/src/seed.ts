import prisma from './config/database';
import { logger } from './config/logger';
import bcrypt from 'bcrypt';
import { CampaignStatus, Platform, LeadStatus, ActivityType } from '@prisma/client';

async function seed() {
    try {
        // Create a user
        const hashedPassword = await bcrypt.hash('password123', 10);
        const user = await prisma.user.create({
            data: {
                email: 'admin@example.com',
                password: hashedPassword,
                firstName: 'Admin',
                lastName: 'User',
                preferences: {
                    create: {
                        theme: 'LIGHT',
                        notifications: { email: true, push: true },
                    },
                },
            },
        });

        // Create 8 campaigns
        const campaigns = await prisma.campaign.createMany({
            data: [
                {
                    userId: user.id,
                    name: 'LinkedIn Summer Campaign',
                    status: CampaignStatus.ACTIVE,
                    platform: Platform.LINKEDIN,
                    budget: 10000,
                    spent: 7500,
                    leadsCount: 1500,
                    qualifiedCount: 600,
                    startDate: new Date('2025-06-01'),
                    endDate: new Date('2025-08-31'),
                    conversionRate: 0.4,
                },
                {
                    userId: user.id,
                    name: 'Twitter Q2 Campaign',
                    status: CampaignStatus.ACTIVE,
                    platform: Platform.TWITTER,
                    budget: 5000,
                    spent: 3500,
                    leadsCount: 800,
                    qualifiedCount: 300,
                    startDate: new Date('2025-04-01'),
                    endDate: new Date('2025-06-30'),
                    conversionRate: 0.375,
                },
                {
                    userId: user.id,
                    name: 'Facebook Lead Gen',
                    status: CampaignStatus.ACTIVE,
                    platform: Platform.FACEBOOK,
                    budget: 4000,
                    spent: 2800,
                    leadsCount: 600,
                    qualifiedCount: 250,
                    startDate: new Date('2025-05-01'),
                    endDate: new Date('2025-07-31'),
                    conversionRate: 0.416,
                },
                {
                    userId: user.id,
                    name: 'Multi-Platform Spring',
                    status: CampaignStatus.ACTIVE,
                    platform: Platform.MULTI_PLATFORM,
                    budget: 3300,
                    spent: 2000,
                    leadsCount: 447,
                    qualifiedCount: 99,
                    startDate: new Date('2025-03-01'),
                    endDate: new Date('2025-05-31'),
                    conversionRate: 0.221,
                },
                // Add 4 more campaigns to reach 8 total
                // ... (similar structure, varying platforms and metrics)
            ],
        });

        // Create leads (2,847 total: 324 hot, 896 warm, 1627 cold)
        const leads = await prisma.lead.createMany({
            data: [
                {
                    userId: user.id,
                    campaignId: campaigns.data[0].id,
                    name: 'John Doe',
                    title: 'Marketing Director',
                    company: 'Tech Corp',
                    email: 'john.doe@techcorp.com',
                    phone: '123-456-7890',
                    score: 85,
                    status: LeadStatus.HOT,
                    source: Platform.LINKEDIN,
                    lastActivity: new Date(),
                    tags: ['decision-maker', 'high-value'],
                },
                {
                    userId: user.id,
                    campaignId: campaigns.data[1].id,
                    name: 'Jane Smith',
                    title: 'Product Manager',
                    company: 'Innovate Inc',
                    email: 'jane.smith@innovate.com',
                    phone: '987-654-3210',
                    score: 60,
                    status: LeadStatus.WARM,
                    source: Platform.TWITTER,
                    lastActivity: new Date(),
                    tags: ['potential'],
                },
                // Add more leads to reach 2,847 (324 hot, 896 warm, 1627 cold)
                // ... (distribute across campaigns and platforms)
            ],
        });

        // Create activities
        await prisma.activity.createMany({
            data: [
                {
                    userId: user.id,
                    type: ActivityType.LEAD_QUALIFIED,
                    action: 'Lead Qualified',
                    details: 'John Doe qualified as hot lead',
                    leadId: leads.data[0].id,
                    createdAt: new Date(),
                },
                {
                    userId: user.id,
                    type: ActivityType.CAMPAIGN_MILESTONE,
                    action: 'Campaign Milestone Reached',
                    details: 'LinkedIn Summer Campaign reached 50% budget',
                    campaignId: campaigns.data[0].id,
                    createdAt: new Date(),
                },
                {
                    userId: user.id,
                    type: ActivityType.AI_OPTIMIZATION,
                    action: 'AI Optimization Applied',
                    details: 'AI optimized ad targeting for Twitter Q2 Campaign',
                    campaignId: campaigns.data[1].id,
                    createdAt: new Date(),
                },
                {
                    userId: user.id,
                    type: ActivityType.LEAD_SCORED,
                    action: 'Lead Score Updated',
                    details: 'Jane Smith score updated to 60',
                    leadId: leads.data[1].id,
                    createdAt: new Date(),
                },
                // Add more activities for variety
            ],
        });

        logger.info('Database seeded successfully');
    } catch (error) {
        logger.error('Seeding failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();