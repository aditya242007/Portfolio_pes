import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium tracking-tight">ADITYA KALURE</span>
          <span className="text-sm text-muted">Data × Engineering × Intelligence</span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 text-sm text-muted">
          <div className="flex items-center gap-6">
            <a href="[PLACEHOLDER_GITHUB_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="[PLACEHOLDER_LINKEDIN_URL]" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:[PLACEHOLDER_EMAIL]" className="hover:text-foreground transition-colors flex items-center gap-2">
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
          
          <div>
            © {currentYear} Aditya Kalure
          </div>
        </div>
      </div>
    </footer>
  );
}
