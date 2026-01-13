/*
  Warnings:

  - The values [CONVERSATIONAL,FORMAL,HUMOROUS,INSPIRATIONAL] on the enum `ContentTone` will be removed. If these variants are still used in the database, this will fail.
  - The values [PAUSED,EXPIRED] on the enum `SubscriptionStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [ENTERPRISE] on the enum `SubscriptionTier` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `aiModel` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `characterCount` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `contentType` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `engagement` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `excerpt` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `focusKeyword` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `folder` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `generationCost` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `generationParams` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `keywordDensity` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `keywords` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `lastEditedAt` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `metaDescription` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `metaTitle` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `originalPrompt` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `publishedUrl` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `readabilityScore` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `readingTime` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledFor` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `seoScore` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `shares` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `targetAudience` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `tokensUsed` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `version` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Content` table. All the data in the column will be lost.
  - The `tone` column on the `Content` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `cost` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `errorMessage` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `inputLength` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `modelUsed` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `outputLength` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `responseTime` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `success` on the `UsageHistory` table. All the data in the column will be lost.
  - You are about to drop the column `brandVoice` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `customInstructions` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailNotifications` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionEndDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStartDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `totalCreditsUsed` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ApiKey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContentVersion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Export` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedTemplate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemSetting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamInvitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `action` on the `UsageHistory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContentTone_new" AS ENUM ('PROFESSIONAL', 'CASUAL', 'FRIENDLY', 'TECHNICAL', 'PERSUASIVE', 'EDUCATIONAL');
ALTER TABLE "User" ALTER COLUMN "defaultTone" TYPE "ContentTone_new" USING ("defaultTone"::text::"ContentTone_new");
ALTER TYPE "ContentTone" RENAME TO "ContentTone_old";
ALTER TYPE "ContentTone_new" RENAME TO "ContentTone";

COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SubscriptionStatus_new" AS ENUM ('ACTIVE', 'CANCELED', 'PAST_DUE', 'TRIALING');
ALTER TABLE "public"."User" ALTER COLUMN "subscriptionStatus" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "subscriptionStatus" TYPE "SubscriptionStatus_new" USING ("subscriptionStatus"::text::"SubscriptionStatus_new");
ALTER TYPE "SubscriptionStatus" RENAME TO "SubscriptionStatus_old";
ALTER TYPE "SubscriptionStatus_new" RENAME TO "SubscriptionStatus";

ALTER TABLE "User" ALTER COLUMN "subscriptionStatus" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SubscriptionTier_new" AS ENUM ('FREE', 'PRO', 'BUSINESS');
ALTER TABLE "public"."Team" ALTER COLUMN "subscriptionTier" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "subscriptionTier" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "subscriptionTier" TYPE "SubscriptionTier_new" USING ("subscriptionTier"::text::"SubscriptionTier_new");
ALTER TYPE "SubscriptionTier" RENAME TO "SubscriptionTier_old";
ALTER TYPE "SubscriptionTier_new" RENAME TO "SubscriptionTier";

ALTER TABLE "User" ALTER COLUMN "subscriptionTier" SET DEFAULT 'FREE';
COMMIT;

-- DropForeignKey
ALTER TABLE "ApiKey" DROP CONSTRAINT "ApiKey_userId_fkey";

-- DropForeignKey
ALTER TABLE "ContentVersion" DROP CONSTRAINT "ContentVersion_contentId_fkey";

-- DropForeignKey
ALTER TABLE "Export" DROP CONSTRAINT "Export_contentId_fkey";

-- DropForeignKey
ALTER TABLE "Export" DROP CONSTRAINT "Export_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavedTemplate" DROP CONSTRAINT "SavedTemplate_templateId_fkey";

-- DropForeignKey
ALTER TABLE "SavedTemplate" DROP CONSTRAINT "SavedTemplate_userId_fkey";

-- DropForeignKey
ALTER TABLE "TeamInvitation" DROP CONSTRAINT "TeamInvitation_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_userId_fkey";

-- DropIndex
DROP INDEX "Content_contentType_idx";

-- DropIndex
DROP INDEX "Content_createdAt_idx";

-- DropIndex
DROP INDEX "Content_isFavorite_idx";

-- DropIndex
DROP INDEX "Content_publishedAt_idx";

-- DropIndex
DROP INDEX "Content_status_idx";

-- DropIndex
DROP INDEX "UsageHistory_action_idx";

-- DropIndex
DROP INDEX "UsageHistory_createdAt_idx";

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "aiModel",
DROP COLUMN "category",
DROP COLUMN "characterCount",
DROP COLUMN "contentType",
DROP COLUMN "engagement",
DROP COLUMN "excerpt",
DROP COLUMN "focusKeyword",
DROP COLUMN "folder",
DROP COLUMN "generationCost",
DROP COLUMN "generationParams",
DROP COLUMN "isFavorite",
DROP COLUMN "keywordDensity",
DROP COLUMN "keywords",
DROP COLUMN "language",
DROP COLUMN "lastEditedAt",
DROP COLUMN "metaDescription",
DROP COLUMN "metaTitle",
DROP COLUMN "originalPrompt",
DROP COLUMN "parentId",
DROP COLUMN "publishedAt",
DROP COLUMN "publishedUrl",
DROP COLUMN "readabilityScore",
DROP COLUMN "readingTime",
DROP COLUMN "scheduledFor",
DROP COLUMN "seoScore",
DROP COLUMN "shares",
DROP COLUMN "slug",
DROP COLUMN "status",
DROP COLUMN "tags",
DROP COLUMN "targetAudience",
DROP COLUMN "tokensUsed",
DROP COLUMN "topic",
DROP COLUMN "version",
DROP COLUMN "views",
DROP COLUMN "tone",
ADD COLUMN     "tone" TEXT;

-- AlterTable
ALTER TABLE "UsageHistory" DROP COLUMN "cost",
DROP COLUMN "errorMessage",
DROP COLUMN "inputLength",
DROP COLUMN "metadata",
DROP COLUMN "modelUsed",
DROP COLUMN "outputLength",
DROP COLUMN "responseTime",
DROP COLUMN "success",
DROP COLUMN "action",
ADD COLUMN     "action" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "brandVoice",
DROP COLUMN "customInstructions",
DROP COLUMN "emailNotifications",
DROP COLUMN "subscriptionEndDate",
DROP COLUMN "subscriptionStartDate",
DROP COLUMN "totalCreditsUsed",
ADD COLUMN     "contentTypes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onboardingStep" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "primaryGoal" TEXT;

-- DropTable
DROP TABLE "Analytics";

-- DropTable
DROP TABLE "ApiKey";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "ContentVersion";

-- DropTable
DROP TABLE "Export";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "SavedTemplate";

-- DropTable
DROP TABLE "SystemSetting";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "TeamInvitation";

-- DropTable
DROP TABLE "TeamMember";

-- DropTable
DROP TABLE "Template";

-- DropEnum
DROP TYPE "ContentStatus";

-- DropEnum
DROP TYPE "ContentType";

-- DropEnum
DROP TYPE "ExportFormat";

-- DropEnum
DROP TYPE "ExportStatus";

-- DropEnum
DROP TYPE "FeedbackStatus";

-- DropEnum
DROP TYPE "FeedbackType";

-- DropEnum
DROP TYPE "InvitationStatus";

-- DropEnum
DROP TYPE "NotificationPriority";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "SettingType";

-- DropEnum
DROP TYPE "TeamRole";

-- DropEnum
DROP TYPE "TemplateCategory";

-- DropEnum
DROP TYPE "UsageAction";

-- CreateIndex
CREATE INDEX "User_onboardingCompleted_idx" ON "User"("onboardingCompleted");

-- Drop old enum types after dependent objects are dropped
DROP TYPE "public"."ContentTone_old";
DROP TYPE "public"."SubscriptionStatus_old";
DROP TYPE "public"."SubscriptionTier_old";
