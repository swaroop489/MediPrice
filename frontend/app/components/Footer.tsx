import Link from "next/link";
import { Pill } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-start gap-4 col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20">
                <Pill className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold tracking-tight text-lg">
                MediPrice
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Built for transparent medicine pricing. Compare prescription prices across nearby pharmacies instantly and save money.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-sm text-foreground">Company</h3>
            <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About Us</Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-sm text-foreground">Legal</h3>
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MediPrice. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Search</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
