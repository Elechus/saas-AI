import { IDocument } from './DocumentDetails';
import { createContext, useContext, useReducer, ReactNode } from 'react';
import axios from 'axios';

interface PaginationMetadata {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface SearchState {
  query: string;
  filters: {
    country?: string;
    type?: string;
    expedient_type?: string;
    published?: boolean;
  };
  sort: 'relevance' | 'recent' | 'least_recent';
  page: number;
  pageSize: number;
  results: IDocument[];
  isLoading: boolean;
  pagination: PaginationMetadata;
}

type SearchAction =
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_FILTER'; payload: Partial<SearchState['filters']> }
  | { type: 'SET_SORT'; payload: SearchState['sort'] }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_RESULTS'; payload: IDocument[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_FILTERS' }
  | { type: 'SET_PAGINATION'; payload: PaginationMetadata };

const initialState: SearchState = {
  query: '',
  filters: {
    country: 'GT',
  },
  sort: 'relevance',
  page: 0,
  pageSize: 10,
  results: [],
  isLoading: false,
  pagination: {
    total: 0,
    page: 1,
    pageSize: 10,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false
  }
};

const SearchContext = createContext<{
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
  performSearch: () => Promise<void>;
} | null>(null);

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_FILTER':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'RESET_FILTERS':
      return { ...initialState, query: state.query };
    case 'SET_PAGINATION':
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const performSearch = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const response = await axios.post('http://localhost:3080/api/search/structured', {
        query: {
          ...state.filters,
          text: state.query || undefined
        },
        page: state.page,
        pageSize: state.pageSize,
        sort: state.sort
      });
      
      dispatch({ type: 'SET_RESULTS', payload: response.data.data });
      dispatch({ type: 'SET_PAGINATION', payload: response.data.metadata });
    } catch (error) {
      console.error('Search error:', error);
      dispatch({ type: 'SET_RESULTS', payload: [] });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <SearchContext.Provider value={{ state, dispatch, performSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
} 