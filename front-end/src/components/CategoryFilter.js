import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="mb-4">
            <button
                onClick={() => onSelectCategory(null)}
                className={`m-4 py-2 px-4 rounded ${selectedCategory === null ? 'bg-red-500 shadow-md hover:shadow-lg text-white' : 'bg-gray-300 text-gray-700'
                    }`}
            >
                All Courses
            </button>
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={`m-4 py-2 px-4 rounded ${selectedCategory === category.id ? 'bg-red-500 text-white' : 'bg-gray-100 shadow-md hover:shadow-lg text-gray-700'
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
