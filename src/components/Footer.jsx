import { RiHeartFill } from "@remixicon/react"

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="flex items-center justify-center gap-1.5 text-sm text-[var(--text-secondary)]">
          Made by
          <span className="font-medium text-[var(--text-primary)]">
            Sehrish Bibi
          </span>
          <RiHeartFill className="h-4 w-4 text-[var(--accent)]" />
        </p>

        <p className="mt-1 text-xs text-[var(--text-secondary)]/70">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer