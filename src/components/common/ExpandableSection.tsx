import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ExpandableSectionProps = {
    items: React.ReactNode[];
    initialCount?: number;
    title: string;
};

export default function ExpandableSection({ items, initialCount = 2, title }: ExpandableSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasMore = items?.length > initialCount;
    const displayedItems = isExpanded ? items : items.slice(0, initialCount);

    return (
        <div className="space-y-8">
            <div className="space-y-12">
                {displayedItems}
            </div>

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full transition-colors"
                    >
                        {isExpanded ? (
                            <>
                                Show Less {title}
                                <ChevronUp size={20} />
                            </>
                        ) : (
                            <>
                                View All {title}
                                <ChevronDown size={20} />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}