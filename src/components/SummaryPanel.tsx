'use client';

interface Item {
  id: string;
  name: string;
  price: number;
  icon: string;
  category: string;
}

interface ItemWithQuantity extends Item {
  quantity: number;
}

interface SummaryPanelProps {
  selectedItems: {
    desks: ItemWithQuantity[];
    chairs: ItemWithQuantity[];
    accessories: ItemWithQuantity[];
  };
  onRemoveItem: (category: string, itemId: string) => void;
  onUpdateQuantity: (category: string, itemId: string, quantity: number) => void;
  onRent: () => void;
}

export default function SummaryPanel({
  selectedItems,
  onRemoveItem,
  onUpdateQuantity,
  onRent,
}: SummaryPanelProps) {
  const allItems = [
    ...selectedItems.desks.map((item, index) => ({
      ...item,
      category: 'Desks',
      uniqueKey: `desks-${item.id}-${index}`,
    })),
    ...selectedItems.chairs.map((item, index) => ({
      ...item,
      category: 'Chairs',
      uniqueKey: `chairs-${item.id}-${index}`,
    })),
    ...selectedItems.accessories.map((item, index) => ({
      ...item,
      category: 'Accessories',
      uniqueKey: `accessories-${item.id}-${index}`,
    })),
  ];

  const totalPrice = allItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (allItems.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Setup Summary</h3>

      <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
        {allItems.map(item => (
          <div
            key={item.uniqueKey}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() =>
                    onUpdateQuantity(item.category.toLowerCase(), item.id, item.quantity - 1)
                  }
                  className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-sm"
                >
                  -
                </button>
                <span className="text-sm font-medium text-gray-900 w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    onUpdateQuantity(item.category.toLowerCase(), item.id, item.quantity + 1)
                  }
                  className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>
              <div className="text-sm font-medium text-gray-900">
                ${item.price * item.quantity}/mo
              </div>
              <button
                onClick={() => onRemoveItem(item.category.toLowerCase(), item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-sm text-gray-600">Total Monthly</div>
            <div className="text-2xl font-bold text-gray-900">${totalPrice}</div>
          </div>
          <div className="text-sm text-gray-500">
            {allItems.length} {allItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <button
          onClick={onRent}
          className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
        >
          Rent Your Setup!
        </button>
      </div>
    </div>
  );
}
