-- CreateTable
CREATE TABLE "profiles" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "focus_minutes" INTEGER NOT NULL DEFAULT 25,
    "break_minutes" INTEGER NOT NULL DEFAULT 5,
    "cycles" INTEGER NOT NULL DEFAULT 4,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- Bloqueia o acesso pela API pública do Supabase. O acesso é feito só pela API do Pomomates.
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;