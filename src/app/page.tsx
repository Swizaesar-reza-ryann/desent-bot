'use client';

import NavCategories from '@/components/NavCategories';
import ItemCard from '@/components/ItemCard';
import SummaryPanel from '@/components/SummaryPanel';
import { WorkspaceProvider, useWorkspace } from '@/utils/workspaceState';

// Import data
import desksData from '@/data/desks.json';
import chairsData from '@/data/chairs.json';
import accessoriesData from '@/data/accessories.json';

const WorkspaceBuilder = () => {
  const { state, addItem, removeItem, updateQuantity, setActiveCategory } = useWorkspace();

  const getCategoryItems = (category: string) => {
    switch (category) {
      case 'Desks':
        return desksData;
      case 'Chairs':
        return chairsData;
      case 'Accessories':
        return accessoriesData;
      case 'All Items':
        return [...desksData, ...chairsData, ...accessoriesData];
      default:
        return [];
    }
  };

  const currentItems = getCategoryItems(state.activeCategory);

  const handleRent = () => {
    alert(
      '🎉 Congratulations! Your workspace setup is ready for rent. This would normally take you to checkout.'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🏢</div>
              <h1 className="text-2xl font-bold text-gray-900">monis.rent</h1>
            </div>
            <div className="text-sm text-gray-600">Build your perfect workspace</div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <NavCategories activeCategory={state.activeCategory} onCategoryChange={setActiveCategory} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Item Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">{state.activeCategory}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentItems.map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onSelect={selectedItem => addItem(item.category, selectedItem)}
                    isSelected={
                      state.selectedItems[
                        item.category.toLowerCase() as keyof typeof state.selectedItems
                      ]?.some(selectedItem => selectedItem.id === item.id) || false
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <SummaryPanel
              selectedItems={state.selectedItems}
              onRemoveItem={removeItem}
              onUpdateQuantity={updateQuantity}
              onRent={handleRent}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default function Home() {
  return (
    <WorkspaceProvider>
      <WorkspaceBuilder />
    </WorkspaceProvider>
  );
}
