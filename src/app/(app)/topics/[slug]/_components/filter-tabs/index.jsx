function FilterTabs() {
  return (
    <div className="sticky top-16 z-40 border-b border-gray-200 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center space-x-8 overflow-x-auto">
          <button className="border-b-2 border-gray-900 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
            Latest
          </button>
          <button className="py-4 text-sm whitespace-nowrap text-muted-foreground hover:text-gray-900">
            Top
          </button>
          <button className="py-4 text-sm whitespace-nowrap text-muted-foreground hover:text-gray-900">
            Featured
          </button>
          <button className="py-4 text-sm whitespace-nowrap text-muted-foreground hover:text-gray-900">
            Writers
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterTabs;
