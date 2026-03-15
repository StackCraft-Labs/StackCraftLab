interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: string;
}

export default function ContactCard({ icon, title, description, content }: ContactCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="w-10 h-10 text-gray-800 mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      <p className="text-gray-900 font-medium">{content}</p>
    </div>
  );
}
