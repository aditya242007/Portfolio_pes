export default function IntroStrip() {
  return (
    <div className="w-full border-y border-border bg-background/50 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 text-sm">
        
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="text-muted font-mono text-xs uppercase tracking-wider">Currently Building</span>
          <span className="font-medium text-foreground">FinTech Risk & Fraud Analytics Platform</span>
        </div>

        <div className="hidden md:block w-px h-4 bg-border"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="text-muted font-mono text-xs uppercase tracking-wider">Focus</span>
          <span className="text-foreground">Data Science + Data Engineering</span>
        </div>

        <div className="hidden lg:block w-px h-4 bg-border"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="text-muted font-mono text-xs uppercase tracking-wider">Stack</span>
          <span className="text-foreground">Python · SQL · PySpark · PostgreSQL · AWS</span>
        </div>

      </div>
    </div>
  );
}
