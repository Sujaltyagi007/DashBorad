-- CreateTable
CREATE TABLE "public"."email" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "subject" TEXT,
    "Date" TIMESTAMP(3) NOT NULL,
    "emailCategory" TEXT,

    CONSTRAINT "email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emailBody" (
    "heading" TEXT,
    "content" TEXT,
    "messageid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "emailBody_messageid_key" ON "public"."emailBody"("messageid");

-- AddForeignKey
ALTER TABLE "public"."emailBody" ADD CONSTRAINT "emailBody_messageid_fkey" FOREIGN KEY ("messageid") REFERENCES "public"."email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
