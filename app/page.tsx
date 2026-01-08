export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-semibold tracking-tight">
          Juan Nicolas Guerrero
        </h1>

        <p className="mt-4 text-neutral-600">
          Computer Science @ Vanderbilt (Class of 2026). Interested in product,
          fintech, and building useful software.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/juan-guerrero-jg1613/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 hover:bg-neutral-50 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/jguerr16"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 hover:bg-neutral-50 transition"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            className="rounded-xl border px-4 py-2 hover:bg-neutral-50 transition"
            download
          >
            Download Resume
          </a>
        </div>

        <p className="mt-10 text-sm text-neutral-500">
          Email:{" "}
          <a
            href="mailto:juannicolas.guerrero@vanderbilt.edu"
            className="underline"
          >
            juannicolas.guerrero@vanderbilt.edu
          </a>
        </p>
      </div>
    </main>
  );
}
