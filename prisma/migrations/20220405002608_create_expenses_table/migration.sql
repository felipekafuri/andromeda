-- CreateTable
CREATE TABLE "expenses" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);
