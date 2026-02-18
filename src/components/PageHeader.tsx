export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="gradient-hero text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
}
