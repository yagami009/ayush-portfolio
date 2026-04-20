import { Search, X } from "lucide-react";
import { useState, useCallback } from "react";

interface SearchBoxProps {
  onSearch: (query: string) => void;
  value: string;
  placeholder?: string;
}

export function SearchBox({ onSearch, value, placeholder = "Search articles..." }: SearchBoxProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = useCallback(() => {
    onSearch("");
  }, [onSearch]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 480,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--bg2)",
          border: `1px solid ${isFocused ? "var(--fg3)" : "var(--border)"}`,
          borderRadius: 8,
          padding: "10px 14px",
          transition: "border-color 0.15s ease",
        }}
      >
        <Search size={16} style={{ color: "var(--fg3)", marginRight: 10, flexShrink: 0 }} />
        <input
          type="text"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--fg)",
            fontFamily: "var(--font-body)",
            fontSize: 14,
            padding: 0,
          }}
        />
        {value && (
          <button
            onClick={handleClear}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 2,
              display: "flex",
              alignItems: "center",
              color: "var(--fg3)",
            }}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
