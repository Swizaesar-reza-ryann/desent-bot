'use client';

interface Item {
  id: string;
  name: string;
  price: number;
  icon: string;
  category: string;
}

interface ItemCardProps {
  item: Item;
  onSelect: (item: Item) => void;
  isSelected?: boolean;
}

const ItemCard = ({ item, onSelect, isSelected = false }: ItemCardProps) => {
  return (
    <button
      onClick={() => onSelect(item)}
      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-lg hover:scale-105 ${
        isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="text-4xl mb-2">{item.icon}</div>
      <div className="text-sm font-medium text-gray-900 text-center">{item.name}</div>
      <div className="text-xs text-gray-500 mt-1">${item.price}/mo</div>
    </button>
  );
};

export default ItemCard;
