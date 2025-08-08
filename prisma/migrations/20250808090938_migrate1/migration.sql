-- CreateTable
CREATE TABLE "email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "subject" TEXT,
    "Date" DATETIME NOT NULL,
    "emailCategory" TEXT
);

-- CreateTable
CREATE TABLE "emailBody" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "messageId" INTEGER NOT NULL,
    "heading" TEXT,
    "content" TEXT,
    CONSTRAINT "emailBody_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "email" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
