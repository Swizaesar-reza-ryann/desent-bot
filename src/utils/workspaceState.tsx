'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';

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

interface WorkspaceState {
  selectedItems: {
    desks: ItemWithQuantity[];
    chairs: ItemWithQuantity[];
    accessories: ItemWithQuantity[];
  };
  activeCategory: string;
}

type WorkspaceAction =
  | { type: 'ADD_ITEM'; payload: { category: string; item: Item } }
  | { type: 'REMOVE_ITEM'; payload: { category: string; itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { category: string; itemId: string; quantity: number } }
  | { type: 'SET_CATEGORY'; payload: string };

const initialState: WorkspaceState = {
  selectedItems: {
    desks: [],
    chairs: [],
    accessories: [],
  },
  activeCategory: 'Chairs',
};

function workspaceReducer(state: WorkspaceState, action: WorkspaceAction): WorkspaceState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { category, item } = action.payload;
      const categoryKey = category.toLowerCase() as keyof typeof state.selectedItems;

      // Check if item already exists and update quantity
      const existingItems = state.selectedItems[categoryKey];
      const existingItem = existingItems.find(existingItem => existingItem.id === item.id);

      if (existingItem) {
        // Update quantity of existing item
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            [categoryKey]: existingItems.map(existingItem =>
              existingItem.id === item.id
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : existingItem
            ),
          },
        };
      } else {
        // Add new item with quantity 1
        const itemWithQuantity: ItemWithQuantity = { ...item, quantity: 1 };
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            [categoryKey]: [...state.selectedItems[categoryKey], itemWithQuantity],
          },
        };
      }
    }

    case 'REMOVE_ITEM': {
      const { category, itemId } = action.payload;
      const categoryKey = category.toLowerCase() as keyof typeof state.selectedItems;

      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [categoryKey]: state.selectedItems[categoryKey].filter(item => item.id !== itemId),
        },
      };
    }

    case 'UPDATE_QUANTITY': {
      const { category, itemId, quantity } = action.payload;
      const categoryKey = category.toLowerCase() as keyof typeof state.selectedItems;

      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            [categoryKey]: state.selectedItems[categoryKey].filter(item => item.id !== itemId),
          },
        };
      }

      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [categoryKey]: state.selectedItems[categoryKey].map(item =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        },
      };
    }

    case 'SET_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      };

    default:
      return state;
  }
}

interface WorkspaceContextType {
  state: WorkspaceState;
  addItem: (category: string, item: Item) => void;
  removeItem: (category: string, itemId: string) => void;
  updateQuantity: (category: string, itemId: string, quantity: number) => void;
  setActiveCategory: (category: string) => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

const WorkspaceProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(workspaceReducer, initialState);

  const addItem = (category: string, item: Item) => {
    dispatch({ type: 'ADD_ITEM', payload: { category, item } });
  };

  const removeItem = (category: string, itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { category, itemId } });
  };

  const setActiveCategory = (category: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  const updateQuantity = (category: string, itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { category, itemId, quantity } });
  };

  return (
    <WorkspaceContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        setActiveCategory,
        updateQuantity,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};

export { WorkspaceProvider, useWorkspace };
