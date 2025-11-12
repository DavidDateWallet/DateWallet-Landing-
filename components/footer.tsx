import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} DateWallet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
