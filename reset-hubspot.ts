import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

async function resetHubSpot() {
  try {
    // First, let's see what scopes we currently have
    const hubspotAccount = await prisma.account.findFirst({
      where: {
        provider: 'hubspot'
      },
      select: {
        scope: true,
        access_token: true,
        expires_at: true
      }
    });

    console.log('Current HubSpot connection:', hubspotAccount);

    // Delete all HubSpot accounts
    await prisma.account.deleteMany({
      where: {
        provider: 'hubspot'
      }
    });
    console.log('Successfully deleted HubSpot connections');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetHubSpot(); 