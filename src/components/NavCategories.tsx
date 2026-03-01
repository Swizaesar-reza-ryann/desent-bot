'use client';

interface NavCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['Chairs', 'Desks', 'Accessories', 'All Items'];

const NavCategories = ({ activeCategory, onCategoryChange }: NavCategoriesProps) => {
  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-4">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-2 sm:space-y-0">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-600 whitespace-nowrap ${
              activeCategory === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavCategories;
