import { 
  HiGlobeAmericas,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineBookOpen,
  HiOutlineScale 
} from 'react-icons/hi2';

export const quickFilterButtons = [
  {
    icon: HiGlobeAmericas,
    label: 'Treaties',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    icon: HiOutlineScale,
    label: 'Cases',
    bgColor: 'bg-zinc-100 dark:bg-zinc-800',
    textColor: 'text-zinc-600 dark:text-zinc-400'
  },
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    label: 'Rules',
    bgColor: 'bg-amber-100 dark:bg-amber-900/30',
    textColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    icon: HiOutlineBookOpen,
    label: 'Publications',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    textColor: 'text-purple-600 dark:text-purple-400'
  }
];

export default function QuickFilterButtons() {
  return (
    <div className="flex justify-center space-x-12">
      {quickFilterButtons.map((button, index) => (
        <button key={index} className="flex flex-col items-center">
          <div className={`rounded-full ${button.bgColor} p-3`}>
            <button.icon className={`h-6 w-6 ${button.textColor}`} />
          </div>
          <span className="mt-2 text-sm">{button.label}</span>
        </button>
      ))}
    </div>
  );
} 