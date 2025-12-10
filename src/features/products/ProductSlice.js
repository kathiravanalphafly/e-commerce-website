import { createSlice } from "@reduxjs/toolkit";
import products from "../../ProductsContent";

// Function: Get 1 product per category
const getOneProductPerCategory = (items) => {
  const unique = {};
  items.forEach((p) => {
    if (!unique[p.category]) {
      unique[p.category] = p;
    }
  });
  return Object.values(unique);
};

const initialState = {
  items: products,
  filteredItems: [],         // Home la 1 product per category
  searchTerm: "",
  selectedCategory: "",
};

// Filtering function (category + search)
const filterProducts = (state) => {
  // Home default state
  if (!state.searchTerm && state.selectedCategory === "All") {
    return state.items;
  }

  // "All" means show everything
  if (state.selectedCategory === "All") {
    return state.items.filter((product) =>
      product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  // Specific Category
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchCategory = product.category === state.selectedCategory;

    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // This runs when home page loads first time
    initializeHome: (state) => {
      state.filteredItems = getOneProductPerCategory(state.items);
      state.selectedCategory = ""; // So full list won't load automatically
      state.searchTerm = "";
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;

      // Home → All clicked
      if (action.payload === "") {
        state.filteredItems = getOneProductPerCategory(state.items);
        return;
      }

      state.filteredItems = filterProducts(state);
    },

    addProduct: (state, action) => {
      state.items.push(action.payload);
      state.filteredItems = [...state.items];
    },

    deleteProduct: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.filteredItems = [...state.items];
    }
  },
});

export const {
  initializeHome,
  setSearchTerm,
  setSelectedCategory,
  addProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
