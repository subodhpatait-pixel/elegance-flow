import logo from "@/assets/elevatex-logo.png";

export function Logo({ className = "h-44" }: { className?: string }) {
  return (
    <a href="/" className="inline-flex items-center gap-2 group">
      <img src={logo} alt="ElevateX" className={`${className} w-auto object-contain`} />
    </a>
  );
}
