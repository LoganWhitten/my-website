'use client';

export default function ClientFooter() {
  return (
    <footer className="absolute bottom-0 w-screen text-center flex gap-1 h-16 place-items-center place-content-center font-calendas italic text-gray-400 text-sm">
      © {new Date().getFullYear()}
      <a
        className="hover:underline"
        href="https://www.instagram.com/loganwhitten512"
      >
        Logan Whitten
      </a>
    </footer>
  );
}